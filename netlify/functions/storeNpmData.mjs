import storePackageData from '../../src/npmPackageData/storePackageData.mjs';

const storeNpmData = async () => {
  const { modified, etag } = await storePackageData({ authStrategy: 'automatic' });

  return new Response(JSON.stringify({
    data: {
      modified,
      etag,
    },
  }));
};

export default storeNpmData;
