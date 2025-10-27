import storePackageData from '../../src/packageData/storePackageData.mjs';

const storePackageDataFunction = async () => {
  const { modified, etag } = await storePackageData();

  return new Response(JSON.stringify({
    data: {
      modified,
      etag,
    },
  }));
};

export default storePackageDataFunction;
