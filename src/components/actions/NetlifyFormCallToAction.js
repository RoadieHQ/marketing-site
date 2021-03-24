import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { FaPaperPlane } from 'react-icons/fa';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import Button from '../home/Button';
import { FORM_NAMES } from '../../contactFormConstants';

export const styles = (theme) => ({
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

  label: {
    display: 'none',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    input: {
      fontSize: '2rem',
      padding: '0.5rem 0.5rem',
    },
  },
});

const useStyles = createUseStyles(styles);

export const encode = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((k) => {
    formData.append(k, data[k]);
  });
  return formData;
};

const NetlifyFormCallToAction = ({
  placeholderText = 'Work email',
  buttonText = 'Click here',
  subFormMessage = 'We will never sell or share your email address.',
  netlifyFormName = FORM_NAMES.notifyMe,
  setModalOpen,
  autoFocus = false,
  email,
  setEmail,
}) => {
  const classes = useStyles();
  const [submitting, setSubmitting] = useState(false);
  const [subForm, setSubForm] = useState({
    message: subFormMessage,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const resp = await fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': netlifyFormName,
        email,
      }),
    });

    trackCustomEvent({
      category: 'form',
      action: 'submit',
      label: netlifyFormName,
    });

    if (resp.ok) {
      setModalOpen(true);
      // DO NOT reset the email input here. It is already happening higher in the state chain.
    } else {
      setSubForm({
        state: 'error',
        message: 'Something went wrong. Please try that again.',
      });
    }

    setSubmitting(false);
  };

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
          id={`${netlifyFormName}-email-input`}
          aria-label="Work email address"
          placeholder={placeholderText}
          className={classes.input}
          onChange={onInputChange}
          value={email}
          autoFocus={autoFocus}
        />

        <Button
          text={buttonText}
          disabled={disabled}
          icon={<FaPaperPlane />}
          id={`${netlifyFormName}-email-button`}
        />
      </div>
      <div className={classnames(subFormStateClass, classes.subForm)}>{subForm.message}</div>
    </form>
  );
  /* eslint-enable jsx-a11y/no-autofocus */
};

export default NetlifyFormCallToAction;
