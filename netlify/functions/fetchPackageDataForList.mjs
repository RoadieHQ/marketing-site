import retrievePackageDataForList from '../../src/packageData/retrievePackageDataForList.mjs';

const fetchPackageDataForList = async () => {
  const resp = await retrievePackageDataForList();

  return new Response(JSON.stringify({
    data: {
      ...resp,
    },
  }));
};

export default fetchPackageDataForList;
