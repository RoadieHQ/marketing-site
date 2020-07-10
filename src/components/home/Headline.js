import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {
    marginBottom: 30,
  },

  h1: {
    fontSize: '3.75rem',
    lineHeight: 1.25,
    color: theme.palette.grey[900],
    marginBottom: 0,
    fontWeight: 700,
  },
}));

const Headline = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classnames('typography-body', classes.h1)}>
        {text}{' '}
        <span role="img" aria-label="Flexed biceps">
          💪
        </span>
      </h1>
    </div>
  );
};

export default Headline;
