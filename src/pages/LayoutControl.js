import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    maxWidth: theme.breakpoints.values.lg,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 16,
    paddingRight: 16,
  },
}));

const LayoutControl = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default LayoutControl;
