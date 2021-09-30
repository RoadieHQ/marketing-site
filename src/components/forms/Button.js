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
  size = 'medium',
  ...props
}) => {
  const classes = useStyles({ color, fullWidth });

  // variants
  //
  // sizes
  // lg (landing page hero)
  //   px-8 py-3 text-base font-medium md:py-4 md:text-lg md:px-10
  //
  // md
  //   px-5 py-3
  //
  // colors
  // primary
  //   rounded-md shadow
  //   text-white bg-indigo-600 hover:bg-indigo-700
  //
  // secondary
  //   rounded-md shadow
  //   text-indigo-600 bg-white hover:bg-gray-50
  //
  // inset
  //
  //   text-indigo-700 bg-indigo-100 hover:bg-indigo-200

  const linkBaseClassName = 'flex items-center justify-center border border-transparent text-base font-medium rounded-md';

  if (link) {
    return (
      <div className={classnames({
        'rounded-md shadow': color === 'primary' || color === 'secondary',
      })}>
        <Link
          className={
            classnames(linkBaseClassName, {
              'text-white bg-indigo-600 hover:bg-indigo-700': color === 'primary',
              'text-indigo-600 bg-white hover:bg-gray-50': color === 'secondary',
              'text-indigo-700 bg-indigo-100 hover:bg-indigo-200': color === 'inset',
              'px-5 py-3': size === 'medium',
              'px-8 py-3 md:py-4 md:text-lg md:px-10': size === 'large',
              'w-full': fullWidth === true,
            }, className.root)
          }
          {...props}
        >
          {text}
        </Link>
      </div>
    );
  }

  return (
    <button className={classnames('typography-mono', classes.root, className.root)} {...props}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
