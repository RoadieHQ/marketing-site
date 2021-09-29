import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  fieldset: {
    marginBottom: '2em',
  },
}));

const Fieldset = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.fieldset}>{children}</div>;
};

export default Fieldset;
