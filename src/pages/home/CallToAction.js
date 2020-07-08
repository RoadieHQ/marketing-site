import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import deepOrange from '@material-ui/core/colors/deepOrange';
import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo';
import classnames from 'classnames';

import Button from './Button';
import { FORM_NAME } from '../../contactFormConstants';

const useStyles = createUseStyles(() => ({
  inputWrapper: {
    width: '100%',
    display: 'flex',
    marginBottom: 8,
  },

  input: {
    flex: 1,

    border: 'none',
    borderLeft: `2px solid ${deepOrange[600]}`,
    borderRadius: 0,
    padding: '0.5rem 0.5rem',

    backgroundColor: grey[100],
    color: indigo[900],

    fontSize: '1rem',
    fontWeight: 700,
    fontFamily: 'Moderat Mono, Courier New, monospace',
    lineHeight: 2,

    '&:focus': {
      borderRadius: 0,
      // Just change the color of the border so the cursor in the input doesn't move.
      borderLeftColor: 'transparent',
    },

    '&::placeholder': {
      color: indigo[700],
      fontFamily: 'Moderat Mono, Courier New, monospace',
      lineHeight: 2,
      fontSize: '0.875rem',
      // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
      opacity: 0.5,
    },
  },

  subForm: {
    fontSize: '0.875rem',
    color: grey[400],
  },

  subFormerror: {
    color: deepOrange[700],
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

    if (!resp.ok) {
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
    setModalOpen(true);
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
