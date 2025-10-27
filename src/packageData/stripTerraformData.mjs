// Terraform registry data can include large version histories and other metadata.
// We strip out properties we don't need before storing to reduce storage overhead
// and improve browser fetch performance.
//
// This function transforms Terraform registry data to match the structure of npm package data,
// allowing downstream code to work with both registries using a unified interface.

const stripTerraformData = (data, packageName) => {
  const versions = data.versions || [];
  const latestVersion = data.version;

  return {
    _id: packageName,
    name: packageName,
    registry: 'terraform',
    license: data.license || 'Unknown',
    repository: data.source ? { url: data.source } : null,
    numberOfVersions: versions.length,
    time: {
      created: null, // terraform registry doesn't have this
      [latestVersion]: data.published_at,
    },
    latestVersion,
    latestVersionPublishedTime: data.published_at,
    // Downloads data - note: Terraform may not provide this, defaults to 0
    downloadCount: data.downloads || 0,
    downloadCountPeriod: 'THIS_YEAR', // This is the only stat the registry provides
  };
};

export default stripTerraformData;
