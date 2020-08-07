import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  root: {
    marginLeft: 32,
  },
}));

const NavItemSpacer = ({ children }) => {
  const classes = useStyles();
  return <span className={classes.root}>{children}</span>;
};

export default NavItemSpacer;
