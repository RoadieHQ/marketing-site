import pluginPackageNameForStats from "../../../packageData/pluginPackageNameForStats.mjs";
import pick from 'lodash/pick';

const hydratePlugin = (plugin, packageData) => {
  const packageInfo = pluginPackageNameForStats(plugin);

  if (!packageInfo) {
    plugin.packageData = {};
    plugin.packageRegistry = null;
    return plugin;
  }

  const { packageName, registry } = packageInfo;
  const pluginPackageData = packageData[packageName];

  if (pluginPackageData) {
    plugin.packageData = {
      ...pick(pluginPackageData, ['downloadCount', 'downloadCountPeriod']),
      latestVersionPublishedTime: new Date(Date.parse(pluginPackageData.latestVersionPublishedTime)),
    };
  } else {
    plugin.packageData = {};
  }

  // Store registry info for later use in components
  plugin.packageRegistry = registry;

  return plugin;
};

export default hydratePlugin;
