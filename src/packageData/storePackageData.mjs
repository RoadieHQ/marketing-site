import reduce from 'lodash/reduce.js';
import isArray from 'lodash/isArray.js';

import getRoadieStore from './getRoadieStore.mjs';
import retrievePackageNames from './retrievePackageNames.mjs';
import { fetchMultipleTerraformProviders } from './fetchTerraformData.mjs';
import { fetchMultipleNpmPackages } from './fetchNpmData.mjs';
import { ALL_PACKAGE_DATA_STORE_KEY } from './constants.mjs';

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
  const strippedNpmData = await fetchMultipleNpmPackages(npmPackages);

  // Fetch Terraform providers
  console.log(`Fetching ${terraformPackages.length} terraform providers...`);
  const terraformData = await fetchMultipleTerraformProviders(terraformPackages);

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
      return store.setJSON(packageData.name, {
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
