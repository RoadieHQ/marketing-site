const { getStore } = require('@netlify/blobs');
const reduce = require('lodash/reduce');

const { PLUGINS_QUERY, } = require('../queries/gatsbyNodeQueries');

const NPM_PACKAGE_NAMES_STORE_KEY = 'backstage-plugin-npm-package-names';
const NPM_PACKAGE_DATA_STORE_KEY = 'backstage-plugin-npm-package-data';
const VALID_AUTH_STRATEGIES = ['automatic', 'token'];
const DEFAULT_AUTH_STRATEGY = 'automatic';
const NPM_REGISTRY_HOSTNAME = 'https://registry.npmjs.org/';

const getRoadieStore = ({
  storeName = 'npmPackages',
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

const storeBackstagePluginNpmPackageNames = async (graphql, authStrategy = DEFAULT_AUTH_STRATEGY) => {
  const listOfNpmPackages = await listOfNpmPackagesFromFiles({ graphql });
  const store = getRoadieStore({ authStrategy });
  const { modified, etag } = await store.setJSON(NPM_PACKAGE_NAMES_STORE_KEY, listOfNpmPackages);
  console.log('Stored backstage plugin npm package names', modified, etag);
  return { modified, etag };
};

const retrieveBackstagePluginNpmPackageNames = async ({ authStrategy = DEFAULT_AUTH_STRATEGY } = {}) => {
  const store = getRoadieStore({ authStrategy });
  return store.get(NPM_PACKAGE_NAMES_STORE_KEY, { type: 'json' });
};

const storeBackstagePluginNpmData = async ({ authStrategy = DEFAULT_AUTH_STRATEGY } = {}) => {
  const listOfNpmPackages = await retrieveBackstagePluginNpmPackageNames({ authStrategy });

  const npmResponses = await Promise.all(listOfNpmPackages.slice(0, 5).map((packageName) => {
    return fetch(`${NPM_REGISTRY_HOSTNAME}${packageName}`);
  }));

  const npmData = await Promise.all(npmResponses.map((resp) => resp.json()));

  const dataAsObject = reduce(npmData, (obj, packageData) => {
    obj[packageData.name] = packageData;
    return obj;
  }, {});

  const store = getRoadieStore({ authStrategy });
  const { modified, etag } = await store.setJSON(NPM_PACKAGE_DATA_STORE_KEY, dataAsObject);
  console.log('Stored backstage plugin npm package data', modified, etag);
  return { modified, etag };
};

module.exports = {
  storeBackstagePluginNpmPackageNames,
  retrieveBackstagePluginNpmPackageNames,
  storeBackstagePluginNpmData,
};
