import React from 'react';
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaPlug,
  FaNewspaper,
  FaMagic,
  FaGraduationCap,
  FaBlog,
  FaBriefcase,
  FaMedal,
  FaMedkit,
} from 'react-icons/fa';
import Menu from 'react-burger-menu/lib/menus/slide';
import { createUseStyles } from 'react-jss';
import { TextLink } from 'components';

import IconLink from '../IconLink';
import BackstageLogo from './BackstageLogo';
import ListItem from './ListItemLink';

const styles = {
  bmBurgerButton: {
    // Removing the position prop will cause the burger to fill the whole screen.
    position: 'relative',
    // Forcing the width prevents a bug on Android Chrome where the icon would
    // grow massive when a user navigated to another page using the sidebar navigation. I
    // couldn't adequately debug the root cause due to a lack of dev toops on Android Chrome
    // so fixing it with the brute force approach.
    width: 20,
    // It defaults to 1000, which makes it appear above the Agolia search autocomplete dialog.
    zIndex: 20,
  },

  bmCrossButton: {
    color: 'white',
    top: 22,
    right: 17,
    position: 'fixed',
  },

  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: 0,
    transition: 'all 0.2s ease 0s',
  },

  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },

  bmMorphShape: {
    fill: '#373a47',
  },

  bmItemList: {
    padding: '0.8em 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  bmItem: {
    outline: 'none',
  },

  bmOverlay: {
    background: 'black',
    opacity: 0.1,
    top: 0,
    left: 0,
  },
};

const useStyles = createUseStyles(() => ({
  '@global': {
    // Prevent the page scrolling while the menu is open.
    '.no-scroll': {
      overflow: 'hidden',
    },
  },

  section: {
    marginBottom: '2em',
  },

  spacer: {
    marginBottom: '0.2em',
  },

  iconSpacer: {
    marginLeft: '1em',
  },

  textLink: {
    // Make the links easier to click.
    display: 'block',
  },

  legalLinks: {
    fontSize: '1rem',
  },

  legalSpacer: {
    marginBottom: '0.7em',
  },
}));

const HamburgerMenu = ({ siteMetadata }) => {
  const classes = useStyles();

  const TWITTER_URL = `https://twitter.com/${siteMetadata.social.twitter}`;
  const GITHUB_URL = `https://github.com/${siteMetadata.social.github}`;

  return (
    <Menu
      styles={styles}
      customBurgerIcon={<FaBars />}
      customCrossIcon={<FaTimes />}
      right
      htmlClassName={'no-scroll'}
      bodyClassName={'no-scroll'}
      width={300}
    >
      <div>
        <div className={classes.section}>
          <div className={classes.spacer}>
            <ListItem
              to="/#product"
              text="Product"
              color="contrasting"
              icon={<FaMedal />}
            />
          </div>

          <div className={classes.spacer}>
            <ListItem
              to="/#solutions"
              text="Solutions"
              color="contrasting"
              icon={<FaMedkit />}
            />
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.spacer}>
            <ListItem
              to="/backstage/plugins/"
              text="Backstage Plugins"
              color="contrasting"
              icon={<FaPlug />}
            />
          </div>

          <div className={classes.spacer}>
            <ListItem
              to="/backstage-weekly/"
              text="Backstage Weekly"
              color="contrasting"
              icon={<FaNewspaper />}
            />
          </div>

          <div className={classes.spacer}>
            <ListItem to="/blog/" text="Blog" color="contrasting" icon={<FaBlog />} />
          </div>

          <div className={classes.spacer}>
            <ListItem
              to="/case-studies/"
              text="Case Studies"
              color="contrasting"
              icon={<FaMagic />}
            />
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.spacer}>
            <ListItem
              to="https://careers.roadie.io"
              text="Careers"
              color="contrasting"
              icon={<FaBriefcase />}
            />
          </div>

          <div className={classes.spacer}>
            <ListItem
              to="/docs/getting-started/getting-started-for-admins/"
              text="Documentation"
              color="contrasting"
              icon={<FaGraduationCap />}
            />
          </div>
        </div>
      </div>

      <div>
        <div className={classes.spacer}>
          <IconLink to={TWITTER_URL} text="Twitter" color="contrasting">
            <FaTwitter />
          </IconLink>

          <span className={classes.iconSpacer}>
            <IconLink to={GITHUB_URL} text="GitHub" color="contrasting">
              <FaGithub />
            </IconLink>
          </span>

          <span className={classes.iconSpacer}>
            <IconLink to="https://discord.gg/W3qEMhmx4f" text="Discord" color="contrasting">
              <FaDiscord />
            </IconLink>
          </span>

          <span className={classes.iconSpacer}>
            <IconLink to="https://backstage.io" text="Backstage" color="contrasting">
              <BackstageLogo color="light" />
            </IconLink>
          </span>
        </div>

        <div className={classes.legalLinks}>
          <div className={classes.legalSpacer}>
            {/* This link will work in production but not in development. Netlify does the 301. */}
            <TextLink
              to="/legal-notices/terms-of-service/"
              text="Legal"
              color="contrasting"
              className={classes.textLink}
            />
          </div>

          <div className={classes.spacer}>
            <TextLink
              to="/legal-notices/privacy-policy/"
              text="Privacy"
              color="contrasting"
              className={classes.textLink}
            />
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default HamburgerMenu;
