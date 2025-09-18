const { getStore } = require('@netlify/blobs');

const STORE_NAME = 'npm-package-data';
const VALID_AUTH_STRATEGIES = ['automatic', 'token'];

const getRoadieStore = ({
  storeName = STORE_NAME,
  authStrategy,
  siteID = process.env.GATSBY_NETLIFY_SITE_ID,
} = {}) => {
  if (!VALID_AUTH_STRATEGIES.includes(authStrategy)) {
    throw new Error(`
      Invalid authStrategy found in #getRoadieStore. Expected one of ${VALID_AUTH_STRATEGIES}.
      Found ${authStrategy}.
    `);
  }

  const opts = { name: storeName, siteID };

  if (authStrategy === 'token') {
    opts.token = process.env.GATSBY_NETLIFY_API_TOKEN;
  }

  return getStore(opts);
};

module.exports = getRoadieStore;
