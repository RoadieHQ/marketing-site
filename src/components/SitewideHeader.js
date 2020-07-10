import React from 'react';
import { createUseStyles } from 'react-jss';
import grey from '@material-ui/core/colors/grey';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FaTwitter, FaGithub, FaSpotify } from 'react-icons/fa';

const useStyles = createUseStyles(() => ({
  root: {
    fontFamily: 'Moderat, Overpass, Helvetica Neue, Arial',
    color: grey[900],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  leftSpace: {
    marginLeft: 8,
  },

  iconLink: {
    color: grey[700],

    '&:hover': {
      color: grey[600],
    },
  },
}));

const SitewideHeader = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);

  return (
    <header className={classes.root}>
      <span>
        <Link to="/">
          <h2>{data.site.siteMetadata.title}</h2>
        </Link>
      </span>

      <span>
        <span>
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
      </span>
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
