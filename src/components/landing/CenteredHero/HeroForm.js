import React, { useState } from 'react';
import { Link, Button, TextField, Form } from 'components';

import { FORM_NAMES, HONEYPOT_FIELD_NAME } from '../../../contactFormConstants';
import { currentlyExecutingGitBranch } from '../../../environment';

import { ScmToolSelect } from '../../forms/ScmToolSelect';
import { SubmissionSuccessModal } from 'components/FormSubmissionModal';

const submitToNetlifyForms = async ({
  email,
  scmTool,
  subToNewsletter,
  netlifyFormName,
  agreeToPolicies,
  honeypotText,
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

const SubmissionSuccessPositiveBody = () => (
  <p>
    Thank you for requesting a free trial of Roadie Backstage. We&apos;ll be in touch via the email
    provided.
  </p>
);

const SubmissionSuccessNegativeBody = () => (
  <>
    <p>
      Unfortunately, we only support Github Cloud and Github on-prem at the moment. Providing support for Bitbucket users is in next in our roadmap. We&apos;ll let you know when we&apos;re ready to onboard you.
    </p>
  </>
);

const HeroForm = () => {
  const [honeypotText, setHoneypotText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [scmTool, setScmTool] = useState('github-cloud');
  const [modalOpen, setModalOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const netlifyFormName = FORM_NAMES.tryRoadieHomepage;
  const buttonText = 'Try Roadie Backstage';

  let disabled = submitting;

  const onSubmit = async (e) => {
    e.preventDefault();

    if (disabled) return false;
    setSubmitting(true);
    setShowError(false);

    const resp = await submitToNetlifyForms({
      email,
      scmTool,
      netlifyFormName,
      honeypotText,
      subToNewsletter: false,
      agreeToPolicies: true,
      submitButtonLabel: buttonText,
      recaptchaResponse: '',
    });

    setSubmitting(false);

    if (resp.ok) {
      setModalOpen(true);
      setEmail('');
    } else {
      setShowError(true);
      console.log('error', resp);
    }

    setSubmitting(false);
  };

  return (
    <>
      <SubmissionSuccessModal
        scmTool={scmTool}
        handleCloseModal={() => setModalOpen(false)}
        modalOpen={modalOpen}
        positiveTitle="We'll be in touch!"
        positiveBody={<SubmissionSuccessPositiveBody />}
        negativeTitle="Watch this space!"
        negativeBody={<SubmissionSuccessNegativeBody scmTool={scmTool} />}
      />
      <Form
        onSubmit={onSubmit}
        name={netlifyFormName}
        honeypotValue={honeypotText}
        onHoneypotChange={setHoneypotText}
        buttonText={buttonText}
        disableRecaptcha={true}
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
          color="secondary"
        />
        <div className="sm:col-span-2 mt-4">
          <ScmToolSelect
            label="Primary source code host"
            onChange={setScmTool}
            currentValue={scmTool}
            idPrefix="get-instance-"
            color="secondary"
          />
        </div>
        <div className="sm:col-span-2 flex items-end">
          <Button
            type="submit"
            color="secondary"
            size="medium"
            fullWidth={true}
            text={buttonText}
            disabled={disabled}
            required={true}
            className="font-bold tracking-wide"
          />
        </div>

        <div className="sm:col-span-4">
          <p className="text-sm text-white opacity-60">
            By submitting this form, you agree to our{' '}
            <Link
              to="/legal-notices/evaluation-license/"
              className="font-medium text-white underline"
            >
              Evaluation License
            </Link>{' '}
            and acknowledge you have read our{' '}
            <Link
              to="/legal-notices/privacy-notice/"
              className="font-medium text-white underline"
            >
              Privacy Notice
            </Link>
            .
          </p>
        </div>

        {showError && (
          <div className="sm:col-span-2">
            <p className="text-sm p-2 bg-info-800 text-info-200 text-white rounded-md">
              Error found 😔 use the contact prompt please.
            </p>
          </div>
        )}
      </Form>
    </>
  );
};

export default HeroForm;
