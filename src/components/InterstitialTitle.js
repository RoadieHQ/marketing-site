import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {
    textAlign: 'center',
    paddingBottom: ({ paddingBottom }) => paddingBottom,
  },

  h2: {
    margin: 0,
    fontSize: '1.5em',
  },


  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    h2: {
      fontSize: ({ size }) => {
        if (size === 'small') return '1.5em';
        if (size === 'large') return '3em';
      },
    },
  },
      
}));

const InterstitialTitle = ({
  text,
  className = {},
  children,
  paddingBottom = 8,
  id,
  size = 'small',
}) => {
  const classes = useStyles({ paddingBottom, size });
  const inner = text ? text : children;

  return (
    <div className={classnames(classes.root, className.root)} id={id}>
      <h2 className={classnames(classes.h2, className.h2)}>{inner}</h2>
    </div>
  );
};

export default InterstitialTitle;
