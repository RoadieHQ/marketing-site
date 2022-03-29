import React from 'react';
import GoogleRecaptcha from 'react-google-recaptcha';

import { siteRecaptchaKey, recaptchaEnabled } from '../../environment';

const Recaptcha = ({ wrapperClassName = 'sm:col-span-2 mt-4', ...props }) => {
  if (!recaptchaEnabled()) return null;

  return (
    <div className={wrapperClassName}>
      <GoogleRecaptcha sitekey={siteRecaptchaKey()} {...props} />
    </div>
  );
};

export default Recaptcha;
