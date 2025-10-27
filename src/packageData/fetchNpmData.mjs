import find from 'lodash/find.js';

import stripNpmPackageData from './stripNpmPackageData.mjs';
import {
  fetchWithRetry,
  promiseAllWithConcurrency,
  MAX_CONCURRENT_REQUESTS
} from './fetchUtils.mjs';

const NPM_REGISTRY_HOSTNAME = 'https://registry.npmjs.org/';
const NPM_REGISTRY_API = 'https://api.npmjs.org/';

/**
 * Fetch NPM package metadata from the NPM registry
 * @param {string} packageName - NPM package name
 * @returns {Promise<Object>} Package metadata result
 */
const fetchNpmPackage = async (packageName) => {
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
};

/**
 * Fetch NPM package download statistics
 * @param {string} packageName - NPM package name
 * @returns {Promise<Object>} Download stats result
 */
const fetchNpmPackageStats = async (packageName) => {
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
};

/**
 * Fetch multiple NPM packages with rate limiting
 * @param {Array<string>} packageNames - Array of package names
 * @returns {Promise<Array>} Array of results with stripped data
 */
export const fetchMultipleNpmPackages = async (packageNames) => {
  // Docs: https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md
  // Fetch package metadata with rate limiting and error handling
  console.log(
    `Fetching package metadata for ${packageNames.length} npm packages with concurrency limit of ${MAX_CONCURRENT_REQUESTS}...`
  );

  const npmDataResults = await promiseAllWithConcurrency(packageNames, fetchNpmPackage);

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
    `Fetching download stats for ${packageNames.length} npm packages with concurrency limit of ${MAX_CONCURRENT_REQUESTS}...`
  );

  const statsDataResults = await promiseAllWithConcurrency(packageNames, fetchNpmPackageStats);

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

  const strippedPackageData = npmData
    .map((data) => stripNpmPackageData(data))
    .map((data) => {
      const statsDataForPackage = find(statsData, { package: data.name });
      if (statsDataForPackage) {
        data.downloadCount = statsDataForPackage.downloads;
        data.downloadCountPeriod = 'LAST_MONTH';
      }
      return data;
    });

  return strippedPackageData;
};

export default fetchNpmPackage;
