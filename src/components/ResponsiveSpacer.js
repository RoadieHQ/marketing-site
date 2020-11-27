import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {},

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      paddingTop: 60,
      paddingBottom: 60,
    },
  },
}));

const ResponsiveSpacer = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default ResponsiveSpacer;
