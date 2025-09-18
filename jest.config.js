// This configuration will use babel to transpile two packages from the node_modules. Other
// packages will be ignored.
//
// This has to happen because jest cannot understand ECMAScript modules. This is fine most of the
// time because packages ship with ESM and CommonJS versions. However, the runtime-utils package
// has a file which has no CommonJS equivilent (/node_modules/@netlify/runtime-utils/dist/main.js:5).
// This package is required by the @netlify/blobs package.
//
// There is a GitHub issue here: https://github.com/netlify/primitives/issues/437
//
// This config, plus babel.config.js, plus the babel-jest package and the @babel/preset-env package
// can probably all be removed if that issue is fixed.
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(?:@netlify/runtime-utils|@netlify/blobs)/)',
  ],
};
