import retrievePackageDataByName from '../../src/npmPackageData/retrievePackageDataByName.mjs';

const fetchNpmDataByName = async (req, context) => {
  const resp = await retrievePackageDataByName({
    packageName: context.packageName,
    authStrategy: 'automatic',
  });

  console.log('resp', resp);

  return new Response({
    data: JSON.stringify(resp),
  });
};

export default fetchNpmDataByName;
