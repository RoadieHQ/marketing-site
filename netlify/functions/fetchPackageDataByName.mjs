import retrievePackageDataByName from '../../src/packageData/retrievePackageDataByName.mjs';

const fetchPackageDataByName = async (req) => {
  const packageName = new URL(req.url).searchParams.get('packageName')
  console.log('Fetching package data with name:', packageName);

  const resp = await retrievePackageDataByName({ packageName });

  return new Response(JSON.stringify({
    data: {
      ...resp,
    },
  }));
};

export default fetchPackageDataByName;
