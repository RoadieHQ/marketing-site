import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import Button from './Button';
import { FORM_NAME } from '../../contactFormConstants';

const useStyles = createUseStyles((theme) => ({
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
    padding: '0.5rem 0.5rem',

    backgroundColor: theme.palette.grey[100],
    color: theme.palette.secondary.dark,

    fontSize: '1rem',
    fontWeight: 700,
    fontFamily: 'Moderat Mono, Courier New, monospace',
    lineHeight: 2,

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
      fontFamily: 'Moderat Mono, Courier New, monospace',
      fontSize: '0.875rem',
      // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
      opacity: 0.5,
    },
  },

  subForm: {
    fontSize: '0.875rem',
    color: theme.palette.grey[400],
  },

  subFormerror: {
    color: theme.palette.deepOrange[700],
  },
}));

const encode = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((k) => {
    formData.append(k, data[k]);
  });
  return formData;
};

const CallToAction = ({
  placeholderText = 'Work email',
  buttonText = 'Notify me',
  setModalOpen,
}) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [subForm, setSubForm] = useState({
    state: 'help',
    message: 'Emails are stored on netlify.com and never sold or shared.',
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const resp = await fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': FORM_NAME,
        email,
      }),
    });

    if (resp.ok) {
      setModalOpen(true);
      setEmail('');
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

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.inputWrapper}>
        <input
          type="email"
          name="email"
          placeholder={placeholderText}
          className={classes.input}
          onChange={onInputChange}
          value={email}
        />

        <Button text={buttonText} disabled={disabled} />
      </div>
      <span className={classnames(subFormStateClass, classes.subForm)}>{subForm.message}</span>
    </form>
  );
};

export default CallToAction;
