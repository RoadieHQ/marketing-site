import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { TextLink as Link } from 'components';
import EmailCaptureForm from '../actions/EmailCaptureForm';
import { FORM_NAMES } from '../../contactFormConstants';
import { submitEmailToNetlifyForms } from '../actions/NetlifyFormCallToAction';

const GetInstanceFormCallToAction = ({ ...props }) => {
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const ctaButtonLabel = 'Get Backstage';
  const netlifyFormName = FORM_NAMES.getInstance;
  const [subForm, setSubForm] = useState({
    message: (
      <span>Just want to learn? Join the <Link color="primary" to="/backstage-weekly/">Backstage Weekly newsletter</Link> instead.</span>
    ),
  });

  const visitGetBackstageForm = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const resp = await submitEmailToNetlifyForms({
      email,
      netlifyFormName,
      submitButtonLabel: ctaButtonLabel,
    });

    if (resp.ok) {
      const codedEmail = encodeURIComponent(email);
      const codedLabel = encodeURIComponent(ctaButtonLabel);

      // DO NOT reset the email input here. It is already happening higher in the state chain.
      setSubmitting(false);
      navigate(`/get-instance/?referred_email=${codedEmail}&clicked_button_label=${codedLabel}`);
    } else {
      setSubmitting(false);
      console.error('Error submitting form to Netlify', resp);
      setSubForm({
        state: 'error',
        message: 'Something went wrong. Please try that again.',
      });
    }
  };

  return (
    <EmailCaptureForm
      email={email}
      setEmail={setEmail}
      buttonText={ctaButtonLabel}
      onSubmit={visitGetBackstageForm}
      subForm={subForm}
      submitting={submitting}
      netlifyFormName={netlifyFormName}
      {...props}
    />
  );
};

export default GetInstanceFormCallToAction;
