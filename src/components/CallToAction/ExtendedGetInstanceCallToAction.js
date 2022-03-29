import React, { useState } from 'react';
import {
  Link,
  Switch,
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
  email,
  scmTool,
  subToNewsletter,
  netlifyFormName,
  agreeToPolicies,
  honeypotText,
  recaptchaResponse,
  submitButtonLabel = 'NOT_SUPPLIED',
}) => {
  const branch = currentlyExecutingGitBranch();

  const formData = new FormData();
  formData.append('form-name', netlifyFormName);
  formData.append('email', email);
  formData.append('scm', scmTool);
  formData.append('sub-to-newsletter', subToNewsletter);
  formData.append(HONEYPOT_FIELD_NAME, honeypotText);
  formData.append('agree-to-policies', agreeToPolicies);
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

const ExtendedGetInstanceCallToAction = ({
  onSuccess,
  email,
  setEmail,
  scmTool,
  setScmTool,
}) => {
  const [subToNewsletter, setSubToNewsletter] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [honeypotText, setHoneypotText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [recaptchaResponse, setRecaptchaResponse] = useState('');
  const netlifyFormName = FORM_NAMES.getInstanceExtended;
  const buttonText = 'Request a trial';

  const clearForm = () => {
    setEmail('');
    setAgreed(false);
  };

  let disabled = submitting || !email || email === '' || !agreed;
  if (recaptchaEnabled()) {
    disabled = disabled || !recaptchaResponse || recaptchaResponse === '';
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (disabled) return false;
    setSubmitting(true);

    const resp = await submitToNetlifyForms({
      email,
      scmTool,
      subToNewsletter,
      agreeToPolicies: agreed,
      netlifyFormName,
      honeypotText,
      submitButtonLabel: buttonText,
      recaptchaResponse,
    });

    if (resp.ok) {
      // DO NOT reset the email input here. It is already happening higher in the state chain.
      onSuccess();
    } else {
      console.log('error', resp);
    }

    clearForm('');
    setSubmitting(false);
  };

  return (
    <Form
      onSubmit={onSubmit}
      name={netlifyFormName}
      honeypotValue={honeypotText}
      onHoneypotChange={setHoneypotText}
      buttonText={buttonText}
      className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <TextField
        id="get-instance-email-input"
        label="Work email address *"
        name="email"
        type="email"
        autoComplete="email"
        fullWidth={true}
        onChange={setEmail}
        value={email}
      />

      <ScmToolRadioGroup
        onChange={setScmTool}
        currentValue={scmTool}
        idPrefix="get-instance-"
      />

      <SubscribeToNewsletterSwitch
        checked={subToNewsletter}
        onChange={setSubToNewsletter}
      />

      <div className="sm:col-span-2 mt-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              name="agree-to-policies"
              srTitle="Agree to policies"
            />
          </div>

          <div className="ml-3">
            <p className="text-base text-gray-500">
              By selecting this, you agree to our{' '}
              <Link to="/legal-notices/evaluation-license/" className="font-medium text-gray-700 underline">
                Evaluation License
              </Link>{' '}
              and acknowledge you have read our{' '}
              <Link to="/legal-notices/privacy-notice/" className="font-medium text-gray-700 underline">
                Privacy Notice
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

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

export default ExtendedGetInstanceCallToAction;
