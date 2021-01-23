import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import theme from '../theme';

const useStyles = createUseStyles(() => ({
  root: {
    fontSize: '1.6rem',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      fontSize: '1.8rem',
      lineHeight: 1.7,
    },
  },
}));

const DEFAULT_COLOR = theme.palette.text.primary;

const Lead = ({ className, children, color = DEFAULT_COLOR }) => {
  const classes = useStyles();

  return (
    <p className={classnames(classes.root, className)} style={{ color }}>
      {children}
    </p>
  );
};

export default Lead;
