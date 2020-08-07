import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  inner: {
    display: 'none',
    minHeight: 40,

    color: theme.palette.grey[700],
    textDecoration: 'none',
    lineHeight: 1.75,

    '& a': {
      color: theme.palette.grey[700],
      textDecoration: 'none',
    },
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },

  nonFirstLink: {
    marginLeft: 32,
  },
}));

const SitewideFooter = () => {
  const classes = useStyles();

  return (
    <footer>
      <div className={classes.inner}>
        <div>© {new Date().getFullYear()} Larder, Inc. All rights reserved.</div>

        <nav>
          <Link to="/terms">Terms of service</Link>
          <Link to="/privacy" className={classes.nonFirstLink}>
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default SitewideFooter;
