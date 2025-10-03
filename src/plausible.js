import isUndefined from 'lodash/isUndefined';
import set from 'lodash/set';

import { currentlyExecutingGitBranch } from './environment';

// The plausible tracking snippet is injected into the page using Netlify snippet
// injection. https://app.netlify.com/sites/roadie/settings/deploys#snippet-injection
// It serves plausible from a custom domain, which redirects to plausible.io. This
// redirect is configured in the netlify.toml file.
const trackPlausibleEvent = (eventName, opts = {}) => {
  const options = set(opts, 'path.branch', currentlyExecutingGitBranch());

  if (!isUndefined(window.plausible)) {
    window.plausible(eventName, options);
  }
};

export default trackPlausibleEvent;
