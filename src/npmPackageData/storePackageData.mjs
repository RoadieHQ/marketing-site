import reduce from 'lodash/reduce.js';

import getRoadieStore from './getRoadieStore.mjs';
import retrievePackageNames from './retrievePackageNames.mjs';
import stripPackageData from './stripPackageData.mjs';

const NPM_REGISTRY_HOSTNAME = 'https://registry.npmjs.org/';
const ALL_PACKAGE_DATA_STORE_KEY = `all-backstage-plugin-package-data`;

const storePackageData = async ({ authStrategy }) => {
  const listOfNpmPackages = await retrievePackageNames({ authStrategy });

  const npmResponses = await Promise.all(listOfNpmPackages.map((packageName) => (
    fetch(`${NPM_REGISTRY_HOSTNAME}${packageName}`)
  )));

  const npmData = (await Promise.all(npmResponses.map((resp) => resp.json())))
    .map((data) => stripPackageData(data));

  const dataAsObject = reduce(npmData, (obj, packageData) => {
    obj[packageData.name] = packageData;
    obj.roadieLastUpdated = new Date().toISOString();
    return obj;
  }, {});

  const store = getRoadieStore({ authStrategy });

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
  Promise.all(npmData.map((packageData) => {
    return store.setJSON(packageData.name, {
      ...packageData,
      roadieLastUpdated: new Date().toISOString(),
    });
  }));

  console.log('Stored backstage plugin npm package data', modified, etag);
  return { modified, etag };
};

export default storePackageData;
