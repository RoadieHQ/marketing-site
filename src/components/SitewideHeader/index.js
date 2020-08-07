import React from 'react';
import { createUseStyles } from 'react-jss';
import { graphql, useStaticQuery } from 'gatsby';
import { FaTwitter, FaGithub, FaSpotify } from 'react-icons/fa';

import IconLink from '../IconLink';
import styles from './styles';
import TextLink from './TextLink';
import NavItemSpacer from './NavItemSpacer';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';

const useStyles = createUseStyles(styles);

const SitewideHeader = () => {
  const classes = useStyles();
  const data = useStaticQuery(query);

  const TWITTER_URL = `https://twitter.com/${data.site.siteMetadata.social.twitter}`;
  const GITHUB_URL = `https://github.com/${data.site.siteMetadata.social.github}`;

  return (
    <header className={classes.root}>
      <Logo />

      <nav className={classes.fullScreenNav}>
        <span className={classes.textLinkWrapper}>
          <NavItemSpacer>
            <TextLink to="/backstage/plugins" text="Backstage Plugins" />
          </NavItemSpacer>

          <NavItemSpacer>
            <TextLink to="/careers" text="Careers" />
          </NavItemSpacer>

          <NavItemSpacer>
            <TextLink to="/blog" text="Blog" />
          </NavItemSpacer>
        </span>

        <NavItemSpacer>
          <IconLink to={TWITTER_URL} target="_blank">
            <FaTwitter />
          </IconLink>
        </NavItemSpacer>

        <NavItemSpacer>
          <IconLink to={GITHUB_URL} target="_blank">
            <FaGithub />
          </IconLink>
        </NavItemSpacer>

        <NavItemSpacer>
          <IconLink to="https://backstage.io" target="_blank">
            <FaSpotify />
          </IconLink>
        </NavItemSpacer>
      </nav>

      <span className={classes.hamburgerMenuWrapper}>
        <HamburgerMenu />
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
