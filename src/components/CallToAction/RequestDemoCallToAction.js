import React, { useState } from 'react';
import { Button, TextField, Checkbox, Fieldset } from 'components';
import ScmToolRadioGroup, { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';

import { FORM_NAMES } from '../../contactFormConstants';
import { currentlyExecutingGitBranch } from '../../environment';

export const submitToNetlifyForms = async ({
  name,
  email,
  scmTool,
  subToNewsletter,
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
}) => {
  // Provides a way to automatically populate the email input via the URL.
  const params = new URLSearchParams(location.search)
  const emailFromUrl = decodeURIComponent(params.get('email') || '');

  const [scmTool, setScmTool] = useState(SCM_TOOLS[0].value);
  const [email, setEmail] = useState(emailFromUrl);
  const [name, setName] = useState('');
  const [subToNewsletter, setSubToNewsletter] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const netlifyFormName = FORM_NAMES.requestDemo;
  const buttonText = 'Request a demo';

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const resp = await submitToNetlifyForms({
      name,
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

  const disabled = submitting || !email || email === '';

  return (
    <form
      onSubmit={onSubmit}
      name={netlifyFormName}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value={netlifyFormName} />
      <input type="hidden" name="submit-button-label" value={buttonText} />
      <input type="hidden" name="deployed-branch" value={currentlyExecutingGitBranch()} />

      <Fieldset>
        <TextField
          label="Full name *"
          type="text"
          name="name"
          id="request-demo-name-input"
          onChange={setName}
          value={name}
          fullWidth
        />
      </Fieldset>

      <Fieldset>
        <TextField
          label="Work email address *"
          type="email"
          name="email"
          id="request-demo-email-input"
          onChange={setEmail}
          value={email}
          fullWidth
        />
      </Fieldset>

      <Fieldset>
        <ScmToolRadioGroup
          onChange={setScmTool}
          currentValue={scmTool}
          idPrefix="request-demo-"
        />
      </Fieldset>

      <Fieldset>
        <Checkbox
          name="sub-to-newsletter"
          label="Subscribe me to the Backstage Weekly newsletter."
          checked={subToNewsletter}
          onChange={setSubToNewsletter}
          id="request-demo-sub-to-newsletter-input"
        />
      </Fieldset>

      <Fieldset>
        <Button color="primary" text={buttonText} disabled={disabled} />
      </Fieldset>
    </form>
  );
};

export default RequestDemoCallToAction;
