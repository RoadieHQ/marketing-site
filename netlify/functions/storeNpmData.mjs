import storePackageData from '../../src/npmPackageData/storePackageData.mjs';

const storeNpmData = async () => {
  const [modified, etag] = await storePackageData({ authStrategy: 'automatic' });

  console.log('resp', modified, etag);

  return new Response({
    data: JSON.stringify({
      modified,
      etag,
    }),
  });
};

export default storeNpmData;
