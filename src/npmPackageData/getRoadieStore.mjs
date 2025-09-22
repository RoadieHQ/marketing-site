import { getStore } from '@netlify/blobs';
import get from 'lodash/get.js';

const STORE_NAME = 'npm-package-data';

const getRoadieStore = ({
  name = STORE_NAME,
  siteID = process.env.NETLIFY_SITE_ID,
} = {}) => {
  const opts = { name, siteID }
  let store;
  try {
    store = getStore(opts);
    if (get(process.env, 'NODE_ENV') === 'development') {
      console.log(`Successfully connected (via automatic authentication) to the Netlify Blobs
      sandbox.`.replace(/\s+/g, " "));
    }
  } catch(err) {
    if (err.name === 'MissingBlobsEnvironmentError') {
      console.warn(`
        You are connected to the production Netlify blob store. Automatic authentication failed
        for Netlify Blobs store. Using the token found in process.env.NETLIFY_API_TOKEN instead.
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
