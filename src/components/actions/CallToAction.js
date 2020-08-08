import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { FaPaperPlane } from 'react-icons/fa';

import Button from '../home/Button';
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

    backgroundColor: theme.palette.grey[100],
    color: theme.palette.secondary.dark,

    fontSize: '1rem',
    lineHeight: 2,
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
      fontSize: '0.875rem',
      // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
      opacity: 0.5,
    },
  },

  subForm: {
    fontSize: '0.875rem',
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
      padding: '0.5rem 0.5rem',
    },
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
  buttonText = 'Click here',
  setModalOpen,
}) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [subForm, setSubForm] = useState({});

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
          aria-label="Work email address"
          placeholder={placeholderText}
          className={classnames('typography-mono', classes.input)}
          onChange={onInputChange}
          value={email}
        />

        <Button text={buttonText} disabled={disabled} icon={<FaPaperPlane />} />
      </div>
      <div className={classnames('typography-body', subFormStateClass, classes.subForm)}>
        {subForm.message}
      </div>
    </form>
  );
};

export default CallToAction;
