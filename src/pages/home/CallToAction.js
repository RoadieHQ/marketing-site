import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import deepOrange from '@material-ui/core/colors/deepOrange';
import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo'; 

import Button from './Button';

const useStyles = createUseStyles(() => ({
  inputWrapper: {
    width: '100%',
    display: 'flex',
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
      fontWeight: 700,
      color: indigo[900],
      fontFamily: 'Moderat Mono, Courier New, monospace',
      lineHeight: 2,
      fontSize: '0.875rem',
      // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
      opacity: 1,
    },
  },
}));

const encode = (data) => (
  Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
);

const CallToAction = ({
  placeholderText = 'Work email',
  buttonText = 'Notify me',
  inputType = 'email',
}) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        'form-name': 'landing-page-notify-me',
        email,
      }),
    });

    const result = await response.json();

    console.log('resp', result);
  };

  const INPUT_NAME = 'email';

  return (
    <>
      <form onSubmit={onSubmit} name="landing-page-notify-me">
        <div className={classes.inputWrapper}>
          <input
            type={inputType}
            name={INPUT_NAME}
            placeholder={placeholderText}
            className={classes.input}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Button text={buttonText} />
        </div>
      </form>

      {/* This helps Netlify to automatically handle the form submission which happens in
          the onSubmit handler
      */}
      <form name="landing-page-notify-me" netlify netlify-honeypot="bot-field" hidden>
        <input type={inputType} name={INPUT_NAME} />
      </form>
    </>
  );
};

export default CallToAction;
