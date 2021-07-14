import isUndefined from 'lodash/isUndefined';

const trackPlausibleEvent = (eventName, opts = {}) => {
  if (!isUndefined(window.plausible)) {
    window.plausible(eventName, opts);
  }
};

export default trackPlausibleEvent;
