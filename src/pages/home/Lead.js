import React from 'react';
import { createUseStyles } from 'react-jss';
import grey from '@material-ui/core/colors/grey';

const useStyles = createUseStyles(() => ({
  root: {
    fontSize: '1.15rem',
    color: grey[700],
    lineHeight: 1.7,
  },
}));

const Lead = ({ text = 'Some attention grabbing text' }) => {
  const classes = useStyles();
  return <p className={classes.root}>{text}</p>;
};

export default Lead;
