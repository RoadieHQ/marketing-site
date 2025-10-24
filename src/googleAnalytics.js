const trackGoogleAnalyticsEvent = (eventName, eventParams) => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') {
    return false;
  }
  return window.gtag('event', eventName, eventParams);
};

export const trackRequestDemo = (opts = {}) => trackGoogleAnalyticsEvent('request_demo', opts);
export const trackRequestTrial = (opts = {}) => trackGoogleAnalyticsEvent('request_trial', opts);
export const trackSubscribe = (opts = {}) =>
  trackGoogleAnalyticsEvent('subscribe_newsletter', opts);
export const trackRequestRoadieLocal = (opts = {}) =>
  trackGoogleAnalyticsEvent('request_roadie_local', opts);

/**
 * Track a conversion event with a callback that executes after the event is sent.
 * This is useful for ensuring analytics events are tracked before navigation occurs.
 *
 * @param {string} eventName - The name of the conversion event to track
 * @param {Function} callback - Function to execute after the event is sent
 * @param {number} timeout - Maximum time to wait for event to send (in milliseconds)
 * @param {Object} eventParams - Additional event parameters
 * @returns {boolean} - false to prevent default link behavior
 */
export const trackConversionEvent = (eventName, callback, timeout = 1000, eventParams = {}) => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') {
    // If gtag is not available, execute callback immediately
    if (typeof callback === 'function') {
      callback();
    }
    return false;
  }

  const params = {
    ...eventParams,
    event_callback: callback,
    event_timeout: timeout,
  };

  window.gtag('event', eventName, params);
  return false;
};
