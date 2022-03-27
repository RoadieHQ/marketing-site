import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/outline';
import classnames from 'classnames';

import { TextField, Button, Form, Recaptcha } from 'components';

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
  className,
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
      <div className={classnames('flex flex-col', className)}>
        <div className="mb-4">
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

        <div className="mb-4 flex justify-center">
          <Recaptcha />
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
    </Form>
  );
  /* eslint-enable jsx-a11y/no-autofocus */
};

export default EmailCaptureForm;
