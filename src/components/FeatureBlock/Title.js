import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  h2: {
    marginBottom: '2rem',
  },
}));

const FeatureBlockTitle = ({ children }) => {
  const classes = useStyles();
  return <h2 className={classes.h2}>{children}</h2>;
};

export default FeatureBlockTitle;
