// This env var is set in the gatsby-config.js file.
export const currentlyExecutingGitBranch = () => {
  return process.env.GATSBY_GIT_BRANCH_NAME || 'NOT_SUPPLIED';
};

export const isPreviewSite = () => {
  if (process.env.GATSBY_NETLIFY_SITE_NAME === 'roadie-preview') return true;
  return false;
};

export const newsletterRecaptchaEnabled = () => {
  if (process.env.GATSBY_NEWSLETTER_RECAPTCHA_ENABLED === 'false') return false;
  return true;
};


export const funnelRecaptchaEnabled = () => {
  if (process.env.GATSBY_FUNNEL_RECAPTCHA_ENABLED === 'false') return false;
  return true;
};

export const siteRecaptchaKey = () => process.env.GATSBY_SITE_RECAPTCHA_KEY;
