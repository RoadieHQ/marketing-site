const { getStore } = require('@netlify/blobs');
const reduce = require('lodash/reduce');

const { PLUGINS_QUERY, } = require('../queries/gatsbyNodeQueries');


const storeBackstagePluginNpmPackageNames = async (graphql) => {
  const { data, errors } = await graphql(PLUGINS_QUERY);
  const STORE_KEY = 'backstage-plugin-npm-package-names';

  if (errors) {
    throw errors;
  }

  const listOfNpmPackages = reduce(
    data.plugins.edges,
    (list, { node }) => {
      if (node.frontmatter.npmjsPackage) {
        list.push(node.frontmatter.npmjsPackage);
      }
      return list;
    },
    []
  );

  const store = getStore({
    name: 'npmPackages',
    siteID: process.env.GATSBY_NETLIFY_SITE_ID,
    token: process.env.GATSBY_NETLIFY_API_TOKEN,
  });

  const { modified, etag } = await store.setJSON(STORE_KEY, listOfNpmPackages);
  console.log('Stored backstage plugin npm packages', modified, etag);
  return { modified, etag };
};

module.exports = storeBackstagePluginNpmPackageNames;
