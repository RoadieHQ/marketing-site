import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
  },

  col: {
    flex: 1,
  },

  leftCol: {},

  rightCol: {
    display: 'none',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    leftCol: {
      paddingTop: 30,
      paddingRight: 0,
    },

    rightCol: {
      display: 'block',
    },
  },
}));

const TwoColumnLayout = ({ leftContent, rightContent }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classnames(classes.col, classes.leftCol)}>{leftContent}</div>

      <div className={classnames(classes.col, classes.rightCol)}>
        {rightContent}
        <div className={classes.image} />
      </div>
    </div>
  );
};

export default TwoColumnLayout;
