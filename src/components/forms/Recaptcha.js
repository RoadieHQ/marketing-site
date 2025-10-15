import React from 'react';
import GoogleRecaptcha from 'react-google-recaptcha';

import { siteRecaptchaKey } from '../../environment';

const Recaptcha = ({ wrapperClassName = 'sm:col-span-2 mt-4', setRecaptchaExpired, ...props }) => {
  const onRecaptchaExpired = () => {
    setRecaptchaExpired(true);
  };

  return (
    <div className={wrapperClassName}>
      <GoogleRecaptcha
        sitekey={siteRecaptchaKey()}
        onExpired={onRecaptchaExpired}
        {...props}
      />
    </div>
  );
};

export default Recaptcha;
