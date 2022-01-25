import React, { useState } from 'react';
import {
  Button,
  TextField,
  SubscribeToNewsletterSwitch,
  ScmToolRadioGroup,
  NumberOfEngineers,
} from 'components';
import { OPTIONS_FOR_NUMBER_OF_ENGINEERS } from 'components/forms/NumberOfEngineers';

import { FORM_NAMES } from '../../contactFormConstants';
import { currentlyExecutingGitBranch } from '../../environment';

const submitToNetlifyForms = async ({
  name,
  email,
  scmTool,
  subToNewsletter,
  netlifyFormName,
  numberOfEngineers,
  submitButtonLabel = 'NOT_SUPPLIED',
}) => {
  const branch = currentlyExecutingGitBranch();

  const formData = new FormData();
  formData.append('form-name', netlifyFormName);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('scm', scmTool);
  formData.append('sub-to-newsletter', subToNewsletter);
  formData.append('number-of-engineers', numberOfEngineers);
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

const RequestEnterprisePricingCallToAction = ({
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
  const [numberOfEngineers, setNumberOfEngineers] = useState(OPTIONS_FOR_NUMBER_OF_ENGINEERS[0].id);
  const [subToNewsletter, setSubToNewsletter] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const netlifyFormName = FORM_NAMES.requestEnterprisePricing;
  const buttonText = 'Request a quote';

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const resp = await submitToNetlifyForms({
      name,
      email,
      scmTool,
      subToNewsletter,
      numberOfEngineers,
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

  const disabled = submitting || !email || email === '' || !numberOfEngineers || numberOfEngineers === '';

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
        label="Full name *"
        type="text"
        name="name"
        id="request-pricing-name-input"
        onChange={setName}
        value={name}
        fullWidth
      />

      <TextField
        label="Work email address *"
        type="email"
        name="email"
        id="request-pricing-email-input"
        onChange={setEmail}
        value={email}
        fullWidth
      />

      <NumberOfEngineers
        value={numberOfEngineers}
        onChange={setNumberOfEngineers}
        idPrefix="request-pricing-"
      />

      <ScmToolRadioGroup
        onChange={setScmTool}
        currentValue={scmTool}
        idPrefix="request-pricing-"
      />

      <SubscribeToNewsletterSwitch
        checked={subToNewsletter}
        onChange={setSubToNewsletter}
        idPrefix="request-pricing-"
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
    </form>
  );
};

export default RequestEnterprisePricingCallToAction;
