import storePackageData from '../../src/packageData/storePackageData.mjs';

const storePackageDataOnSchedule = async () => {
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

export default storePackageDataOnSchedule;
