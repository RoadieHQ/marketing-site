import retrievePackageDataByName from '../../src/npmPackageData/retrievePackageDataByName.mjs';

const fetchNpmDataByName = async (req, context) => {
  const { packageName } = context.params;
  console.log('context.packageName', packageName);
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
