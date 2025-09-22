import { ALL_PACKAGE_NAMES_STORE_KEY } from './constants.mjs';
import getRoadieStore from './getRoadieStore.mjs';

const storePackageNames = async (listOfNpmPackages, { authStrategy }) => {
  const store = getRoadieStore({ authStrategy });
  const { modified, etag } = await store.setJSON(ALL_PACKAGE_NAMES_STORE_KEY, listOfNpmPackages);
  console.log('Stored backstage plugin npm package names', modified, etag);
  return { modified, etag };
};

export default storePackageNames;
