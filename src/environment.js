// This env var is set in the gatsby-config.js file.
export const currentlyExecutingGitBranch = () => {
  return process.env.GATSBY_GIT_BRANCH_NAME || 'NOT_SUPPLIED';
};
