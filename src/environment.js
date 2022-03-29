import get from 'lodash/get';

// This env var is set in the gatsby-config.js file.
export const currentlyExecutingGitBranch = () => {
  return process.env.GATSBY_GIT_BRANCH_NAME || 'NOT_SUPPLIED';
};

export const isPreviewSite = () => {
  if (process.env.GATSBY_NETLIFY_SITE_NAME === 'roadie-preview') return true;
  return false;
};

export const recaptchaEnabled = () => {
  return Boolean(get(process.env, 'GATSBY_RECAPTCHAS_ENABLED', true));
};

export const siteRecaptchaKey = () => process.env.GATSBY_SITE_RECAPTCHA_KEY;
