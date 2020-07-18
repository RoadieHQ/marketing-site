import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles(() => ({
  root: {
    textAlign: 'center',
    paddingTop: 24,
    paddingBottom: 8,
  },
}));

const InterstitialTitle = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classnames('typography-body', classes.root)}>
      <h2>{text}</h2>
    </div>
  );
};

export default InterstitialTitle;
