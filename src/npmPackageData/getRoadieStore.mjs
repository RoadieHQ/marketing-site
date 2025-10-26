import { getStore, getDeployStore } from '@netlify/blobs';

const BASE_STORE_NAME = 'npm-package-data';

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

// It's worth reading about Netlify blobs authentication here:
// https://docs.netlify.com/build/data-and-storage/netlify-blobs/#getstore
// https://docs.netlify.com/build/data-and-storage/netlify-blobs/#deploy-specific-stores
const getRoadieStore = ({
  name = getStoreName(),
  siteID = process.env.NETLIFY_SITE_ID,
} = {}) => {
  const context = process.env.CONTEXT;
  const nodeEnv = process.env.NODE_ENV;
  const isDeployPreview = context === 'deploy-preview';

  // Use getDeployStore for deploy previews (automatic isolation per deploy)
  // Use getStore for production, development, and test (shared data)
  if (isDeployPreview) {
    try {
      const store = getDeployStore({ name });
      if (nodeEnv === 'development') {
        console.log(`Successfully connected to deploy-specific Netlify Blobs store. Store name: ${name}`.replace(/\s+/g, " "));
      }
      return store;
    } catch(err) {
      if (err.name === 'MissingBlobsEnvironmentError') {
        console.warn(`
          Automatic authentication failed for deploy-specific Netlify Blobs store. Using the token found in
          process.env.NETLIFY_API_TOKEN instead. Store name: ${name}`.replace(/\s+/g, " "));
        return getDeployStore({ name, token: process.env.NETLIFY_API_TOKEN });
      } else {
        throw err;
      }
    }
  }

  // Use getStore for non-preview environments
  const opts = { name, siteID };
  let store;
  try {
    store = getStore(opts);
    if (nodeEnv === 'development') {
      console.log(`Successfully connected (via automatic authentication) to the Netlify Blobs
      sandbox. Store name: ${name}`.replace(/\s+/g, " "));
    }
  } catch(err) {
    if (err.name === 'MissingBlobsEnvironmentError') {
      console.warn(`
        Automatic authentication failed for Netlify Blobs store. Using the token found in
        process.env.NETLIFY_API_TOKEN instead. Store name: ${name}
        NOTE: Token authentication will NOT connect to the Netlify blobs local development
        sandbox, even when running in a development environment.`.replace(/\s+/g, " "));

      opts.token = process.env.NETLIFY_API_TOKEN;
      store = getStore(opts);
    } else {
      throw err;
    }
  }

  return store;
};

export default getRoadieStore;
export { getStoreName };
