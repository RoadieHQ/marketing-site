const get = require('lodash/get');

const CSP_SCRIPT_SRC_DIRECTIVES = (() => {
  const directives = [
    "'self'",
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    // Recaptchas are served from https://www.google.com. gstatic.com is also involved.
    'https://www.google.com',
    'https://www.gstatic.com',
    // The cookie consent we use seems to load from jsdelivr.net.
    'https://cdn.jsdelivr.net',
    'https://widget.intercom.io',
    'https://js.intercomcdn.com',
    'https://player.vimeo.com',
    // Google Tag Manager and plausible analytics will require nonces to verify script integrity.
    // There is no weasy way to generate a nonce with Netlify, so I don't have a good solution
    // for enabling CSP on these scripts. For this reason, I'm adding the unsafe-inline keyword
    // for now. See: https://app.shortcut.com/larder/story/8401/remove-unsafe-inline-from-csp
    "'unsafe-inline'",
    'https://*.cloudfront.net',
  ];

  if (get(process.env, 'CONTEXT') === 'deploy-preview') {
    directives.push('https://netlify-cdp-loader.netlify.app/netlify.js');
  }

  return directives.join(' ');
})();

const CSP_IMG_SRC_DIRECTIVES = [
  "'self'",
  // Contentful serves images from https://images.ctfassets.net
  'https://images.ctfassets.net',
  'data:',
  'https://www.google-analytics.com',
  'https://www.google.com',
  'https://www.google.ie',
  'https://cdn.loom.com',
  'https://images.contentful.com',
].join(' ');

const CSP_FRAME_SRC_DIRECTIVES = (() => {
  const directives = [
    "'self'",
    'https://player.vimeo.com',
    'https://www.loom.com',
  ];

  if (get(process.env, 'CONTEXT') === 'deploy-preview') {
    directives.push('https://app.netlify.com');
    directives.push('https://www.google.com');
  }

  return directives.join(' ');
})();

// Gatsby seems to use inline styles for lots of use cases. For example, any styles
// loaded in gatsby-browser.js are added inline. There are probably 10 different errors
// about blocked inline styles if this keyword is not in place. It's not ideal to allow
// unsafe-inline styles but tackling all of the Gatsby inline styles doesn't seem
// reasonable.
// The cookie consent we use seems to load from jsdelivr.net.
const CSP_STYLE_SRC_DIRECTIVES = "'self' 'unsafe-inline' https://cdn.jsdelivr.net";

const CSP_CONNECT_SRC_DIRECTIVES = [
  "'self'",
  'https://*.ingest.sentry.io',
  'https://www.google-analytics.com',
  'https://stats.g.doubleclick.net',
  'https://api-iam.eu.intercom.io',
  'ws://*.intercom.io',
].join(' ');


module.exports = {
  'img-src': CSP_IMG_SRC_DIRECTIVES,
  'connect-src': CSP_CONNECT_SRC_DIRECTIVES,
  'script-src': CSP_SCRIPT_SRC_DIRECTIVES,
  'style-src': CSP_STYLE_SRC_DIRECTIVES,
  'frame-src': CSP_FRAME_SRC_DIRECTIVES,
};
