import React, { useState } from 'react';
import {
  Link,
  Switch,
  Button,
  TextField,
  SubscribeToNewsletterSwitch,
  ScmToolRadioGroup,
} from 'components';

import { FORM_NAMES } from '../../contactFormConstants';
import { currentlyExecutingGitBranch } from '../../environment';

export const submitToNetlifyForms = async ({
  email,
  scmTool,
  subToNewsletter,
  netlifyFormName,
  submitButtonLabel = 'NOT_SUPPLIED',
}) => {
  const branch = currentlyExecutingGitBranch();

  const formData = new FormData();
  formData.append('form-name', netlifyFormName);
  formData.append('email', email);
  formData.append('scm', scmTool);
  formData.append('sub-to-newsletter', subToNewsletter);
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

const ExtendedGetInstanceCallToAction = ({
  onSuccess,
  email,
  setEmail,
  scmTool,
  setScmTool,
}) => {
  const [subToNewsletter, setSubToNewsletter] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const netlifyFormName = FORM_NAMES.getInstanceExtended;
  const buttonText = 'Request a trial';

  const disabled = submitting || !email || email === '' || !agreed;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (disabled) return false;
    setSubmitting(true);

    const resp = await submitToNetlifyForms({
      email,
      scmTool,
      subToNewsletter,
      netlifyFormName,
      submitButtonLabel: buttonText,
    });

    if (resp.ok) {
      // DO NOT reset the email input here. It is already happening higher in the state chain.
      onSuccess();
    } else {
      console.log('error', resp);
    }

    setSubmitting(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      name={netlifyFormName}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <input type="hidden" name="form-name" value={netlifyFormName} />
      <input type="hidden" name="submit-button-label" value={buttonText} />
      <input type="hidden" name="deployed-branch" value={currentlyExecutingGitBranch()} />

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

      <div className="sm:col-span-2">
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
              <Link to="/legal-notices/privacy-policy/" className="font-medium text-gray-700 underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

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
    </form>
  );
};

export default ExtendedGetInstanceCallToAction;
