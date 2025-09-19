const { storePackageData } = require('../../src/npmPackageData');

const fetchNpmData = async () => {
  const resp = await storePackageData({ authStrategy: 'automatic' });

  console.log('resp', resp);

  return new Response({
    resp,
  });
};

module.exports = fetchNpmData;
