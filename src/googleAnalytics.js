const trackGoogleAnalyticsEvent = (eventName, eventParams) => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') {
    return false;
  }
  return window.gtag('event', eventName, eventParams);
};

export const trackRequestDemo = (opts = {}) => trackGoogleAnalyticsEvent("request_demo", opts);
export const trackRequestTrial = (opts = {}) => trackGoogleAnalyticsEvent("request_trial", opts);
export const trackSubscribe = (opts = {}) => trackGoogleAnalyticsEvent("subscribe_newsletter", opts);
export const trackRequestRoadieLocal = (opts = {}) => trackGoogleAnalyticsEvent("request_roadie_local", opts);
