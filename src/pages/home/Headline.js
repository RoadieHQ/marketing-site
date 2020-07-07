import React from 'react';
import { createUseStyles } from 'react-jss';
import grey from '@material-ui/core/colors/grey';

const useStyles = createUseStyles(() => ({
  root: {
    marginBottom: 30,
  },

  h1: {
    fontSize: '3.75rem',
    fontWeight: 700,
    lineHeight: 1.25,
    fontFamily: 'Moderat, Overpass, Helvetica Neue, Arial',
    color: grey[900],
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
