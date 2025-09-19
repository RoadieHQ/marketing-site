import reduce from 'lodash/reduce.js';

import { PLUGINS_QUERY } from '../queries/gatsbyNodeQueries.mjs';
import { ALL_PACKAGE_NAMES_STORE_KEY } from './constants.mjs';
import getRoadieStore from './getRoadieStore.mjs';

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

// This expects to run at gatsby build time.
const storePackageNames = async (graphql, { authStrategy }) => {
  const listOfNpmPackages = await listOfNpmPackagesFromFiles({ graphql });
  const store = getRoadieStore({ authStrategy });
  const { modified, etag } = await store.setJSON(ALL_PACKAGE_NAMES_STORE_KEY, listOfNpmPackages);
  console.log('Stored backstage plugin npm package names', modified, etag);
  return { modified, etag };
};

export default storePackageNames;
