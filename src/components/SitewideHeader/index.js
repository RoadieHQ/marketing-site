import React from 'react';
import { createUseStyles } from 'react-jss';
import { graphql, useStaticQuery } from 'gatsby';
import { LayoutControl, TextLink } from 'components';
import { DEFAULT_MAX_WIDTH_BREAKPOINT } from 'components/LayoutControl';

import styles from './styles';
import NavItemSpacer from './NavItemSpacer';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import DropdownMenuItem from './DropdownMenuItem';

const useStyles = createUseStyles(styles);

const SitewideHeader = ({
  maxWidthBreakpoint = DEFAULT_MAX_WIDTH_BREAKPOINT,
  bottomBorder = true,
}) => {
  const classes = useStyles({ bottomBorder });
  const data = useStaticQuery(query);
  const getDemoLinkText = 'Request a demo';
  const codedGetDemoLinkText = encodeURIComponent(getDemoLinkText);

  return (
    <div className={classes.root}>
      <LayoutControl maxWidthBreakpoint={maxWidthBreakpoint}>
        <header className={classes.header}>
          <Logo />

          <nav className={classes.fullScreenNav} aria-label="Sitewide navigation">
            <span className={classes.textLinkWrapper}>
              <NavItemSpacer>
                <TextLink to="/backstage-weekly/" text="Backstage Weekly" />
              </NavItemSpacer>

              <NavItemSpacer>
                <DropdownMenuItem title="Learn" siteMetadata={data.site.siteMetadata} />
              </NavItemSpacer>

              <NavItemSpacer>
                <TextLink
                  to={`/evaluation-request/?clicked_button_label=${codedGetDemoLinkText}`}
                  text={getDemoLinkText}
                />
              </NavItemSpacer>
            </span>
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
