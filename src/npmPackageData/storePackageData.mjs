import reduce from 'lodash/reduce.js';
import isArray from 'lodash/isArray.js';
import find from 'lodash/find.js';

import getRoadieStore from './getRoadieStore.mjs';
import retrievePackageNames from './retrievePackageNames.mjs';
import stripPackageData from './stripPackageData.mjs';
import { ALL_PACKAGE_DATA_STORE_KEY } from './constants.mjs';

const NPM_REGISTRY_HOSTNAME = 'https://registry.npmjs.org/';
const NPM_REGISTRY_API = 'https://api.npmjs.org/'

// We want to store as little data as possible to use on /backstage/plugins/ so that the 
// page renderes as quickly as possible. The more data we store, the more we have to download
// to the browser.
const extraStripPackageData = ({ time, latestVersion, lastMonthDownloads, }) => ({
  latestVersionPublishedTime: time[latestVersion],
  lastMonthDownloads,
});

const storePackageData = async () => {
  let listOfNpmPackages = await retrievePackageNames();

  if (!isArray(listOfNpmPackages)) {
    console.log(`No package names found in store. Receive:`, listOfNpmPackages);
    listOfNpmPackages = [];
  }

  console.log('Retrieved', listOfNpmPackages.length, 'packages names from blob store.');

  // Docs: https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md
  const npmResponses = await Promise.all(listOfNpmPackages.map((packageName) => (
    fetch(`${NPM_REGISTRY_HOSTNAME}${packageName}`)
  )));

  const npmData = await Promise.all(npmResponses.map((resp) => resp.json()));

  // Docs: https://github.com/npm/registry/blob/main/docs/download-counts.md
  //
  // It's possible to send a comma separated list of packages to this endpoint to get
  // download stats for all of them, but it doesn't support namespaced packages at the 
  // moment. Many backstage packages are namespaced, like @roadie... or @backstage...
  //
  // This will get rate limited at some point as the plugins directory grows.
  const statsResponses = await Promise.all(listOfNpmPackages.map((packageName) => (
    fetch(`${NPM_REGISTRY_API}downloads/point/last-month/${packageName}`)
  )));

  const statsData = await Promise.all(statsResponses.map((resp) => resp.json()));

  const strippedNpmData = npmData
    .map((data) => stripPackageData(data))
    .map((data) => {
      const statsDataForPackage = find(statsData, { package: data.name });
      if (statsDataForPackage) data.lastMonthDownloads = statsDataForPackage.downloads;
      return data;
    });

  const dataAsObject = reduce(strippedNpmData, (obj, packageData) => {
    obj[packageData.name] = extraStripPackageData(packageData);
    obj.roadieLastUpdated = new Date().toISOString();
    return obj;
  }, {});

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
  await Promise.all(strippedNpmData.map((packageData) => {
    return store.setJSON(packageData.name, {
      ...packageData,
      roadieLastUpdated: new Date().toISOString(),
    });
  }));

  console.log('Stored backstage plugin npm package data', modified, etag);
  return { modified, etag };
};

export default storePackageData;
