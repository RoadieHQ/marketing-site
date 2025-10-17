import isEmpty from 'lodash/isEmpty.js';

// It doesn't make sense to sum the download counts from each of the plugins when displaying
// the number of downloads. The download count for the catalog plugin backend is likely the
// same as the download count for the catalog plugin frontend. So, we will just use the first
// package name in the list to fetch the download count.
//
// The branching logic in this function is a transition state. Once all plugins are migrated 
// to have packages (even it it's just one package), this function will simplify.
const pluginNpmPackageNameForStats = (plugin) => {
  if (isEmpty(plugin.packages)) {
    return plugin.npmPackageName;
  } else {
    return plugin.packages[0].npmPackageName;
  }
}

export default pluginNpmPackageNameForStats;
