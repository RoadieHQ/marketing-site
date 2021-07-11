import React, { useState } from 'react';
import { Button } from 'components';
import { navigate } from 'gatsby';

import EmailCaptureForm from '../actions/EmailCaptureForm';
import trackPlausibleEvent from '../../plausible';

export const ButtonLinkCallToAction = ({ text = 'Request a  demo', ...props }) => {
  const codedText = encodeURIComponent(text);

  return (
    <Button
      to={`/evaluation-request/?clicked_button_label=${codedText}`}
      link={true}
      text={text}
      id="evaluation-request-link-button"
      color="primary"
      {...props}
    />
  );
};

export const GetInstanceFormCallToAction = ({ ...props }) => {
  const [email, setEmail] = useState('');
  const ctaButtonLabel = 'Get Backstage';

  const visitGetBackstageForm = (e) => {
    e.preventDefault();
    const codedEmail = encodeURIComponent(email);
    const codedLabel = encodeURIComponent(ctaButtonLabel);

    trackPlausibleEvent('submit-get-instance-form');

    navigate(`/get-instance/?referred_email=${codedEmail}&clicked_button_label=${codedLabel}`);
  };

  // This can be static because we're not making a server request which might return an error
  // which we want to display to the user. We are simply redirecting withing in the app.
  const subForm = {
    message: 'We will never sell or share your email address',
  };

  return (
    <EmailCaptureForm
      email={email}
      setEmail={setEmail}
      buttonText={ctaButtonLabel}
      onSubmit={visitGetBackstageForm}
      subForm={subForm}
      {...props}
    />
  );
};
