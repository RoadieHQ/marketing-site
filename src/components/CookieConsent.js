import React from 'react';
import ReactCookieConsent from 'react-cookie-consent';
import { TextLink } from 'components';

import theme from '../theme';

const CookieConsent = () => (
  <ReactCookieConsent buttonStyle={{ background: theme.palette.primary.main, color: 'white' }}>
    This website uses cookies to enhance the user experience.{' '}
    <TextLink style={{ color: 'white' }} to="/legal-notices/cookies-policy/">
      Learn more
    </TextLink>
    .
  </ReactCookieConsent>
);

export default CookieConsent;
