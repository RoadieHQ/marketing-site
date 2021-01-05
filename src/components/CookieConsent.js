import React from 'react';
import ReactCookieConsent from 'react-cookie-consent';

import theme from '../theme';

const CookieConsent = () => (
  <ReactCookieConsent buttonStyle={{ background: theme.palette.primary.main, color: 'white' }}>
    This website uses cookies to enhance the user experience.
  </ReactCookieConsent>
);

export default CookieConsent;
