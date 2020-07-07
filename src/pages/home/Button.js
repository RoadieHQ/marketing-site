import React from 'react';
import { createUseStyles } from 'react-jss';
import grey from '@material-ui/core/colors/grey';
import deepOrange from '@material-ui/core/colors/deepOrange';

const useStyles = createUseStyles(() => ({
  root: {
    display: 'inline-block',
    fontFamily: 'Moderat Mono, Courier New, monospace',
    fontWeight: 700,
    lineHeight: 1.5,
    color: grey[100],
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    border: 'none',
    backgroundColor: deepOrange[600],

    // lg
    padding: '0.5rem 1rem',
    fontSize: '1.25rem',
    borderRadius: 0,

    '&:hover': {
      color: '#bada55',
    },

    '&:focus': {
      outline: 'none',
      boxShadow: `inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba(${grey[900]}, .075)`,
    },

    '&:active': {
      boxShadow: `inset 0 3px 5px rgba(${grey[900]}, .125)`,
    },

    '&:disabled': {
      opacity: 0.65,
    },
  },
}));


const Button = () => {
  const classes = useStyles();

  return (
    <button type="submit" className={classes.root}>
      <span>Talk to us</span>
    </button>
  );
};

export default Button;
