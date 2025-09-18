const reduce = require('lodash/reduce');

const { PLUGINS_QUERY } = require('../queries/gatsbyNodeQueries');
const { ALL_PACKAGE_NAMES_STORE_KEY } = require('./constants');
const getRoadieStore = require('./getRoadieStore');

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

const storePackageNames = async (graphql, { authStrategy }) => {
  const listOfNpmPackages = await listOfNpmPackagesFromFiles({ graphql });
  const store = getRoadieStore({ authStrategy });
  const { modified, etag } = await store.setJSON(ALL_PACKAGE_NAMES_STORE_KEY, listOfNpmPackages);
  console.log('Stored backstage plugin npm package names', modified, etag);
  return { modified, etag };
};

module.exports = storePackageNames;
