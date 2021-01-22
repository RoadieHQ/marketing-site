import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { CookieConsent } from 'components';

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
  const data = useStaticQuery(query);
  const { newsletterUrl } = data.site.siteMetadata;

  return (
    <footer>
      <div className={classes.inner}>
        <div>© {new Date().getFullYear()} Larder, Inc. All rights reserved.</div>

        <nav>
          <a href={newsletterUrl} target="_blank" rel="noopener noreferrer">
            Backstage Weekly
          </a>
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

export const query = graphql`
  query SitewideFooter {
    site {
      siteMetadata {
        title
        newsletterUrl
      }
    }
  }
`;
