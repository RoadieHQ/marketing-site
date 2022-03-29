import React from 'react';
import GoogleRecaptcha from 'react-google-recaptcha';

import { siteRecaptchaKey, recaptchaEnabled } from '../../environment';

const Recaptcha = ({ wrapperClassName = 'sm:col-span-2 mt-4', setRecaptchaExpired, ...props }) => {
  if (!recaptchaEnabled()) return null;

  const onRecaptchaExpired = () => {
    setRecaptchaExpired(true);
  };

  return (
    <div className={wrapperClassName}>
      <GoogleRecaptcha
        sitekey={siteRecaptchaKey()}
        onRecaptchaExpired={onRecaptchaExpired}
        {...props}
      />
    </div>
  );
};

export default Recaptcha;
