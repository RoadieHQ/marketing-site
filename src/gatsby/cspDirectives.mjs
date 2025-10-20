import get from 'lodash/get.js';

const CSP_SCRIPT_SRC_DIRECTIVES = (() => {
  const directives = [
    "'self'",
    'https://www.googletagmanager.com',

    // Required for tag manager preview mode.
    'https://tagmanager.google.com',
    'https://www.google-analytics.com',

    // Google analytics universal analytics
    'https://ssl.google-analytics.com',

    // Recaptchas: https://developers.google.com/recaptcha/docs/faq
    'https://www.google.com',
    'https://www.gstatic.com',

    // The cookie consent we use seems to load from jsdelivr.net.
    'https://cdn.jsdelivr.net',
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

    // https://www.intercom.com/help/en/articles/3894-using-intercom-with-content-security-policy
    'https://app.intercom.io',
    'https://widget.intercom.io',
    'https://js.intercomcdn.com',

    'https://plausible.io',
  ];

  if (get(process.env, 'CONTEXT') === 'deploy-preview') {
    directives.push('https://netlify-cdp-loader.netlify.app/netlify.js');
  }

  return directives.join(' ');
})();

const CSP_IMG_SRC_DIRECTIVES = [
  "'self'",
  'data:',

  'https://*.google-analytics.com',
  'https://*.analytics.google.com',
  'https://www.google.com',
  'https://www.google.ie',

  // Required for google tag manager preview mode
  'https://ssl.gstatic.com',
  'https://www.gstatic.com',

  'https://cdn.loom.com',

  'https://syndication.twitter.com',

  // Contentful
  'https://images.contentful.com',
  'https://images.ctfassets.net',

  // Scribe
  'https://*.amazonaws.com',
  'https://*.cloudimg.io',

  // https://www.intercom.com/help/en/articles/3894-using-intercom-with-content-security-policy
  'blob:',
  'https://js.intercomcdn.com',
  'https://static.intercomassets.com',
  'https://downloads.intercomcdn.com',
  'https://downloads.intercomcdn.eu',
  'https://downloads.au.intercomcdn.com',
  'https://uploads.intercomusercontent.com',
  'https://gifs.intercomcdn.com',
  'https://video-messages.intercomcdn.com',
  'https://messenger-apps.intercom.io',
  'https://messenger-apps.eu.intercom.io',
  'https://messenger-apps.au.intercom.io',
  'https://*.intercom-attachments-1.com',
  'https://*.intercom-attachments.eu',
  'https://*.au.intercom-attachments.com',
  'https://*.intercom-attachments-2.com',
  'https://*.intercom-attachments-3.com',
  'https://*.intercom-attachments-4.com',
  'https://*.intercom-attachments-5.com',
  'https://*.intercom-attachments-6.com',
  'https://*.intercom-attachments-7.com',
  'https://*.intercom-attachments-8.com',
  'https://*.intercom-attachments-9.com',
  'https://static.intercomassets.eu',
  'https://static.au.intercomassets.com',

  // https://help.dealfront.com/en/articles/3715216-why-is-the-leadfeeder-tracker-blocked-on-my-site
  '*.lfeeder.com',
  '*.leadfeeder.com',

  // Used for photos of plugin maintainers
  'https://gravatar.com',

  // Used in some logo components to generate a placeholder
  'https://placehold.jp',
].join(' ');

const CSP_FRAME_SRC_DIRECTIVES = (() => {
  const directives = [
    "'self'",
    // Embedded videos in blog posts etc.
    'https://player.vimeo.com',
    'https://www.loom.com',
    'https://www.youtube.com',

    // Scribe
    'https://scribehow.com/',

    // Recaptchas https://developers.google.com/recaptcha/docs/faq
    'https://www.google.com',
    'https://recaptcha.google.com',

    // Embedded tweets
    'https://platform.twitter.com',
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
  // https://www.intercom.com/help/en/articles/3894-using-intercom-with-content-security-policy
  "'unsafe-inline'",
  // The cookie consent we use seems to load from jsdelivr.net.
  'https://cdn.jsdelivr.net',

  // Required for tag manager preview mode.
  'https://tagmanager.google.com',
  'https://fonts.googleapis.com',
].join(' ');

const CSP_CONNECT_SRC_DIRECTIVES = [
  "'self'",
  'https://*.google-analytics.com',
  'https://*.analytics.google.com',
  'https://stats.g.doubleclick.net',
  'ws://*.intercom.io',
  'https://career.recruitee.com',
  'https://*.algolia.net',
  'https://*.algolianet.com',

  // https://www.intercom.com/help/en/articles/3894-using-intercom-with-content-security-policy
  'https://api.intercom.io',
  'https://api.au.intercom.io',
  'https://api.eu.intercom.io',
  'https://api-iam.intercom.io',
  'https://api-iam.au.intercom.io',
  'https://api-iam.eu.intercom.io',
  'https://api-ping.intercom.io',
  'https://nexus-websocket-a.intercom.io',
  'wss://nexus-websocket-a.intercom.io',
  'https://nexus-websocket-b.intercom.io',
  'wss://nexus-websocket-b.intercom.io',
  'https://nexus-europe-websocket.intercom.io',
  'wss://nexus-europe-websocket.intercom.io',
  'https://nexus-australia-websocket.intercom.io',
  'wss://nexus-australia-websocket.intercom.io',
  'https://uploads.intercomcdn.com',
  'https://uploads.intercomcdn.eu',
  'https://uploads.au.intercomcdn.com',
  'https://uploads.intercomusercontent.com',

  'https://plausible.io',
].join(' ');

const CSP_FONT_SRC_DIRECTIVES = [
  "'self'",

  // https://www.intercom.com/help/en/articles/3894-using-intercom-with-content-security-policy
  'https://js.intercomcdn.com',
  'https://fonts.intercomcdn.com',

  // Required for tag manager preview mode.
  'https://fonts.gstatic.com',
  'data:',
].join(' ');

const CSP_CHILD_SRC_DIRECTIVES = [
  // https://www.intercom.com/help/en/articles/3894-using-intercom-with-content-security-policy
  'https://intercom-sheets.com',
  'https://www.intercom-reporting.com',
  'https://www.youtube.com',
  'https://player.vimeo.com',
  'https://fast.wistia.net',
].join(' ');

const CSP_FORM_ACTION_DIRECTIVES = [
  // https://www.intercom.com/help/en/articles/3894-using-intercom-with-content-security-policy
  'https://intercom.help',
  'https://api-iam.intercom.io',
  'https://api-iam.eu.intercom.io',
  'https://api-iam.au.intercom.io',
].join(' ');

const CSP_MEDIA_SRC_DIRECTIVES = [
  // https://www.intercom.com/help/en/articles/3894-using-intercom-with-content-security-policy
  'https://js.intercomcdn.com',
].join(' ');

export default {
  'img-src': CSP_IMG_SRC_DIRECTIVES,
  'connect-src': CSP_CONNECT_SRC_DIRECTIVES,
  'script-src': CSP_SCRIPT_SRC_DIRECTIVES,
  'style-src': CSP_STYLE_SRC_DIRECTIVES,
  'frame-src': CSP_FRAME_SRC_DIRECTIVES,
  'font-src': CSP_FONT_SRC_DIRECTIVES,
  'child-src': CSP_CHILD_SRC_DIRECTIVES,
  'form-action': CSP_FORM_ACTION_DIRECTIVES,
  'media-src': CSP_MEDIA_SRC_DIRECTIVES,
};
