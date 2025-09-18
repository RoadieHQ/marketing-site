const getRoadieStore = require('./getRoadieStore');

const retrievePackageDataByName = async ({
  packageName,
  authStrategy,
}) => {
  const store = getRoadieStore({ authStrategy });
  return store.get(packageName, { type: 'json' });
};

module.exports = retrievePackageDataByName;
