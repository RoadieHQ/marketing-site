import storePackageData from '../../src/npmPackageData/storePackageData.mjs';

const fetchNpmData = async () => {
  const resp = await storePackageData({ authStrategy: 'automatic' });

  console.log('resp', resp);

  return new Response({
    resp,
  });
};

export default fetchNpmData;
