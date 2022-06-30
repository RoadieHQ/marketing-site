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

import { FORM_NAMES, HONEYPOT_FIELD_NAME } from '../../../contactFormConstants';
import {
  currentlyExecutingGitBranch,
  recaptchaEnabled,
  siteRecaptchaKey,
} from '../../../environment';

import { ScmToolSelect } from '../../forms/ScmToolRadioGroup';
import GoogleRecaptcha from 'react-google-recaptcha';

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

const HeroForm = ({ onSuccess, email, setEmail, scmTool, setScmTool }) => {
  const [subToNewsletter, setSubToNewsletter] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [honeypotText, setHoneypotText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [recaptchaResponse, setRecaptchaResponse] = useState('');
  const [recaptchaExpired, setRecaptchaExpired] = useState(false);
  const netlifyFormName = FORM_NAMES.getInstanceExtended;
  const buttonText = 'Try Roadie Backstage';
  const recaptchaRef = React.createRef();

  const clearForm = () => {
    setEmail('');
    setAgreed(false);
  };

  let disabled = submitting;
  // if (recaptchaEnabled()) {
  //   disabled = disabled || !recaptchaResponse || recaptchaResponse === '' || recaptchaExpired;
  // }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (disabled) return false;
    debugger;
    const token = await recaptchaRef.current.executeAsync();
    console.log("HOLA>>>", email, scmTool, token);
    return false;
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
      className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-8"
    >
      <TextField
        id="get-instance-email-input"
        label="Work email"
        name="email"
        type="email"
        autoComplete="email"
        fullWidth={true}
        onChange={setEmail}
        value={email}
        required={true}
      />
      <div className="sm:col-span-2 mt-4">
        <ScmToolSelect
          label="Primary source code host"
          onChange={setScmTool}
          currentValue={scmTool}
          idPrefix="get-instance-"
        />
      </div>
      <div className="sm:col-span-2 flex items-end">
        <Button
          type="submit"
          color="primary"
          size="medium"
          fullWidth={true}
          text={buttonText}
          disabled={disabled}
          required={true}
        />
      </div>
      {/* <SubscribeToNewsletterSwitch checked={subToNewsletter} onChange={setSubToNewsletter} /> */}

      <div className="sm:col-span-4">
        <p className="text-base text-gray-500">
          By submitting this form, you agree to our{' '}
          <Link
            to="/legal-notices/evaluation-license/"
            className="font-medium text-gray-700 underline"
          >
            Evaluation License
          </Link>{' '}
          and acknowledge you have read our{' '}
          <Link to="/legal-notices/privacy-notice/" className="font-medium text-gray-700 underline">
            Privacy Notice
          </Link>
          .
        </p>
      </div>
      <div className="sm:col-span-2">
        <GoogleRecaptcha
          ref={recaptchaRef}
          sitekey={siteRecaptchaKey()}
          onChange={setRecaptchaResponse}
          onExpired={setRecaptchaExpired}
          size="invisible"
        />
      </div>
    </Form>
  );
};

export default HeroForm;
