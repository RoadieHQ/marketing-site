import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles(() => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const LayoutControl = ({ children, maxWidthBreakpoint = 'xl' }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{ maxWidth: theme.breakpoints.values[maxWidthBreakpoint] }}
    >
      {children}
    </div>
  );
};

export default LayoutControl;
