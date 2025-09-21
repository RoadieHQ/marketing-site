import storePackageData from '../../src/npmPackageData/storePackageData.mjs';

const storeNpmData = async () => {
  const [modified, etag] = await storePackageData({ authStrategy: 'automatic' });

  console.log('resp', modified, etag);

  return new Response(JSON.stringify({
    data: {
      modified,
      etag,
    },
  }));
};

export default storeNpmData;
