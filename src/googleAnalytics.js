import isUndefined from 'lodash/isUndefined';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import { currentlyExecutingGitBranch } from './environment';

const trackGoogleAnalyticsEvent = (eventParams) => {
  if (!isUndefined(window.ga)) {
    window.ga('send', 'pageview', {
      'dimension1': `'${currentlyExecutingGitBranch()}'`,
    });
  }

  trackCustomEvent(eventParams);

  if (!isUndefined(window.gtag)) {
    window.gtag('event', 'pageview', {
      'dimension1': `'${currentlyExecutingGitBranch()}'`,
    });
  }
};

export default trackGoogleAnalyticsEvent;
