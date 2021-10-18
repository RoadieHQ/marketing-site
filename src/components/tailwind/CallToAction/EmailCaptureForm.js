import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import classnames from 'classnames';

import { currentlyExecutingGitBranch } from '../../../environment';
import { TextField, Button } from 'components/tailwind';

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
}) => {
  const disabled = submitting || !email || email === '';

  /* eslint-disable jsx-a11y/no-autofocus */
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

      <div className={classnames('flex flex-col md:flex-row', className)}>
        <div className="mb-4 md:mb-0">
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

        <div className="md:ml-1">
          <Button
            text={buttonText}
            disabled={disabled}
            icon={<FaPaperPlane />}
            id={buttonId}
            fullWidth
            color="primary"
          />
        </div>
      </div>
    </form>
  );
  /* eslint-enable jsx-a11y/no-autofocus */
};

export default EmailCaptureForm;
