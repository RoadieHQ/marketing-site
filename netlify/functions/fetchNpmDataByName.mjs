import retrievePackageDataByName from '../../src/npmPackageData/retrievePackageDataByName.mjs';

const fetchNpmDataByName = async (req) => {
  const packageName = new URL(req.url).searchParams.get('packageName')
  console.log('Fetching Npm package data with name:', packageName);

  const resp = await retrievePackageDataByName({ packageName });

  return new Response(JSON.stringify({
    data: {
      ...resp,
    },
  }));
};

export default fetchNpmDataByName;
