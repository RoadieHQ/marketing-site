import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';

import { TextField, Button, Form, Recaptcha } from 'components';
import { newsletterRecaptchaEnabled } from '../../environment';

const EmailCaptureForm = ({
  onSubmit,
  emailInputId = 'email-capture-form-input',
  placeholderText = 'Work email',
  email,
  autoFocus = false,
  buttonText = 'Sign up',
  buttonId = 'email-capture-form-button',
  subForm,
  setEmail,
  recaptchaResponse,
  setRecaptchaResponse,
  recaptchaExpired,
  setRecaptchaExpired,
  submitting = false,
  netlifyFormName,
  className,
  honeypotValue,
  setHoneypotText,
}) => {
  let disabled = submitting || !email || email === '';
  if (newsletterRecaptchaEnabled()) {
    disabled = disabled || !recaptchaResponse || recaptchaResponse === '' || recaptchaExpired;
  }

  // Removed unnecessary debug logging statements.

  /* eslint-disable jsx-a11y/no-autofocus */
  return (
    <>
      {newsletterRecaptchaEnabled() && (
        <Helmet>
          <script src="https://www.google.com/recaptcha/api.js" async defer />
        </Helmet>
      )}

      <Form
        onSubmit={onSubmit}
        name={netlifyFormName}
        buttonText={buttonText}
        honeypotValue={honeypotValue}
        onHoneypotChange={setHoneypotText}
        data-netlify-recaptcha={newsletterRecaptchaEnabled() ? 'true' : undefined}
      >
        <div className={classnames('flex flex-col', className)}>
          <div className="mb-12">
            <TextField
              type="email"
              name="email"
              id={emailInputId}
              aria-label="Work email address"
              placeholder={placeholderText}
              onChange={setEmail}
              value={email}
              autoFocus={autoFocus}
              color="primary"
              helpText={subForm.message}
              helpTextState={subForm.state}
              fullWidth
            />
          </div>

          {newsletterRecaptchaEnabled() && (
            <Recaptcha
              onChange={setRecaptchaResponse}
              wrapperClassName="mb-4 flex justify-center"
              setRecaptchaExpired={setRecaptchaExpired}
            />
          )}

          <div className="md:ml-1 mt-4">
            <Button
              text={buttonText}
              disabled={disabled}
              prefixIcon={<PaperAirplaneIcon />}
              id={buttonId}
              fullWidth
              color="primary"
            />
          </div>
        </div>
      </Form>
    </>
  );
  /* eslint-enable jsx-a11y/no-autofocus */
};

export default EmailCaptureForm;
