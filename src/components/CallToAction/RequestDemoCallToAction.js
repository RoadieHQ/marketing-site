import React, { useState } from 'react';
import {
  Button,
  TextField,
  SubscribeToNewsletterSwitch,
  ScmToolRadioGroup,
  Form,
} from 'components';

import { FORM_NAMES, HONEYPOT_FIELD_NAME } from '../../contactFormConstants';
import { currentlyExecutingGitBranch } from '../../environment';

const submitToNetlifyForms = async ({
  name,
  email,
  scmTool,
  subToNewsletter,
  honeypotText,
  netlifyFormName,
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

const RequestDemoCallToAction = ({
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
  const [honeypotText, setHoneypotText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const netlifyFormName = FORM_NAMES.requestDemo;
  const buttonText = 'Request a demo';

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
      honeypotText,
      netlifyFormName,
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

  const disabled = submitting || !email || email === '';

  return (
    <Form
      onSubmit={onSubmit}
      name={netlifyFormName}
      onHoneypotChange={setHoneypotText}
      honeypotValue={honeypotText}
      className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <TextField
        label="Full name *"
        type="text"
        name="name"
        id="request-demo-name-input"
        onChange={setName}
        value={name}
        fullWidth
      />

      <TextField
        label="Work email address *"
        type="email"
        name="email"
        id="request-demo-email-input"
        onChange={setEmail}
        value={email}
        fullWidth
      />

      <ScmToolRadioGroup
        onChange={setScmTool}
        currentValue={scmTool}
        idPrefix="request-demo-"
      />

      <SubscribeToNewsletterSwitch
        checked={subToNewsletter}
        onChange={setSubToNewsletter}
      />

      <div className="sm:col-span-2">
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

export default RequestDemoCallToAction;
