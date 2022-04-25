const get = require('lodash/get');

const CSP_SCRIPT_SRC_DIRECTIVES = (() => {
  const directives = [
    "'self'",
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    // Recaptchas: https://developers.google.com/recaptcha/docs/faq
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
    'https://cdnjs.cloudflare.com',
    // Embedded tweets in blog posts etc.
    'https://platform.twitter.com',
    'https://js.chargebee.com/v2/chargebee.js',
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
    // Embedded videos in blog posts etc.
    'https://player.vimeo.com',
    'https://www.loom.com',
    'https://www.youtube.com',
    // Recaptchas https://developers.google.com/recaptcha/docs/faq
    'https://www.google.com',
    'https://recaptcha.google.com',
    'https://roadie.chargebee.com/',
    'https://roadie-test.chargebee.com/',
  ];


  if (get(process.env, 'CONTEXT') === 'deploy-preview') {
    directives.push('https://app.netlify.com');
  }

  return directives.join(' ');
})();

// Gatsby seems to use inline styles for lots of use cases. For example, any styles
// loaded in gatsby-browser.js are added inline. There are probably 10 different errors
// about blocked inline styles if this keyword is not in place. It's not ideal to allow
// unsafe-inline styles but tackling all of the Gatsby inline styles doesn't seem
// reasonable.
const CSP_STYLE_SRC_DIRECTIVES = [
  "'self'",
  "'unsafe-inline'",
  // The cookie consent we use seems to load from jsdelivr.net.
  'https://cdn.jsdelivr.net',
  'https://roadie.chargebee.com/assets/hp_v3/iframe_views/',
  'https://roadie-test.chargebee.com/assets/hp_v3/iframe_views/',
  'https://js.chargebee.com/v2/animation.css',
].join(' ');

const CSP_CONNECT_SRC_DIRECTIVES = [
  "'self'",
  'https://*.ingest.sentry.io',
  'https://www.google-analytics.com',
  'https://stats.g.doubleclick.net',
  'https://api-iam.eu.intercom.io',
  'ws://*.intercom.io',
  'https://career.recruitee.com',
  'https://sentry.io',
  'https://*.algolia.net',
  'https://*.algolianet.com',
].join(' ');


module.exports = {
  'img-src': CSP_IMG_SRC_DIRECTIVES,
  'connect-src': CSP_CONNECT_SRC_DIRECTIVES,
  'script-src': CSP_SCRIPT_SRC_DIRECTIVES,
  'style-src': CSP_STYLE_SRC_DIRECTIVES,
  'frame-src': CSP_FRAME_SRC_DIRECTIVES,
};
