import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
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
    <a
      href="https://backstage-demo.roadie.io"
      target="__blank"
      className={classnames('typography-mono', classes.root)}
    >
      <span>Play with a demo of Backstage</span>
      &nbsp;
      <span className={classes.caretEmpty}>▷</span>
      <span className={classes.caretFull}>▶︎</span>
    </a>
  );
};

export default CallToAction;
