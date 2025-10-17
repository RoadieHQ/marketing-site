import pluginNpmPackageNameForStats from "../../../npmPackageData/pluginNpmPackageNameForStats.mjs";

const hydratePlugin = (plugin, npmData) => {
  const npmPackageName = pluginNpmPackageNameForStats(plugin);

  const pluginNpmData = npmData[npmPackageName];
  if (pluginNpmData) {
    plugin.npmData = {
      lastMonthDownloads: pluginNpmData.lastMonthDownloads,
      latestVersionPublishedTime: new Date(Date.parse(pluginNpmData.latestVersionPublishedTime)),
    };
  } else {
    plugin.npmData = {};
  }
  return plugin;
};

export default hydratePlugin;
