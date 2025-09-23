import reduce from 'lodash/reduce.js';

import { PLUGINS_QUERY } from '../queries/gatsbyNodeQueries.mjs';

const listOfNpmPackagesFromFiles = async ({ graphql }) => {
  const { data, errors } = await graphql(PLUGINS_QUERY);

  if (errors) {
    throw errors;
  }

  return reduce(data.plugins.edges, (list, { node }) => {
    if (node.npmPackageName) {
      list.push(node.npmPackageName);
    }
    return list;
  }, []);
};

export default listOfNpmPackagesFromFiles;
