const { ALL_PACKAGE_NAMES_STORE_KEY } = require('./constants');
const getRoadieStore = require('./getRoadieStore');

const retrievePackageNames = async ({ authStrategy }) => {
  const store = getRoadieStore({ authStrategy });
  return store.get(ALL_PACKAGE_NAMES_STORE_KEY, { type: 'json' });
};

module.exports = retrievePackageNames;
