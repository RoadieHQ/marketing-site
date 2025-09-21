import getRoadieStore from './getRoadieStore.mjs';

const retrievePackageDataByName = async ({
  packageName,
  authStrategy,
}) => {
  const store = getRoadieStore({ authStrategy });
  return store.get(packageName, { type: 'json' });
};

export default retrievePackageDataByName;
