import React from 'react';
import { createUseStyles } from 'react-jss';
import deepOrange from '@material-ui/core/colors/deepOrange';
import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo'; 

import Button from './Button';

const useStyles = createUseStyles(() => ({
  input: {
    display: 'inline-block',

    border: 'none',
    borderLeft: `2px solid ${deepOrange[600]}`,
    borderRadius: 0,
    padding: '0.5rem 1rem',

    backgroundColor: grey[100],
    color: indigo[900],

    fontSize: '1rem',
    fontWeight: 700,
    fontFamily: 'Moderat Mono, Courier New, monospace',
    lineHeight: 2,

    minWidth: '20rem',

    '&:focus': {
      borderRadius: 0,
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

const CallToAction = () => {
  const classes = useStyles();

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Work email"
          className={classes.input}
        />
        <Button />
      </form>
    </div>
  );
};

export default CallToAction;
