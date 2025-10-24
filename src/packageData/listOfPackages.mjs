import reduce from 'lodash/reduce.js';

import { PLUGINS_QUERY } from '../queries/gatsbyNodeQueries.mjs';
import pluginPackageNameForStats from './pluginPackageNameForStats.mjs';

const listOfPackages = async ({ graphql }) => {
  const { data, errors } = await graphql(PLUGINS_QUERY);

  if (errors) {
    throw errors;
  }

  return reduce(data.plugins.edges, (list, { node }) => {
    const packageInfo = pluginPackageNameForStats(node);

    if (packageInfo) {
      list.push(packageInfo);
    }

    return list;
  }, []);
};

export default listOfPackages;
