import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles(() => ({
  root: {
    textAlign: 'center',
    paddingTop: 24,
    paddingBottom: ({ paddingBottom }) => paddingBottom,
  },

  h2: {
    margin: 0,
  },
}));

const InterstitialTitle = ({ text, className, paddingBottom = 8 }) => {
  const classes = useStyles({ paddingBottom });

  return (
    <div className={classnames(classes.root, className)}>
      <h2 className={classes.h2}>{text}</h2>
    </div>
  );
};

export default InterstitialTitle;
