import React, { useState } from 'react';
import { Button } from 'components';
import { navigate } from 'gatsby';

import EmailCaptureForm from '../actions/EmailCaptureForm';
import { FORM_NAMES } from '../../contactFormConstants';
import { submitEmailToNetlifyForms } from '../actions/NetlifyFormCallToAction';

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
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const ctaButtonLabel = 'Get Backstage';
  const [subForm, setSubForm] = useState({
    message: 'We will never sell or share your email address',
  });

  const visitGetBackstageForm = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const resp = await submitEmailToNetlifyForms({
      email,
      netlifyFormName: FORM_NAMES.getInstance,
    });

    if (resp.ok) {
      const codedEmail = encodeURIComponent(email);
      const codedLabel = encodeURIComponent(ctaButtonLabel);

      // DO NOT reset the email input here. It is already happening higher in the state chain.
      setSubmitting(false);
      navigate(`/get-instance/?referred_email=${codedEmail}&clicked_button_label=${codedLabel}`);
    } else {
      setSubmitting(false);
      setSubForm({
        state: 'error',
        message: 'Something went wrong. Please try that again.',
      });
    }
  };

  return (
    <EmailCaptureForm
      email={email}
      setEmail={setEmail}
      buttonText={ctaButtonLabel}
      onSubmit={visitGetBackstageForm}
      subForm={subForm}
      submitting={submitting}
      netlifyFormName={FORM_NAMES.getInstance}
      {...props}
    />
  );
};
