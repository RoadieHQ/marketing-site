import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

const PageMargins = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default PageMargins;
