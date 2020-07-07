import React from 'react';
import { createUseStyles } from 'react-jss';
import deepOrange from '@material-ui/core/colors/deepOrange';

const useStyles = createUseStyles(() => ({
  root: {
    color: deepOrange[600],
    fontFamily: 'Moderat Mono, Courier New, monospace',
    textDecoration: 'none',

    '&:hover $caretFull': {
      visibility: 'visible',
    },

    '&:hover $caretEmpty': {
      visibility: 'hidden',
    },
  },

  caretEmpty: {
    visibility: 'visible',
  },

  caretFull: {
    visibility: 'hidden',
  },
}));

const CallToAction = () => {
  const classes = useStyles();

  return (
    <a href="https://demo.upstage.dev" target="__blank" className={classes.root}>
      <span>Play with a demo of Backstage</span>
      &nbsp;
      <span className={classes.caretEmpty}>▷</span>
      <span className={classes.caretFull}>▶︎</span>
    </a>
  );
};

export default CallToAction;
