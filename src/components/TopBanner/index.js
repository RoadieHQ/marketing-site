import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    textAlign: 'center',
    backgroundColor: theme.palette.text.primary,
    color: 'white',
    padding: '0.75em 16px',
  },
}));

const TopBanner = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default TopBanner;
