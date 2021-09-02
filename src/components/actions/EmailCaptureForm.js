import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { FaPaperPlane } from 'react-icons/fa';

import { currentlyExecutingGitBranch } from '../../environment';
import { TextField, Button } from 'components';

const styles = (theme) => ({
  inputWrapper: {
    width: '100%',
    display: 'flex',
    marginBottom: 8,
    flexDirection: 'column',
  },

  subForm: {
    fontSize: '1.2rem',
    color: theme.palette.grey[600],
    minHeight: 16,
  },

  subFormerror: {
    color: theme.palette.deepOrange[700],
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    inputWrapper: {
      flexDirection: 'row',
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

  const onInputChange = (e) => {
    setEmail(e.target.value);
  };

  const disabled = submitting || !email || email === '';
  const subFormStateClass =
    `subForm${subForm.state}` in classes && classes[`subForm${subForm.state}`];

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
          onChange={onInputChange}
          value={email}
          autoFocus={autoFocus}
          color="primary"
        />

        <Button
          text={buttonText}
          disabled={disabled}
          icon={<FaPaperPlane />}
          id={buttonId}
          color="primary"
        />
      </div>
      <div className={classnames(subFormStateClass, classes.subForm)}>{subForm.message}</div>
    </form>
  );
  /* eslint-enable jsx-a11y/no-autofocus */
};

export default EmailCaptureForm;
