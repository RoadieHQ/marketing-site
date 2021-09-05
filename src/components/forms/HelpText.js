import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {
    fontSize: '1.2rem',
    color: theme.palette.grey[600],
    minHeight: 16,
  },

  'state-error': {
    color: theme.palette.deepOrange[700],
  },
}));

const HelpText = ({ className, state, message }) => {
  const classes = useStyles();
  const stateClass = `state-${state}` in classes && classes[`state-${state}`];

  return (
    <div className={classnames(classes.root, stateClass, className)}>
      {message}
    </div>
  );
};

export default HelpText;
