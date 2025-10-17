import reduce from 'lodash/reduce.js';

import { PLUGINS_QUERY } from '../queries/gatsbyNodeQueries.mjs';
import pluginNpmPackageNameForStats from './pluginNpmPackageNameForStats.mjs';

const listOfNpmPackages = async ({ graphql }) => {
  const { data, errors } = await graphql(PLUGINS_QUERY);

  if (errors) {
    throw errors;
  }

  return reduce(data.plugins.edges, (list, { node }) => {
    const npmPackageName = pluginNpmPackageNameForStats(node);

    if (npmPackageName) {
      list.push(npmPackageName);
    }

    return list;
  }, []);
};

export default listOfNpmPackages;
