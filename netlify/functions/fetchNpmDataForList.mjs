import retrievePackageDataForList from '../../src/npmPackageData/retrievePackageDataForList.mjs';

const fetchNpmDataForList = async () => {
  const resp = await retrievePackageDataForList();

  return new Response(JSON.stringify({
    data: {
      ...resp,
    },
  }));
};

export default fetchNpmDataForList;
