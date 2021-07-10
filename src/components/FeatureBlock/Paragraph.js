import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  p: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
}));

const FeatureBlockParagraph = ({ children }) => {
  const classes = useStyles();
  return <p className={classes.p}>{children}</p>;
};

export default FeatureBlockParagraph;
