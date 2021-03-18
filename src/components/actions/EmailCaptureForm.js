import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { FaPaperPlane } from 'react-icons/fa';

import Button from '../Button';

const styles = (theme) => ({
  inputWrapper: {
    width: '100%',
    display: 'flex',
    marginBottom: 8,
  },

  input: {
    flex: 1,

    border: 'none',
    borderLeft: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 0,

    backgroundColor: theme.palette.grey[100],
    color: theme.palette.secondary.dark,

    lineHeight: 3,
    padding: '0.1rem 0.5rem',

    '&:focus': {
      borderRadius: 0,
      // Just change the color of the border so the cursor in the input doesn't move.
      borderLeftColor: 'transparent',
      outlineWidth: 2,
      outlineStyle: 'solid',
      outlineColor: theme.palette.primary.main,
      // Fixes issue in Firefox where outline is outside the input vs Chrome where it is inside.
      outlineOffset: -2,
    },

    '&::placeholder': {
      color: theme.palette.secondary.light,
      // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
      opacity: 0.5,
    },
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
    input: {
      fontSize: '2rem',
      padding: '0.5rem 0.5rem',
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
    <form onSubmit={onSubmit}>
      <div className={classes.inputWrapper}>
        <input
          type="email"
          name="email"
          id={emailInputId}
          aria-label="Work email address"
          placeholder={placeholderText}
          className={classes.input}
          onChange={onInputChange}
          value={email}
          autoFocus={autoFocus}
        />

        <Button text={buttonText} disabled={disabled} icon={<FaPaperPlane />} id={buttonId} />
      </div>
      <div className={classnames(subFormStateClass, classes.subForm)}>{subForm.message}</div>
    </form>
  );
  /* eslint-enable jsx-a11y/no-autofocus */
};

export default EmailCaptureForm;
