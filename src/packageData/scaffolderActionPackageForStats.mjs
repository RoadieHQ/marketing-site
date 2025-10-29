// Extracts the package name from a scaffolder action's containedInPackage property
const scaffolderActionPackageForStats = (action) => {
  if (!action.containedInPackage) {
    return null;
  }

  const { npmPackageName, registry } = action.containedInPackage;
  return {
    packageName: npmPackageName,
    registry,
  };
}

export default scaffolderActionPackageForStats;
