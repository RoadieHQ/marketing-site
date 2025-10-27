import reduce from 'lodash/reduce.js';
import uniq from 'lodash/uniq.js';

import { PLUGINS_QUERY, SCAFFOLDER_ACTIONS_QUERY } from '../queries/gatsbyNodeQueries.mjs';
import pluginPackageForStats from './pluginPackageForStats.mjs';
import scaffolderActionPackageForStats from './scaffolderActionPackageForStats.mjs';

const listOfPackages = async ({ graphql }) => {
  // Fetch plugins
  const pluginsResult = await graphql(PLUGINS_QUERY);
  if (pluginsResult.errors) {
    throw pluginsResult.errors;
  }

  // Fetch scaffolder actions
  const actionsResult = await graphql(SCAFFOLDER_ACTIONS_QUERY);
  if (actionsResult.errors) {
    throw actionsResult.errors;
  }

  // Extract package names from plugins
  const pluginPackages = reduce(pluginsResult.data.plugins.edges, (list, { node }) => {
    const pluginPackage = pluginPackageForStats(node);
    if (pluginPackage) {
      list.push(pluginPackage);
    }
    return list;
  }, []);

  // Extract package names from scaffolder actions
  const actionPackages = reduce(actionsResult.data.actions.edges, (list, { node }) => {
    const actionPackage = scaffolderActionPackageForStats(node);
    if (actionPackage) {
      list.push(actionPackage);
    }
    return list;
  }, []);

  // Combine and deduplicate (some packages contain both plugins and actions)
  return uniq([...pluginPackages, ...actionPackages]);
};

export default listOfPackages;
