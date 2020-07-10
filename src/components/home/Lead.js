import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    ...theme.typography.body,
    fontSize: '1.35rem',
    color: theme.palette.grey[700],
    lineHeight: 1.7,
  },
}));

const Lead = ({ text = 'Some attention grabbing text' }) => {
  const classes = useStyles();
  return <p className={classes.root}>{text}</p>;
};

export default Lead;
