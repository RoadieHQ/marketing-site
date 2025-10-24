// It doesn't make sense to sum the download counts from each of the plugins when displaying
// the number of downloads. The download count for the catalog plugin backend is likely the
// same as the download count for the catalog plugin frontend. So, we will just use the first
// package name in the list to fetch the download count.
//
// Returns an object with { packageName, registry } where registry defaults to 'npm' if not specified.
const pluginPackageNameForStats = (plugin) => {
  if (!plugin.packages || plugin.packages.length === 0) {
    return null;
  }

  const firstPackage = plugin.packages[0];
  return {
    packageName: firstPackage.npmPackageName,
    registry: firstPackage.registry || 'npm', // Default to npm for backward compatibility
  };
}

export default pluginPackageNameForStats;
