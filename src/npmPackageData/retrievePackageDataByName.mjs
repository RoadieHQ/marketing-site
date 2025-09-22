import getRoadieStore from './getRoadieStore.mjs';

const retrievePackageDataByName = async ({
  packageName,
}) => {
  if (typeof packageName === 'undefined' || packageName === '') {
    throw new Error(`
      Argument packageName '${packageName}' must not be undefined or an empty string.
    `);
  }

  const store = getRoadieStore();
  return store.get(packageName, { type: 'json' });
};

export default retrievePackageDataByName;
