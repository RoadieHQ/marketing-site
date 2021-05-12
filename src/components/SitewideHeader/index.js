import React from 'react';
import { createUseStyles } from 'react-jss';
import { graphql, useStaticQuery } from 'gatsby';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { TextLink, LayoutControl } from 'components';
import { DEFAULT_MAX_WIDTH_BREAKPOINT } from 'components/LayoutControl';

import IconLink from '../IconLink';
import styles from './styles';
import NavItemSpacer from './NavItemSpacer';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import BackstageLogo from './BackstageLogo';

const useStyles = createUseStyles(styles);

const canFitDocsLinkInHeader = (maxWidthBreakpoint) => (
  ['xl', 'none'].includes(maxWidthBreakpoint)
);

const SitewideHeader = ({
  maxWidthBreakpoint = DEFAULT_MAX_WIDTH_BREAKPOINT,
  bottomBorder = true,
}) => {
  const classes = useStyles({ bottomBorder });
  const data = useStaticQuery(query);

  const TWITTER_URL = `https://twitter.com/${data.site.siteMetadata.social.twitter}`;
  const GITHUB_URL = `https://github.com/${data.site.siteMetadata.social.github}`;

  return (
    <div className={classes.root}>
      <LayoutControl maxWidthBreakpoint={maxWidthBreakpoint}>
        <header className={classes.header}>
          <Logo />

          <nav className={classes.fullScreenNav}>
            <span className={classes.textLinkWrapper}>
              <NavItemSpacer>
                <TextLink to="/backstage/plugins/" text="Backstage Plugins" />
              </NavItemSpacer>

              <NavItemSpacer>
                <TextLink to="/backstage-weekly/" text="Backstage Weekly" />
              </NavItemSpacer>

              <NavItemSpacer>
                <TextLink to="/blog/" text="Blog" />
              </NavItemSpacer>

              {canFitDocsLinkInHeader(maxWidthBreakpoint) && (
                <NavItemSpacer>
                  <TextLink
                    to="/docs/getting-started/getting-started-for-admins/"
                    text="Documentation"
                  />
                </NavItemSpacer>
              )}
            </span>

            <NavItemSpacer>
              <IconLink to={TWITTER_URL}>
                <FaTwitter />
              </IconLink>
            </NavItemSpacer>

            <NavItemSpacer>
              <IconLink to={GITHUB_URL}>
                <FaGithub />
              </IconLink>
            </NavItemSpacer>

            <NavItemSpacer>
              <IconLink to="https://backstage.io">
                <BackstageLogo />
              </IconLink>
            </NavItemSpacer>
          </nav>

          <span className={classes.hamburgerMenuWrapper}>
            <HamburgerMenu siteMetadata={data.site.siteMetadata} />
          </span>
        </header>
      </LayoutControl>
    </div>
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
