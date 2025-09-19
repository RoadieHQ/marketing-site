const { getStore } = require('@netlify/blobs');

const STORE_NAME = 'npm-package-data';
const VALID_AUTH_STRATEGIES = ['automatic', 'token'];

const getRoadieStore = ({
  name = STORE_NAME,
  authStrategy,
  siteID = process.env.NETLIFY_SITE_ID,
} = {}) => {
  if (!VALID_AUTH_STRATEGIES.includes(authStrategy)) {
    throw new Error(`
      Invalid authStrategy found in #getRoadieStore. Expected one of ${VALID_AUTH_STRATEGIES}.
      Found ${authStrategy}.
    `);
  }

  console.log('log keys', typeof process.env.NETLIFY_API_TOKEN, process.env.NETLIFY_API_TOKEN.length, process.env.NETLIFY_API_TOKEN.slice(-4));

  const opts = { name, siteID };

  if (authStrategy === 'token') {
    opts.token = process.env.NETLIFY_API_TOKEN;
  }

  return getStore(opts);
};

module.exports = getRoadieStore;
