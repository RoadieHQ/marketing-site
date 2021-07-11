import React, { useState } from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import trackPlausibleEvent from '../../plausible';
import EmailCaptureForm from './EmailCaptureForm';
import { FORM_NAMES } from '../../contactFormConstants';

export const encode = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((k) => {
    formData.append(k, data[k]);
  });
  return formData;
};

const NetlifyFormCallToAction = ({
  placeholderText = 'Work email',
  buttonText = 'Click here',
  subFormMessage = 'We will never sell or share your email address.',
  netlifyFormName = FORM_NAMES.notifyMe,
  setModalOpen,
  autoFocus = false,
  email,
  setEmail,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [subForm, setSubForm] = useState({
    message: subFormMessage,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const resp = await fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': netlifyFormName,
        email,
      }),
    });

    trackCustomEvent({
      category: 'form',
      action: 'submit',
      label: netlifyFormName,
    });

    trackPlausibleEvent(netlifyFormName);

    if (resp.ok) {
      setModalOpen(true);
      // DO NOT reset the email input here. It is already happening higher in the state chain.
    } else {
      setSubForm({
        state: 'error',
        message: 'Something went wrong. Please try that again.',
      });
    }

    setSubmitting(false);
  };

  /* eslint-disable jsx-a11y/no-autofocus */
  return (
    <EmailCaptureForm
      onSubmit={onSubmit}
      submitting={submitting}
      emailInputId={`${netlifyFormName}-email-input`}
      buttonId={`${netlifyFormName}-email-button`}
      subForm={subForm}
      setEmail={setEmail}
      placeholderText={placeholderText}
      email={email}
      buttonText={buttonText}
      autoFocus={autoFocus}
    />
  );
  /* eslint-enable jsx-a11y/no-autofocus */
};

export default NetlifyFormCallToAction;
