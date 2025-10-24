import getRoadieStore from './getRoadieStore.mjs';
import { getVersionedPackageKey } from './constants.mjs';

const retrievePackageDataByName = async ({
  packageName,
}) => {
  if (typeof packageName === 'undefined' || packageName === '') {
    throw new Error(`
      Argument packageName '${packageName}' must not be undefined or an empty string.
    `);
  }

  const store = getRoadieStore();
  const versionedKey = getVersionedPackageKey(packageName);
  return store.get(versionedKey, { type: 'json' });
};

export default retrievePackageDataByName;
