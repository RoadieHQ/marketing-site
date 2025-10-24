import reduce from 'lodash/reduce.js';
import isArray from 'lodash/isArray.js';
import find from 'lodash/find.js';

import getRoadieStore from './getRoadieStore.mjs';
import retrievePackageNames from './retrievePackageNames.mjs';
import stripPackageData from './stripPackageData.mjs';
import { fetchMultipleTerraformProviders } from './fetchTerraformData.mjs';
import { ALL_PACKAGE_DATA_STORE_KEY, getVersionedPackageKey } from './constants.mjs';
import {
  fetchWithRetry,
  promiseAllWithConcurrency,
  MAX_CONCURRENT_REQUESTS
} from './fetchUtils.mjs';

const NPM_REGISTRY_HOSTNAME = 'https://registry.npmjs.org/';
const NPM_REGISTRY_API = 'https://api.npmjs.org/';

// We want to store as little data as possible to use on /backstage/plugins/ so that the
// page renderes as quickly as possible. The more data we store, the more we have to download
// to the browser.
const extraStripPackageData = ({ time, latestVersion, downloadCount, downloadCountPeriod }) => ({
  latestVersionPublishedTime: time[latestVersion],
  downloadCount,
  downloadCountPeriod,
});

const storePackageData = async () => {
  let listOfPackages = await retrievePackageNames();

  if (!isArray(listOfPackages)) {
    console.log(`No package names found in store. Received:`, listOfPackages);
    listOfPackages = [];
  }

  // Separate npm and terraform packages
  const npmPackages = listOfPackages
    .filter((pkg) => pkg.registry === 'npm')
    .map((pkg) => pkg.packageName);
  const terraformPackages = listOfPackages
    .filter((pkg) => pkg.registry === 'terraform')
    .map((pkg) => pkg.packageName);

  console.log(
    `Found ${npmPackages.length} npm packages and ${terraformPackages.length} terraform packages`
  );

  // Fetch npm packages
  // if error, returns:
  //   [{packageName: '...', error: 'HTTP: sdds', data: null},
  //    {packageName: '...', error: null, data: {...}]

  // Docs: https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md
  // Fetch package metadata with rate limiting and error handling
  console.log(
    `Fetching package metadata for ${npmPackages.length} npm packages with concurrency limit of ${MAX_CONCURRENT_REQUESTS}...`
  );

  const npmDataResults = await promiseAllWithConcurrency(npmPackages, async (packageName) => {
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

  // Fetch Terraform providers
  console.log(`Fetching ${terraformPackages.length} terraform providers...`);
  const terraformData = await fetchMultipleTerraformProviders(terraformPackages);
  console.log('terraformData', terraformData);

  // Docs: https://github.com/npm/registry/blob/main/docs/download-counts.md
  //
  // It's possible to send a comma separated list of packages to this endpoint to get
  // download stats for all of them, but it doesn't support namespaced packages at the
  // moment. Many backstage packages are namespaced, like @roadie... or @backstage...
  console.log(
    `Fetching download stats for ${npmPackages.length} npm packages with concurrency limit of ${MAX_CONCURRENT_REQUESTS}...`
  );

  const statsDataResults = await promiseAllWithConcurrency(
    npmPackages,
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
      if (statsDataForPackage) {
        data.downloadCount = statsDataForPackage.downloads;
        data.downloadCountPeriod = 'LAST_MONTH';
      }
      return data;
    });

  // Combine npm and terraform data
  const allPackageData = [...strippedNpmData, ...terraformData];

  const dataAsObject = reduce(
    allPackageData,
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
    allPackageData.map((packageData) => {
      const versionedKey = getVersionedPackageKey(packageData.name);
      return store.setJSON(versionedKey, {
        ...packageData,
        roadieLastUpdated: new Date().toISOString(),
      });
    })
  );

  console.log(
    `Stored ${npmPackages.length} npm and ${terraformPackages.length} terraform package data.`,
    modified,
    etag
  );
  return { modified, etag };
};

export default storePackageData;
