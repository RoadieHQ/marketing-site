import React from 'react';

import { siteRecaptchaKey } from '../../environment';

const Recaptcha = () => (
  <div className="g-recaptcha" data-sitekey={siteRecaptchaKey()}></div>
);

export default Recaptcha;
