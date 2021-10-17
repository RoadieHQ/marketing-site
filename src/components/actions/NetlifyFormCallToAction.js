import React, { useState } from 'react';

import trackGoogleAnalyticsEvent from '../../googleAnalytics';
import trackPlausibleEvent from '../../plausible';
import EmailCaptureForm from 'components/actions/EmailCaptureForm';
import TailwindEmailCaptureForm from 'components/tailwind/CallToAction/EmailCaptureForm';
import { FORM_NAMES } from '../../contactFormConstants';
import { currentlyExecutingGitBranch } from '../../environment';

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
  submitButtonLabel = 'NOT_SUPPLIED',
}) => {
  const branch = currentlyExecutingGitBranch();

  let resp;
  try {
    resp = await fetch('/', {
      method: 'POST',
      body: encode({
        email,
        'form-name': netlifyFormName,
        'submit-button-label': submitButtonLabel,
        'deployed-branch': branch,
      }),
    });
  } catch (error) {
    console.error('Submission failed', error, resp);
  }

  trackGoogleAnalyticsEvent({
    category: 'form',
    action: 'submit',
    label: netlifyFormName,
  });

  trackPlausibleEvent(netlifyFormName);

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
  formStyle = 'default',
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [subForm, setSubForm] = useState({
    message: subFormMessage,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const resp = await submitEmailToNetlifyForms({
      email,
      netlifyFormName,
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
    onSubmit: onSubmit,
    submitting: submitting,
    emailInputId: `${netlifyFormName}-email-input`,
    buttonId: `${netlifyFormName}-email-button`,
    subForm: subForm,
    setEmail: setEmail,
    placeholderText: placeholderText,
    email: email,
    buttonText: buttonText,
    autoFocus: autoFocus,
    netlifyFormName: netlifyFormName,
  };

  // This is pretty hacky but allows me to avoid duplicating all the logic in this file into
  // the tailwind directory. This complonent doesn't have any of it's own styling associated
  // with it, it just happens to pass down logic to a styled component.
  if (formStyle === 'tailwind') {
    return <TailwindEmailCaptureForm {...propsToPass} />;
  }

  return <EmailCaptureForm {...propsToPass} />;
};

export default NetlifyFormCallToAction;
