import { ALL_PACKAGE_DATA_STORE_KEY } from './constants.mjs';
import getRoadieStore from './getRoadieStore.mjs';

const retrievePackageDataForList = async () => {
  const store = getRoadieStore();
  return store.get(ALL_PACKAGE_DATA_STORE_KEY, { type: 'json' });
};

export default retrievePackageDataForList;
