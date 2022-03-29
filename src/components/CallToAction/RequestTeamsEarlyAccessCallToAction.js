import React, { useState } from 'react';
import {
  Button,
  TextField,
  SubscribeToNewsletterSwitch,
  ScmToolRadioGroup,
  Form,
  Recaptcha,
} from 'components';

import { FORM_NAMES, HONEYPOT_FIELD_NAME } from '../../contactFormConstants';
import { currentlyExecutingGitBranch, recaptchaEnabled } from '../../environment';

const submitToNetlifyForms = async ({
  name,
  email,
  scmTool,
  subToNewsletter,
  netlifyFormName,
  honeypotText,
  recaptchaResponse,
  submitButtonLabel = 'NOT_SUPPLIED',
}) => {
  const branch = currentlyExecutingGitBranch();

  const formData = new FormData();
  formData.append('form-name', netlifyFormName);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('scm', scmTool);
  formData.append('sub-to-newsletter', subToNewsletter);
  formData.append(HONEYPOT_FIELD_NAME, honeypotText);
  formData.append('deployed-branch', branch);
  formData.append('submit-button-label', submitButtonLabel);
  formData.append('g-recaptcha-response', recaptchaResponse);

  let resp;
  try {
    resp = await fetch('/', {
      method: 'POST',
      body: formData,
    });
  } catch (error) {
    console.error('Submission failed', error, resp);
  }

  return resp;
};

const RequestTeamsEarlyAccessCallToAction = ({
  onSuccess,
  location,
  scmTool,
  setScmTool,
}) => {
  // Provides a way to automatically populate the email input via the URL.
  const params = new URLSearchParams(location.search)
  const emailFromUrl = decodeURIComponent(params.get('email') || '');

  const [email, setEmail] = useState(emailFromUrl);
  const [name, setName] = useState('');
  const [subToNewsletter, setSubToNewsletter] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [honeypotText, setHoneypotText] = useState('');
  const [recaptchaResponse, setRecaptchaResponse] = useState('');
  const netlifyFormName = FORM_NAMES.requestTeamsEarlyAccess;
  const buttonText = 'Request early access';

  const clearForm = () => {
    setName('');
    setEmail('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const resp = await submitToNetlifyForms({
      name,
      email,
      scmTool,
      subToNewsletter,
      netlifyFormName,
      honeypotText,
      submitButtonLabel: buttonText,
    });

    if (resp.ok) {
      // DO NOT reset the email input here. It is already happening higher in the state chain.
      onSuccess();
    } else {
      console.log('error', resp);
    }

    clearForm();
    setSubmitting(false);
  };

  let disabled = submitting || !email || email === '';
  if (recaptchaEnabled()) {
    disabled = disabled || !recaptchaResponse || recaptchaResponse === '';
  }

  return (
    <Form
      onSubmit={onSubmit}
      name={netlifyFormName}
      buttonText={buttonText}
      onHoneypotChange={setHoneypotText}
      honeypotValue={honeypotText}
      className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <TextField
        label="Full name *"
        type="text"
        name="name"
        id="request-teams-name-input"
        onChange={setName}
        value={name}
        fullWidth
      />

      <TextField
        label="Work email address *"
        type="email"
        name="email"
        id="request-teams-email-input"
        onChange={setEmail}
        value={email}
        fullWidth
      />

      <ScmToolRadioGroup
        onChange={setScmTool}
        currentValue={scmTool}
        idPrefix="request-teams-"
      />

      <SubscribeToNewsletterSwitch
        checked={subToNewsletter}
        onChange={setSubToNewsletter}
      />

      <Recaptcha onChange={setRecaptchaResponse} />

      <div className="sm:col-span-2 mt-4">
        <Button
          type="submit"
          color="primary"
          size="large"
          fullWidth={true}
          text={buttonText}
          disabled={disabled}
        />
      </div>
    </Form>
  );
};

export default RequestTeamsEarlyAccessCallToAction;
