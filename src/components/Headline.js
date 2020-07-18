import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import theme from '../theme';

const useStyles = createUseStyles(() => ({
  h1: {
    fontSize: '3.75rem',
    lineHeight: 1.25,
    marginBottom: 0,
    fontWeight: 700,
    marginTop: 0,
  },
}));

const DEFAULT_COLOR = theme.palette.text.primary;

const Headline = ({ children, color = DEFAULT_COLOR }) => {
  const classes = useStyles();
  return (
    <h1 className={classnames('typography-body', classes.h1)} style={{ color }}>
      {children}
    </h1>
  );
};

export default Headline;
