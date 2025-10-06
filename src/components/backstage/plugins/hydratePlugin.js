const hydratePlugin = (plugin, npmData) => {
  const pluginNpmData = npmData[plugin.npmPackageName];
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
