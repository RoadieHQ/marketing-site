import isUndefined from 'lodash/isUndefined';
import set from 'lodash/set';

import { currentlyExecutingGitBranch } from './environment';

// The plausible tracking snippet is injected into the page using Netlify snippet
// injection. https://app.netlify.com/sites/roadie/settings/deploys#snippet-injection
// It serves plausible from a custom domain, which redirects to plausible.io. This
// redirect is configured in the netlify.toml file.
const trackPlausibleEvent = (eventName, { callback, ...rest } = {}) => {
  if (isUndefined(window.plausible)) return;
  const options = {};
  options.props = set(rest, 'branch', currentlyExecutingGitBranch());

  if (callback) {
    options.callback = callback;
  }

  window.plausible(eventName, options);
};

export default trackPlausibleEvent;
