import React from 'react';
import { FaBars, FaTimes, FaTwitter, FaGithub, FaSpotify } from 'react-icons/fa';
import Menu from 'react-burger-menu/lib/menus/slide';
import { createUseStyles } from 'react-jss';

import IconLink from '../IconLink';
import TextLink from './TextLink';

const styles = {
  bmBurgerButton: {
    // Removing the position prop will cause the burger to fill the whole screen.
    position: 'relative',
    // The hamburger menu tends to sit too close to the scrollbar on mobile if we don't apply
    // some padding. It can be difficult to tap when the scrollbar is in the way.
    padding: 8,
  },

  bmCrossButton: {
    color: 'white',
    // Trying to get the close button into the exact same spot as the open button.
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
    padding: '0.8em',
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

  spacer: {
    marginBottom: 16,
  },

  iconSpacer: {
    marginLeft: 16,
  },

  textLink: {
    // Make the links easier to click.
    display: 'block',
  },
}));

const HamburgerMenu = () => {
  const classes = useStyles();

  return (
    <Menu
      styles={styles}
      customBurgerIcon={<FaBars />}
      customCrossIcon={<FaTimes />}
      right
      htmlClassName={'no-scroll'}
      bodyClassName={'no-scroll'}
      width={250}
    >
      <div>
        <div className={classes.spacer}>
          <TextLink
            to="/backstage/plugins"
            text="Backstage Plugins"
            color="contrasting"
            className={classes.textLink}
          />
        </div>

        <div className={classes.spacer}>
          <TextLink to="/careers" text="Careers" color="contrasting" className={classes.textLink} />
        </div>

        <div className={classes.spacer}>
          <TextLink to="/blog" text="Blog" color="contrasting" className={classes.textLink} />
        </div>
      </div>

      <div>
        <div className={classes.spacer}>
          <IconLink to="https://twitter.com/RoadieHQ" text="Twitter" color="contrasting">
            <FaTwitter />
          </IconLink>

          <span className={classes.iconSpacer}>
            <IconLink to="https://github.com/RoadieHQ" text="GitHub" color="contrasting">
              <FaGithub />
            </IconLink>
          </span>

          <span className={classes.iconSpacer}>
            <IconLink to="https://backstage.io" text="Backstage" color="contrasting">
              <FaSpotify />
            </IconLink>
          </span>
        </div>

        <div>
          <div className={classes.spacer}>
            <TextLink
              to="/terms"
              text="Terms of service"
              color="contrasting"
              className={classes.textLink}
            />
          </div>

          <div className={classes.spacer}>
            <TextLink
              to="/privacy"
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
