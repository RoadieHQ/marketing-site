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
  const style = { maxWidth: theme.breakpoints.values[maxWidthBreakpoint] };

  if (maxWidthBreakpoint === 'none') {
    delete style.maxWidth;
  }

  return (
    <div className={classes.root} style={style}>
      {children}
    </div>
  );
};

export default LayoutControl;
