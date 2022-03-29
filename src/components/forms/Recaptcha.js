import React from 'react';
import GoogleRecaptcha from 'react-google-recaptcha';

import { siteRecaptchaKey } from '../../environment';

const Recaptcha = (props) => (
  <GoogleRecaptcha sitekey={siteRecaptchaKey()} {...props} />
);

export default Recaptcha;
