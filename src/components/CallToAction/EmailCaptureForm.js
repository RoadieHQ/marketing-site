import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import classnames from 'classnames';

import { TextField, Button, Form } from 'components';

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
  submitting = false,
  netlifyFormName,
  className = 'md:justify-center',
  honeypotValue,
  setHoneypotText,
}) => {
  const disabled = submitting || !email || email === '';

  /* eslint-disable jsx-a11y/no-autofocus */
  return (
    <Form
      onSubmit={onSubmit}
      name={netlifyFormName}
      buttonText={buttonText}
      honeypotValue={honeypotValue}
      onHoneypotChange={setHoneypotText}
    >
      <div className={classnames('flex flex-col lg:flex-row', className)}>
        <div className="mb-4 lg:mb-0">
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

      <div data-netlify-recaptcha="true" />
    </Form>
  );
  /* eslint-enable jsx-a11y/no-autofocus */
};

export default EmailCaptureForm;
