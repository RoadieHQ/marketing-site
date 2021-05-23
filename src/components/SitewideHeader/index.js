import React from 'react';
import { createUseStyles } from 'react-jss';
import { graphql, useStaticQuery } from 'gatsby';
import { Button, LayoutControl } from 'components';
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

  return (
    <div className={classes.root}>
      <LayoutControl maxWidthBreakpoint={maxWidthBreakpoint}>
        <header className={classes.header}>
          <Logo />

          <nav className={classes.fullScreenNav} aria-label="Sitewide navigation">
            <span className={classes.textLinkWrapper}>
              <NavItemSpacer>
                <DropdownMenuItem title="Learn" siteMetadata={data.site.siteMetadata} />
              </NavItemSpacer>

              <NavItemSpacer>
                <Button
                  to="/evaluation-request/"
                  link={true}
                  text="Join the waitlist"
                  id="evaluation-request-link-button"
                  color="primary"
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
