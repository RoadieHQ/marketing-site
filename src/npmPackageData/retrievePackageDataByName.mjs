import getRoadieStore from './getRoadieStore.mjs';

const retrievePackageDataByName = async ({
  packageName,
  authStrategy,
}) => {
  if (typeof packageName === 'undefined' || packageName === '') {
    throw new Error(`
      Argument packageName '${packageName}' must not be undefined or an empty string.
    `);
  }

  const store = getRoadieStore({ authStrategy });
  return store.get(packageName, { type: 'json' });
};

export default retrievePackageDataByName;
