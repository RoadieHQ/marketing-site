import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    marginBottom: 30,
  },

  h1: {
    fontSize: '3.75rem',
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.25,
    fontFamily: 'Moderat, Overpass, Helvetica Neue, Arial',
    color: theme.palette.text.primary,
  },
}));

const Headline = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.h1}>Backstage without the hassle</h1>
    </div>
  );
};

export default Headline;
