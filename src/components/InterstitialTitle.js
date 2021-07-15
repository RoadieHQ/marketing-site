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
    fontSize: '1.5em',
  },
}));

const InterstitialTitle = ({
  text,
  className = {},
  children,
  paddingBottom = 8,
  id,
}) => {
  const classes = useStyles({ paddingBottom });
  const inner = text ? text : children;

  return (
    <div className={classnames(classes.root, className.root)} id={id}>
      <h2 className={classnames(classes.h2, className.h2)}>{inner}</h2>
    </div>
  );
};

export default InterstitialTitle;
