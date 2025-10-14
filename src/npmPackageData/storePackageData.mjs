import reduce from 'lodash/reduce.js';
import isArray from 'lodash/isArray.js';
import find from 'lodash/find.js';

import getRoadieStore from './getRoadieStore.mjs';
import retrievePackageNames from './retrievePackageNames.mjs';
import stripPackageData from './stripPackageData.mjs';
import { ALL_PACKAGE_DATA_STORE_KEY } from './constants.mjs';

const NPM_REGISTRY_HOSTNAME = 'https://registry.npmjs.org/';
const NPM_REGISTRY_API = 'https://api.npmjs.org/';

// Rate limiting configuration
const MAX_CONCURRENT_REQUESTS = 10; // Limit concurrent requests to avoid rate limiting
const RETRY_ATTEMPTS = 3;
const RETRY_DELAY_MS = 1000; // 1 second base delay

/**
 * Rate-limited Promise.all that processes promises in batches
 * @param {Array} items - Items to process
 * @param {Function} fn - Async function to apply to each item
 * @param {number} concurrency - Max number of concurrent operations
 * @returns {Promise<Array>} Results array
 */
const promiseAllWithConcurrency = async (items, fn, concurrency = MAX_CONCURRENT_REQUESTS) => {
  const results = [];
  const executing = [];

  for (const [index, item] of items.entries()) {
    const promise = fn(item, index).then((result) => {
      executing.splice(executing.indexOf(promise), 1);
      return result;
    });

    results.push(promise);
    executing.push(promise);

    if (executing.length >= concurrency) {
      await Promise.race(executing);
    }
  }

  return Promise.all(results);
};

/**
 * Fetch with retry logic and exponential backoff
 * @param {string} url - URL to fetch
 * @param {number} attempts - Number of retry attempts
 * @returns {Promise<Response>} Fetch response
 */
const fetchWithRetry = async (url, attempts = RETRY_ATTEMPTS) => {
  for (let i = 0; i < attempts; i++) {
    try {
      const response = await fetch(url);

      // If rate limited (429) or server error (5xx), retry
      if (response.status === 429 || response.status >= 500) {
        if (i < attempts - 1) {
          const delay = RETRY_DELAY_MS * Math.pow(2, i); // Exponential backoff
          console.log(
            `Rate limited or error for ${url}, retrying in ${delay}ms (attempt ${
              i + 1
            }/${attempts})`
          );
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }
      }

      return response;
    } catch (error) {
      if (i < attempts - 1) {
        const delay = RETRY_DELAY_MS * Math.pow(2, i);
        console.log(
          `Network error for ${url}, retrying in ${delay}ms (attempt ${i + 1}/${attempts}):`,
          error.message
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        console.error(`Failed to fetch ${url} after ${attempts} attempts:`, error.message);
        throw error;
      }
    }
  }
};

// We want to store as little data as possible to use on /backstage/plugins/ so that the
// page renderes as quickly as possible. The more data we store, the more we have to download
// to the browser.
const extraStripPackageData = ({ time, latestVersion, lastMonthDownloads }) => ({
  latestVersionPublishedTime: time[latestVersion],
  lastMonthDownloads,
});

const storePackageData = async () => {
  let listOfNpmPackages = await retrievePackageNames();

  if (!isArray(listOfNpmPackages)) {
    console.log(`No package names found in store. Receive:`, listOfNpmPackages);
    listOfNpmPackages = [];
  }

  // if error, returns:
  //   [{packageName: '...', error: 'HTTP: sdds', data: null},
  //    {packageName: '...', error: null, data: {...}]

  // Docs: https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md
  // Fetch package metadata with rate limiting and error handling
  console.log(
    `Fetching package metadata for ${listOfNpmPackages.length} packages with concurrency limit of ${MAX_CONCURRENT_REQUESTS}...`
  );

  const npmDataResults = await promiseAllWithConcurrency(listOfNpmPackages, async (packageName) => {
    try {
      const response = await fetchWithRetry(`${NPM_REGISTRY_HOSTNAME}${packageName}`);

      if (!response.ok) {
        console.error(
          `Failed to fetch package data for ${packageName}: ${response.status} ${response.statusText}`
        );
        return { packageName, error: `HTTP ${response.status}`, data: null };
      }

      const data = await response.json();
      return { packageName, error: null, data };
    } catch (error) {
      console.error(`Error fetching package data for ${packageName}:`, error.message);
      return { packageName, error: error.message, data: null };
    }
  });

  // Filter out failed requests and extract successful data
  const npmData = npmDataResults
    .filter((result) => result.data !== null)
    .map((result) => result.data);

  const failedPackages = npmDataResults.filter((result) => result.data === null);
  if (failedPackages.length > 0) {
    console.warn(
      `Failed to fetch ${failedPackages.length} packages:`,
      failedPackages.map((r) => r.packageName)
    );
  }

  // Docs: https://github.com/npm/registry/blob/main/docs/download-counts.md
  //
  // It's possible to send a comma separated list of packages to this endpoint to get
  // download stats for all of them, but it doesn't support namespaced packages at the
  // moment. Many backstage packages are namespaced, like @roadie... or @backstage...
  console.log(
    `Fetching download stats for ${listOfNpmPackages.length} packages with concurrency limit of ${MAX_CONCURRENT_REQUESTS}...`
  );

  const statsDataResults = await promiseAllWithConcurrency(
    listOfNpmPackages,
    async (packageName) => {
      try {
        const response = await fetchWithRetry(
          `${NPM_REGISTRY_API}downloads/point/last-month/${packageName}`
        );

        if (!response.ok) {
          console.warn(
            `Failed to fetch stats for ${packageName}: ${response.status} ${response.statusText}`
          );
          return { packageName, error: `HTTP ${response.status}`, data: null };
        }

        const data = await response.json();
        return { packageName, error: null, data };
      } catch (error) {
        console.warn(`Error fetching stats for ${packageName}:`, error.message);
        return { packageName, error: error.message, data: null };
      }
    }
  );

  // Extract stats data (failures are acceptable for stats)
  const statsData = statsDataResults
    .filter((result) => result.data !== null)
    .map((result) => result.data);

  const failedStats = statsDataResults.filter((result) => result.data === null);
  if (failedStats.length > 0) {
    console.warn(
      `Failed to fetch stats for ${failedStats.length} packages (continuing without stats)`
    );
  }

  const strippedNpmData = npmData
    .map((data) => stripPackageData(data))
    .map((data) => {
      const statsDataForPackage = find(statsData, { package: data.name });
      if (statsDataForPackage) data.lastMonthDownloads = statsDataForPackage.downloads;
      return data;
    });

  const dataAsObject = reduce(
    strippedNpmData,
    (obj, packageData) => {
      obj[packageData.name] = extraStripPackageData(packageData);
      obj.roadieLastUpdated = new Date().toISOString();
      return obj;
    },
    {}
  );

  const store = getRoadieStore();

  // We store the data in two ways:
  // 1. A big object with keys which refer to the names of the npm packages.
  // 2. Individually, where each npm package has a unique key in the Netlify blob store.
  //
  // The data is duplicated because there will be two different ways which we want to access it.
  // 1. On a page which lists a bunch of plugins. We need to download all the plugin data in
  //    one request.
  // 2. On the page that represents a single plugin, we only want to download the data for that
  //    particular plugin. This will be faster.
  const { modified, etag } = await store.setJSON(ALL_PACKAGE_DATA_STORE_KEY, dataAsObject);
  await Promise.all(
    strippedNpmData.map((packageData) => {
      return store.setJSON(packageData.name, {
        ...packageData,
        roadieLastUpdated: new Date().toISOString(),
      });
    })
  );

  console.log('Stored backstage plugin npm package data.', modified, etag);
  return { modified, etag };
};

export default storePackageData;
