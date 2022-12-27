import React from 'react';
import { TextField } from 'components';

const DISCOURAGED_EMAIL_HOSTS = /gmail|hotmail/g;

const EmailField = ({ value, setValue, ...rest }) => {
  function onChange(email) {
    const newValue = {
      email,
    };

    if (email.match(DISCOURAGED_EMAIL_HOSTS)) {
      newValue.helpText = 'Please use your work email. Roadie is for businesses.';
      newValue.helpTextState = 'error';
    }

    setValue(newValue);
  }

  return (
    <TextField
      {...rest}
      value={value.email}
      helpText={value.helpText}
      helpTextState={value.helpTextState}
      onChange={onChange}
    />
  );
};

export default EmailField;
