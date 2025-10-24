import { getStore, getDeployStore } from '@netlify/blobs';

const BASE_STORE_NAME = 'npm-package-data';

const normalizeLogMessage = (message) => message.replace(/\s+/g, ' ');

const logConnectionSuccess = (storeName, isDeploySpecific = false) => {
  if (process.env.NODE_ENV !== 'development') return;

  const storeType = isDeploySpecific ? 'deploy-specific' : '';
  console.log(normalizeLogMessage(
    `Successfully connected (via automatic authentication) to the ${storeType} Netlify Blobs store. Store name: ${storeName}`
  ));
};

const logAuthFallback = (storeName, isDeploySpecific = false) => {
  const storeType = isDeploySpecific ? 'deploy-specific ' : '';
  const devNote = isDeploySpecific ? '' : `
    NOTE: Token authentication will NOT connect to the Netlify blobs local development
    sandbox, even when running in a development environment.`;

  console.log(normalizeLogMessage(`
    Automatic authentication failed for ${storeType}Netlify Blobs store. Using the token found in
    process.env.NETLIFY_API_TOKEN instead. Store name: ${storeName}${devNote}
  `));
};

/**
 * Determines the appropriate store name based on the environment.
 * - production: npm-package-data (shared across production deploys)
 * - development: npm-package-data-dev (Netlify blobs sandbox)
 * - test: npm-package-data-test
 * - deploy-preview: npm-package-data (isolated per deploy via getDeployStore)
 */
const getStoreName = () => {
  const nodeEnv = process.env.NODE_ENV;
  const context = process.env.CONTEXT; // Netlify context: production, deploy-preview, branch-deploy, dev

  // Test environment (running Jest tests)
  if (nodeEnv === 'test') {
    return `${BASE_STORE_NAME}-test`;
  }

  // Development environment (local development with Netlify Dev)
  if (nodeEnv === 'development' || context === 'dev') {
    return `${BASE_STORE_NAME}-dev`;
  }

  // Production or deploy preview
  return BASE_STORE_NAME;
};

/**
 * Gets a Netlify Blobs store with appropriate environment isolation.
 * - Deploy previews use getDeployStore (automatic per-deploy isolation)
 * - Other environments use getStore with environment-specific names
 *
 * It's worth reading about Netlify blobs authentication here:
 * https://docs.netlify.com/build/data-and-storage/netlify-blobs/#getstore
 * https://docs.netlify.com/build/data-and-storage/netlify-blobs/#deploy-specific-stores
 */
const getRoadieStore = ({
  name = getStoreName(),
  siteID = process.env.NETLIFY_SITE_ID,
} = {}) => {
  const context = process.env.CONTEXT;
  const isDeployPreview = context === 'deploy-preview';

  // Use getDeployStore for deploy previews (automatic isolation per deploy)
  if (isDeployPreview) {
    try {
      const store = getDeployStore({ name });
      logConnectionSuccess(name, true);
      return store;
    } catch (err) {
      if (err.name === 'MissingBlobsEnvironmentError') {
        logAuthFallback(name, true);
        return getDeployStore({
          name,
          siteID,
          token: process.env.NETLIFY_API_TOKEN,
          deployID: process.env.DEPLOY_ID
        });
      }
      throw err;
    }
  }

  // Use getStore for production, development, and test (shared data)
  const opts = { name, siteID };
  try {
    const store = getStore(opts);
    logConnectionSuccess(name, false);
    return store;
  } catch (err) {
    if (err.name === 'MissingBlobsEnvironmentError') {
      logAuthFallback(name, false);
      opts.token = process.env.NETLIFY_API_TOKEN;
      return getStore(opts);
    }
    throw err;
  }
};

export default getRoadieStore;
export { getStoreName };
