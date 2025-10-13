import React, { useState } from 'react';

import trackPlausibleEvent from '../../plausible';
import EmailCaptureForm from './EmailCaptureForm';
import { FORM_NAMES, HONEYPOT_FIELD_NAME } from '../../contactFormConstants';
import { currentlyExecutingGitBranch, newsletterRecaptchaEnabled } from '../../environment';
import { trackSubscribe } from '../../googleAnalytics';

export const encode = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((k) => {
    formData.append(k, data[k]);
  });
  return formData;
};

export const submitEmailToNetlifyForms = async ({
  email,
  netlifyFormName,
  honeypotText,
  recaptchaResponse,
  submitButtonLabel = 'NOT_SUPPLIED',
}) => {
  const branch = currentlyExecutingGitBranch();

  if (!email || email === '') {
    return Promise.reject();
  }

  let resp;
  try {
    const bodyParams = {
      email,
      'form-name': netlifyFormName,
      'submit-button-label': submitButtonLabel,
      'deployed-branch': branch,
      [HONEYPOT_FIELD_NAME]: honeypotText,
    };

    if (newsletterRecaptchaEnabled()) {
      bodyParams['g-recaptcha-response'] = recaptchaResponse;
    }

    resp = await fetch('/', {
      method: 'POST',
      body: encode(bodyParams),
    });

    trackPlausibleEvent(netlifyFormName, { email });
    trackSubscribe({ email });
  } catch (error) {
    console.error('Submission failed', error, resp);
    return Promise.reject();
  }

  return resp;
};

const NetlifyFormCallToAction = ({
  placeholderText = 'Work email',
  buttonText = 'Click here',
  subFormMessage = 'We will never sell or share your email address.',
  netlifyFormName = FORM_NAMES.subscribeToNewsletter,
  setModalOpen,
  autoFocus = false,
  email,
  setEmail,
  ...rest
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [honeypotText, setHoneypotText] = useState('');
  const [recaptchaResponse, setRecaptchaResponse] = useState('');
  const [recaptchaExpired, setRecaptchaExpired] = useState(false);
  const [subForm, setSubForm] = useState({
    message: subFormMessage,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const resp = await submitEmailToNetlifyForms({
      email,
      netlifyFormName,
      honeypotText,
      recaptchaResponse,
      submitButtonLabel: buttonText,
    });

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

  const propsToPass = {
    onSubmit,
    submitting,
    emailInputId: `${netlifyFormName}-email-input`,
    buttonId: `${netlifyFormName}-email-button`,
    subForm,
    setEmail,
    placeholderText,
    email,
    buttonText,
    autoFocus,
    netlifyFormName,
    honeypotValue: honeypotText,
    onHoneypotChange: setHoneypotText,
    recaptchaResponse,
    setRecaptchaResponse,
    recaptchaExpired,
    setRecaptchaExpired,
    ...rest,
  };

  return <EmailCaptureForm {...propsToPass} />;
};

export default NetlifyFormCallToAction;
