// Extracts the package name from a scaffolder action's containedInPackage property
const scaffolderActionPackageName = (action) => {
  return action.containedInPackage?.npmPackageName;
}

export default scaffolderActionPackageName;
