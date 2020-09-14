import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { FaPaperPlane } from 'react-icons/fa';

import Button from '../home/Button';
import { FORM_NAMES } from '../../contactFormConstants';
import { styles, encode } from './CallToAction';

const useStyles = createUseStyles(styles);

const SubscribeToNewsletter = ({
  placeholderText = 'human@company.com',
  buttonText = 'Click here',
  subFormMessage = 'We will never sell or share your email address.',
  setModalOpen,
}) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
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
        'form-name': FORM_NAMES.subscribeToNewsletter,
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
          className={classes.input}
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

export default SubscribeToNewsletter;
