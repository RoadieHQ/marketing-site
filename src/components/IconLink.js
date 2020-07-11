import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  link: {
    color: theme.palette.grey[700],

    '&:hover': {
      color: theme.palette.grey[600],
    },
  },
}));

const IconLink = ({ url, children, target = '__blank' }) => {
  const classes = useStyles();
  return (
    <a href={url} target={target} className={classes.link}>
      {children}
    </a>
  );
};

export default IconLink;
