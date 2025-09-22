import { ALL_PACKAGE_NAMES_STORE_KEY } from './constants.mjs';
import getRoadieStore from './getRoadieStore.mjs';

const retrievePackageNames = async () => {
  const store = getRoadieStore();
  return store.get(ALL_PACKAGE_NAMES_STORE_KEY, { type: 'json' });
};

export default retrievePackageNames;
