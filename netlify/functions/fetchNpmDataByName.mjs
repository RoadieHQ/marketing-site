import retrievePackageDataByName from '../../src/npmPackageData/retrievePackageDataByName.mjs';

const fetchNpmDataByName = async (req) => {
  const packageName = new URL(req.url).searchParams.get('packageName')

  console.log('packageName', packageName);
  const resp = await retrievePackageDataByName({
    packageName,
    authStrategy: 'automatic',
  });

  console.log('resp', resp);

  return new Response(JSON.stringify({
    data: {
      ...resp,
    },
  }));
};

export default fetchNpmDataByName;
