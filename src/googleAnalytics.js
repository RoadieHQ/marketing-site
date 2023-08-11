const trackGoogleAnalyticsEvent = (eventName, eventParams) => {
  return typeof window !== "undefined" && window.gtag("event", eventName, eventParams);
};

export const trackRequestDemo = trackGoogleAnalyticsEvent("request_demo");
export const trackRequestTrial = trackGoogleAnalyticsEvent("request_trial");
export const trackSubscribe = trackGoogleAnalyticsEvent("subscribe_newsletter");
