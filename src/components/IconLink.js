import React from 'react';
import { createUseStyles } from 'react-jss';
import Link from './Link';

const useStyles = createUseStyles((theme) => ({
  link: {
    color: ({ color }) =>
      color === 'contrasting' ? theme.palette.text.secondaryLight : theme.palette.text.secondary,
    outline: 'none',
    cursor: 'pointer',

    '&:hover': {
      color: ({ color }) =>
        color === 'contrasting' ? theme.palette.text.primaryLight : theme.palette.text.primary,
    },
  },
}));

const IconLink = ({ to, children, color }) => {
  const classes = useStyles({ color });
  return (
    <Link to={to} className={classes.link}>
      {children}
    </Link>
  );
};

export default IconLink;
