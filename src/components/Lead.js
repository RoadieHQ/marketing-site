import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import theme from '../theme';

const useStyles = createUseStyles(() => ({
  root: {
    fontSize: '1.35rem',
    lineHeight: 1.7,
  },
}));

const DEFAULT_COLOR = theme.palette.text.primary;

const Lead = ({ text = 'Some attention grabbing text', color = DEFAULT_COLOR }) => {
  const classes = useStyles();

  return (
    <p className={classnames('typography-body', classes.root)} style={{ color }}>
      {text}
    </p>
  );
};

export default Lead;
