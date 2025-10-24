export const CONVERSION_EVENTS = {
  PAGE_VIEW_1: 'conversion_event_page_view_1',
};

/**
 * Track a Google Analytics event.
 *
 * When a callback is provided, this function ensures the callback executes after the event
 * is sent (or after a timeout). This is useful for tracking events before navigation occurs.
 *
 * @param {string} eventName - The name of the event to track
 * @param {Object} eventParams - Event parameters (can include event_callback and event_timeout)
 * @returns {boolean} - false when callback is provided, true otherwise
 */
export const trackGoogleAnalyticsEvent = (eventName, eventParams = {}) => {
  // Handle null or undefined eventParams
  const params = eventParams || {};
  const { event_callback, event_timeout, ...otherParams } = params;

  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') {
    // If gtag is not available and there's a callback, execute it immediately
    if (typeof event_callback === 'function') {
      event_callback();
    }
    return false;
  }

  const gtagParams = { ...otherParams };

  // Add callback and timeout if provided
  if (typeof event_callback === 'function') {
    gtagParams.event_callback = event_callback;
    gtagParams.event_timeout = event_timeout !== undefined ? event_timeout : 1000;
  }

  window.gtag('event', eventName, gtagParams);
  return typeof event_callback === 'function' ? false : true;
};

export const trackRequestDemo = (opts = {}) => trackGoogleAnalyticsEvent('request_demo', opts);
export const trackRequestTrial = (opts = {}) => trackGoogleAnalyticsEvent('request_trial', opts);
export const trackSubscribe = (opts = {}) =>
  trackGoogleAnalyticsEvent('subscribe_newsletter', opts);
export const trackRequestRoadieLocal = (opts = {}) =>
  trackGoogleAnalyticsEvent('request_roadie_local', opts);
