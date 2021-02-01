import React from 'react';
import { createUseStyles } from 'react-jss';
import { CookieConsent, Link } from 'components';

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
        <div>© {new Date().getFullYear()} Larder Software Limited. All rights reserved.</div>

        <nav>
          <Link to="/careers/">Careers</Link>
          <Link to="/terms/" className={classes.nonFirstLink}>
            Terms of service
          </Link>
          <Link to="/privacy/" className={classes.nonFirstLink}>
            Privacy
          </Link>
        </nav>
      </div>

      <CookieConsent />
    </footer>
  );
};

export default SitewideFooter;
