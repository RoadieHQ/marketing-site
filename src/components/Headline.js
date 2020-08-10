import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import theme from '../theme';

const useStyles = createUseStyles((theme) => ({
  root: {
    fontSize: '3.75rem',
    lineHeight: 1.25,
    marginBottom: 0,
    fontWeight: theme.typography.bold.fontWeight,
    marginTop: 0,
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      fontSize: '6.75rem',
    },
  },
}));

const DEFAULT_COLOR = theme.palette.text.primary;

const Headline = ({ children, className, color = DEFAULT_COLOR }) => {
  const classes = useStyles();
  return (
    <h1 className={classnames(classes.root, className)} style={{ color }}>
      {children}
    </h1>
  );
};

export default Headline;
