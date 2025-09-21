// env $(cat .env | xargs) yarn node bin/store_npm_package_data.js

import retrievePackageDataByName from '../src/npmPackageData/retrievePackageDataByName.mjs';
// import storePackageData from '../src/npmPackageData/storePackageData.mjs';

// storePackageData({ authStrategy: 'token' });
const res = await retrievePackageDataByName({
  authStrategy: 'token',
  packageName: '',
});

console.log(res);
