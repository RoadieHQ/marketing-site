const { getStore } = require('@netlify/blobs');
const reduce = require('lodash/reduce');
const pick = require('lodash/pick');

const { PLUGINS_QUERY } = require('../queries/gatsbyNodeQueries');

const STORE_NAME = 'npm-package-data';
const ALL_PACKAGE_NAMES_STORE_KEY = `all-backstage-plugin-package-names`;
const ALL_PACKAGE_DATA_STORE_KEY = `all-backstage-plugin-package-data`;
const VALID_AUTH_STRATEGIES = ['automatic', 'token'];
const DEFAULT_AUTH_STRATEGY = 'automatic';
const NPM_REGISTRY_HOSTNAME = 'https://registry.npmjs.org/';

const getRoadieStore = ({
  storeName = STORE_NAME,
  authStrategy = DEFAULT_AUTH_STRATEGY,
  siteID = process.env.GATSBY_NETLIFY_SITE_ID,
} = {}) => {
  if (!VALID_AUTH_STRATEGIES.includes(authStrategy)) {
    throw new Error(`
      Invalid authStrategy found in #getRoadieStore. Expected one of ${VALID_AUTH_STRATEGIES}.
      Found ${authStrategy}.
    `);
  }

  const opts = { name: storeName, siteID };

  if (authStrategy === 'token') {
    opts.token = process.env.GATSBY_NETLIFY_API_TOKEN;
  }

  return getStore(opts);
};

const listOfNpmPackagesFromFiles = async ({ graphql }) => {
  const { data, errors } = await graphql(PLUGINS_QUERY);

  if (errors) {
    throw errors;
  }

  return reduce(data.plugins.edges, (list, { node }) => {
    if (node.frontmatter.npmjsPackage) {
      list.push(node.frontmatter.npmjsPackage);
    }
    return list;
  }, []);
};

const stripNpmPackage = (data) => {
  const latestVersionNumber = data['dist-tags'].latest;
  return {
    ...pick(data, [
      '_id',
      '_rev',
      'name',
      'license',
      'repository',
      'maintainers',
      'time',
      'homepage',
    ]),
    ...pick(data.versions[latestVersionNumber], ['backstage']),
    time: pick(data.time, ['created', 'modified', latestVersionNumber]),
    numberOfVersions: Object.keys(data.versions).length,
    latestVersion: data['dist-tags'].latest,
  };
};

const storeBackstagePluginNpmPackageNames = async (graphql, { authStrategy = DEFAULT_AUTH_STRATEGY } = {}) => {
  const listOfNpmPackages = await listOfNpmPackagesFromFiles({ graphql });
  const store = getRoadieStore({ authStrategy });
  const { modified, etag } = await store.setJSON(ALL_PACKAGE_NAMES_STORE_KEY, listOfNpmPackages);
  console.log('Stored backstage plugin npm package names', modified, etag);
  return { modified, etag };
};

const retrieveBackstagePluginNpmPackageNames = async ({ authStrategy = DEFAULT_AUTH_STRATEGY } = {}) => {
  const store = getRoadieStore({ authStrategy });
  return store.get(ALL_PACKAGE_NAMES_STORE_KEY, { type: 'json' });
};

const storeBackstagePluginNpmData = async ({ authStrategy = DEFAULT_AUTH_STRATEGY } = {}) => {
  const listOfNpmPackages = await retrieveBackstagePluginNpmPackageNames({ authStrategy });

  const npmResponses = await Promise.all(listOfNpmPackages.slice(0, 5).map((packageName) => (
    fetch(`${NPM_REGISTRY_HOSTNAME}${packageName}`)
  )));

  const npmData = (await Promise.all(npmResponses.map((resp) => resp.json())))
    .map((data) => stripNpmPackage(data));

  const dataAsObject = reduce(npmData, (obj, packageData) => {
    obj[packageData.name] = packageData;
    return obj;
  }, {});

  const store = getRoadieStore({ authStrategy });
  const { modified, etag } = await store.setJSON(ALL_PACKAGE_DATA_STORE_KEY, dataAsObject);

  Promise.all(npmData.map((packageData) => {
    return store.setJSON(packageData.name, packageData);
  }));

  console.log('Stored backstage plugin npm package data', modified, etag);
  return { modified, etag };
};

const deleteBackstagePluginData = ({ key, authStrategy = DEFAULT_AUTH_STRATEGY }) => {
  const store = getRoadieStore({ authStrategy });
  store.delete(key);
};

module.exports = {
  storeBackstagePluginNpmPackageNames,
  storeBackstagePluginNpmData,
  stripNpmPackage,
  deleteBackstagePluginData,
};
