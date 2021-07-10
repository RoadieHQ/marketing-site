import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';

import roadieLogo from '../../../content/assets/logos/roadie/roadie-word.svg';

const useStyles = createUseStyles((theme) => ({
  h2: {
    color: theme.palette.text.primary,
    margin: 0,
    padding: 0,
    display: 'none',
  },

  logo: {
    backgroundImage: `url(${roadieLogo})`,
    backgroundPosition: 'center left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    // These are calculated based on the dimensions of the logo in Figma.
    width: 130,
    height: 20,
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
      <div className={classes.logo} />
      <h2 className={classes.h2}>Roadie</h2>
    </Link>
  );
};

export default Logo;
