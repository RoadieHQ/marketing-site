import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  h2: {
    color: theme.palette.text.primary,
  },

  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',

    '& a:visited': {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.link}>
      <h2 className={classnames('typography-logo', classes.h2)}>Roadie</h2>
    </Link>
  );
};

export default Logo;
