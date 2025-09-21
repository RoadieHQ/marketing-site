import retrievePackageDataByName from '../../src/npmPackageData/retrievePackageDataByName.mjs';

const fetchNpmDataByName = async (req) => {
  const packageName = new URL(req.url).searchParams.get('packageName')

  const resp = await retrievePackageDataByName({
    packageName,
    authStrategy: 'automatic',
  });

  return new Response(JSON.stringify({
    data: {
      ...resp,
    },
  }));
};

export default fetchNpmDataByName;
