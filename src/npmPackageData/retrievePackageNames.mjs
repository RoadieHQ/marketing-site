import { ALL_PACKAGE_NAMES_STORE_KEY } from './constants.mjs';
import getRoadieStore from './getRoadieStore.mjs';

const retrievePackageNames = async ({ authStrategy }) => {
  const store = getRoadieStore({ authStrategy });
  return store.get(ALL_PACKAGE_NAMES_STORE_KEY, { type: 'json' });
};

export default retrievePackageNames;
