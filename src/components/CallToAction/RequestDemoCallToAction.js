import React, { useState } from 'react';
import {
  Button,
  TextField,
  EmailField,
  SubscribeToNewsletterSwitch,
  Form,
  Recaptcha,
} from 'components';

import { ScmToolSelect } from '../forms/ScmToolSelect';

import { FORM_NAMES, HONEYPOT_FIELD_NAME } from '../../contactFormConstants';
import { currentlyExecutingGitBranch, recaptchaEnabled } from '../../environment';

const submitToNetlifyForms = async ({
  name,
  email,
  scmTool,
  attribution,
  subToNewsletter,
  honeypotText,
  netlifyFormName,
  recaptchaResponse,
  submitButtonLabel = 'NOT_SUPPLIED',
}) => {
  const branch = currentlyExecutingGitBranch();

  const formData = new FormData();
  formData.append('form-name', netlifyFormName);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('reported-attribution', attribution);
  formData.append('scm', scmTool.value);
  formData.append('sub-to-newsletter', subToNewsletter);
  formData.append(HONEYPOT_FIELD_NAME, honeypotText);
  formData.append('deployed-branch', branch);
  formData.append('submit-button-label', submitButtonLabel);
  if (recaptchaEnabled()) {
    formData.append('g-recaptcha-response', recaptchaResponse);
  }

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
  buttonText = 'Request a demo',
  showProductPrompts = true,
}) => {
  // Provides a way to automatically populate the email input via the URL.
  const params = new URLSearchParams(location.search);
  const emailFromUrl = decodeURIComponent(params.get('email') || '');

  const [emailValues, setEmailValues] = useState({
    email: emailFromUrl,
  });
  const [name, setName] = useState('');
  const [attribution, setAttribution] = useState('');
  const [subToNewsletter, setSubToNewsletter] = useState(true);
  const [honeypotText, setHoneypotText] = useState('');
  const [recaptchaResponse, setRecaptchaResponse] = useState('');
  const [recaptchaExpired, setRecaptchaExpired] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const netlifyFormName = FORM_NAMES.requestDemo;

  const clearForm = () => {
    setName('');
    setAttribution('');
    setEmailValues({ email: '' });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const resp = await submitToNetlifyForms({
      name,
      email: emailValues.email,
      scmTool,
      attribution,
      subToNewsletter,
      honeypotText,
      netlifyFormName,
      recaptchaResponse,
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

  let disabled = submitting || !emailValues.email || emailValues.email === '';
  if (recaptchaEnabled()) {
    disabled = disabled || !recaptchaResponse || recaptchaResponse === '' || recaptchaExpired;
  }

  return (
    <Form
      onSubmit={onSubmit}
      name={netlifyFormName}
      onHoneypotChange={setHoneypotText}
      honeypotValue={honeypotText}
      buttonText={buttonText}
    >
      <div className="mb-10">
        <TextField
          label="Full name*"
          type="text"
          name="name"
          id="request-demo-name-input"
          onChange={setName}
          value={name}
          fullWidth
        />
      </div>

      <div className="lg:flex mb-10">
        <div className="lg:w-1/2 mr-4">
          <EmailField
            label="Work email address*"
            type="email"
            name="email"
            id="request-demo-email-input"
            setValue={setEmailValues}
            value={emailValues}
            fullWidth
          />
        </div>

        <div className="lg:w-1/2 mt-4 ml-4">
          <ScmToolSelect
            label="Primary source code host*"
            onChange={setScmTool}
            currentValue={scmTool}
            idPrefix="request-demo-"
            color="primary"
            showProductPrompts={showProductPrompts}
          />
        </div>
      </div>

      <div className="mb-10">
        <TextField
          label="How did you hear about Roadie?"
          type="text"
          name="reported-attribution"
          id="reported-attribution"
          onChange={setAttribution}
          value={attribution}
          fullWidth
        />
      </div>

      <SubscribeToNewsletterSwitch
        checked={subToNewsletter}
        onChange={setSubToNewsletter}
        className="mb-10"
      />

      <Recaptcha onChange={setRecaptchaResponse} setRecaptchaExpired={setRecaptchaExpired} />

      <div className="sm:col-span-2 mt-10">
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
