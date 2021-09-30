import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'components';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',

    width: ({ fullWidth }) => {
      if (fullWidth) return '100%';
      return 'fit-content';
    },

    color: ({ color }) => {
      if (color === 'primary') return theme.palette.grey[100];
      return theme.palette.text.primary;
    },

    whiteSpace: 'nowrap',
    cursor: 'pointer',
    userSelect: 'none',
    border: 'none',
    backgroundColor: ({ color }) => {
      if (color === 'primary') return theme.palette.primary.main;
      return theme.palette.grey[300];
    },

    textDecoration: 'none',

    borderRadius: 0,
    padding: '1rem 0.8rem',
    fontSize: '2rem',

    '&:hover': ({ color }) => {
      if (color === 'primary') return theme.palette.primary.light;
      return theme.palette.grey[600];
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

  prefixIconWrapper: {
    marginRight: 10,
    verticalAlign: 'middle',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      lineHeight: 2,
      padding: 10,
    },
  },
}));

const Button = ({
  fullWidth = false,
  text = 'Submit',
  link = false,
  color = 'primary',
  className = {},
  ...props
}) => {
  const classes = useStyles({ color, fullWidth });

  if (link) {
    return (
      <Link
        className={classnames('w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10', { 'text-white bg-indigo-600 hover:bg-indigo-700': color === 'primary', '': color === 'secondary' }, className.root)}
        {...props}
      >
        {text}
      </Link>
    );
  }

  return (
    <button className={classnames('typography-mono', classes.root, className.root)} {...props}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
