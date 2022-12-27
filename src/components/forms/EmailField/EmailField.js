import React from 'react';
import TextField from '../TextField';
import isArray from 'lodash/isArray';

const DISCOURAGED_EMAIL_HOSTS = /@gmail\.|@hotmail\.|@outlook\.|@yahoo\.|@aol\.|@gmx\./g;

export const isDiscouragedEmail = (email) => isArray(email.match(DISCOURAGED_EMAIL_HOSTS));

const EmailField = ({ value, setValue, ...rest }) => {
  function onChange(email) {
    const newValue = {
      email,
    };

    if (isDiscouragedEmail(email)) {
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
