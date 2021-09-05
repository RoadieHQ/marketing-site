import React from 'react';
import { createUseStyles } from 'react-jss';
import { FaPaperPlane } from 'react-icons/fa';

import { currentlyExecutingGitBranch } from '../../environment';
import { TextField, Button } from 'components';

const styles = (theme) => ({
  inputWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  textFieldRoot: {
    marginBottom: 32,
  },

  textFieldInput: {
    width: '100%',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    inputWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
    },

    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
});

const useStyles = createUseStyles(styles);

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
}) => {
  const classes = useStyles();

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

      <div className={classes.inputWrapper}>
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
          className={{
            input: classes.textFieldInput,
            root: classes.textFieldRoot,
          }}
        />

        <div className={classes.buttonWrapper}>
          <Button
            text={buttonText}
            disabled={disabled}
            icon={<FaPaperPlane />}
            id={buttonId}
            color="primary"
          />
        </div>
      </div>
    </form>
  );
  /* eslint-enable jsx-a11y/no-autofocus */
};

export default EmailCaptureForm;
