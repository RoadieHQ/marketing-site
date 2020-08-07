import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

export const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'inline-block',
    color: theme.palette.grey[100],
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    border: 'none',
    backgroundColor: theme.palette.primary.main,
    textDecoration: 'none',

    // lg
    fontSize: '1rem',
    borderRadius: 0,
    padding: '0.1rem 0.8rem',

    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },

    '&:focus': {
      outline: 'none',
      boxShadow: `inset 0 1px 0 rgba(0, 0, 0, .15), 0 1px 1px rgba(${theme.palette.grey[900]}, .075)`,
    },

    '&:active': {
      boxShadow: `inset 0 3px 5px rgba(${theme.palette.grey[900]}, .125)`,
    },

    '&:disabled': {
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.grey[500],
    },
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      lineHeight: 1.5,
      fontSize: '1.25rem',

      padding: '0.5rem 1rem',
    },
  },
}));

const Button = ({ text = 'Submit', ...props }) => {
  const classes = useStyles();

  return (
    <button className={classnames('typography-mono', classes.root)} {...props}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
