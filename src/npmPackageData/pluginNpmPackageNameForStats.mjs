import isEmpty from 'lodash/isEmpty.js';

const pluginNpmPackageNameForStats = (plugin) => {
  if (isEmpty(plugin.packages)) {
    return plugin.npmPackageName;
  } else {
    return plugin.packages[0].npmPackageName;
  }
}

export default pluginNpmPackageNameForStats;
