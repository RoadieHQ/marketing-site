import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FaTwitter, FaGithub, FaSpotify } from 'react-icons/fa';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  nav: {
    display: 'flex',
  },

  textLinkWrapper: {
    marginTop: -2,
  },

  logoH2: {
    color: theme.palette.grey[900],
  },

  link: {
    color: theme.palette.grey[900],
    textDecoration: 'none',
  },

  logoLink: {
    color: theme.palette.grey[900],
    textDecoration: 'none',

    '& a:visited': {
      color: theme.palette.grey[900],
      textDecoration: 'none',
    },
  },

  leftSpace: {
    marginLeft: 16,
  },

  iconLink: {
    color: theme.palette.grey[700],

    '&:hover': {
      color: theme.palette.grey[600],
    },
  },
}));

const SitewideHeader = ({ location }) => {
  const classes = useStyles();
  const data = useStaticQuery(query);

  return (
    <header className={classes.root}>
      <span>
        <Link to="/" className={classes.logoLink}>
          <h2 className={classnames('typography-logo', classes.logoH2)}>
            {data.site.siteMetadata.title}
          </h2>
        </Link>
      </span>

      <nav className={classes.nav}>
        {location && !location.pathname.includes('/blog') && (
          <span className={classnames('typography-body', classes.textLinkWrapper)}>
            <Link to="/blog" className={classes.link}>
              Blog
            </Link>
          </span>
        )}

        <span className={classes.leftSpace}>
          <a
            href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
            target="__blank"
            className={classes.iconLink}
          >
            <FaTwitter />
          </a>
        </span>

        <span className={classes.leftSpace}>
          <a
            href={`https://github.com/${data.site.siteMetadata.social.github}`}
            target="__blank"
            className={classes.iconLink}
          >
            <FaGithub />
          </a>
        </span>

        <span className={classes.leftSpace}>
          <a href="https://backstage.io" target="__blank" className={classes.iconLink}>
            <FaSpotify />
          </a>
        </span>
      </nav>
    </header>
  );
};

export default SitewideHeader;

export const query = graphql`
  query SitewideHeader {
    site {
      siteMetadata {
        title
        social {
          twitter
          github
        }
      }
    }
  }
`;
