import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles(() => ({
  root: {
    textAlign: 'center',
    paddingTop: 24,
    paddingBottom: ({ paddingBottom }) => paddingBottom,
  },

  h2: {
    margin: 0,
    fontSize: ({ fontSize }) => fontSize,
  },
}));

const InterstitialTitle = ({
  text,
  className,
  children,
  paddingBottom = 8,
  fontSize = '1.5em',
}) => {
  const classes = useStyles({ paddingBottom, fontSize });
  const inner = text ? text : children;

  return (
    <div className={classnames(classes.root, className)}>
      <h2 className={classes.h2}>{inner}</h2>
    </div>
  );
};

export default InterstitialTitle;
