// env $(cat .env | xargs) yarn node bin/store_npm_package_data.js

import { storePackageData } from '../src/npmPackageData';

storePackageData({ authStrategy: 'token' });
