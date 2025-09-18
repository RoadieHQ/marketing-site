// env $(cat .env | xargs) yarn node bin/store_npm_package_data.js

const { storePackageData } = require('../src/npmPackageData');

storePackageData({ authStrategy: 'token' });
