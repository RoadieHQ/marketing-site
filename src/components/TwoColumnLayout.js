import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },

  col: {
    flex: 1,
  },

  leftCol: {},

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      flexDirection: 'row',
    },

    leftCol: {
      paddingRight: 0,
    },
  },
}));

const TwoColumnLayout = ({ leftContent, rightContent, className = {} }) => {
  const classes = useStyles();

  return (
    <div className={classnames(classes.root, className.root)}>
      <div className={classnames(classes.col, classes.leftCol, className.leftCol)}>
        {leftContent}
      </div>

      <div className={classnames(classes.col, classes.rightCol, className.rightCol)}>
        {rightContent}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
