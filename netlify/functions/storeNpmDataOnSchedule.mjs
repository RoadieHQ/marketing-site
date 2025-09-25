import storePackageData from '../../src/npmPackageData/storePackageData.mjs';

const storeNpmData = async () => {
  const { modified, etag } = await storePackageData();

  return new Response(JSON.stringify({
    data: {
      modified,
      etag,
    },
  }));
};

export const config = {
  schedule: '0 */6 * * *',
};

export default storeNpmData;
