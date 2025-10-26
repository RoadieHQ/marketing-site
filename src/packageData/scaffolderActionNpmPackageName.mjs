// Extracts the NPM package name from a scaffolder action's containedInPackage property
const scaffolderActionNpmPackageName = (action) => {
  return action.containedInPackage?.npmPackageName;
}

export default scaffolderActionNpmPackageName;
