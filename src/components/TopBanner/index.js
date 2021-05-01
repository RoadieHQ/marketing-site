import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'components';

const useStyles = createUseStyles(() => ({
  root: {
    textAlign: 'center',
    // This color is the one used on the Open Mic website.
    backgroundColor: '#121212',
    color: 'white',
    padding: '0.75em 16px',
  },

  link: {
    color: 'white',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const TopBanner = ({ to, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to={to} className={classes.link}>
        {children}
      </Link>
    </div>
  );
};

export default TopBanner;
