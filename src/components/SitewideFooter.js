import React from 'react';
import { createUseStyles } from 'react-jss';
import { CookieConsent, Link } from 'components';

const useStyles = createUseStyles((theme) => ({
  root: {
    paddingTop: 16,
  },

  inner: {
    display: 'none',
    minHeight: 100,

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
    },
  },

  nonFirstLink: {
    marginLeft: 32,
  },
}));

const SitewideFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.inner}>
        <div>© {new Date().getFullYear()} Larder Software Limited</div>

        <nav>
          <Link to="/careers/">Careers</Link>

          {/* This link will work in production but not in development. Netlify does the 301. */}
          <Link to="/legal-notices/terms-of-service/" className={classes.nonFirstLink}>
            Legal
          </Link>

          <Link to="/legal-notices/privacy-policy/" className={classes.nonFirstLink}>
            Privacy
          </Link>

          <Link
            to="/docs/getting-started/getting-started-for-admins/"
            className={classes.nonFirstLink}
            id="sitewide-footer-documentation"
          >
            Documentation
          </Link>
        </nav>
      </div>

      <CookieConsent />
    </footer>
  );
};

export default SitewideFooter;
