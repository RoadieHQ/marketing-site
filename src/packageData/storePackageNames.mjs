import { ALL_PACKAGE_NAMES_STORE_KEY } from './constants.mjs';
import getRoadieStore from './getRoadieStore.mjs';

const storePackageNames = async (listOfPackages) => {
  const store = getRoadieStore();
  const { modified, etag } = await store.setJSON(ALL_PACKAGE_NAMES_STORE_KEY, listOfPackages);
  console.log('Stored backstage plugin npm package names', modified, etag);
  return { modified, etag };
};

export default storePackageNames;
