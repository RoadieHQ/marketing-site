import React from 'react';
import { createUseStyles } from 'react-jss';
import {
  FaCaretDown,
  FaPlug,
  FaBlog,
  FaMagic,
  FaTwitter,
  FaGithub,
  FaGraduationCap,
  FaDiscord,
} from 'react-icons/fa';

import IconLink from '../IconLink';
import NavItemSpacer from './NavItemSpacer';
import BackstageLogo from './BackstageLogo';
import ListItem from './ListItemLink';

const useStyles = createUseStyles((theme) => ({
  root: {
    overflow: 'hidden',
    position: 'relative',

    '&:hover $triggerWrapper': {
      color: theme.palette.text.primary,
      textDecoration: 'underline',
    },

    '&:hover $content': {
      opacity: 1,
      transform: 'rotateX(0) translateX(-30%)',
      visibility: 'visible',
    },
  },

  iconPostfix: {
    // Get the icon to line up with the text.
    verticalAlign: 'middle',
    marginLeft: 4,
  },

  triggerWrapper: {
    color: theme.palette.text.secondary,
    // Clear the native button styles.
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontSize: '1.6rem',
  },

  divider: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    marginTop: 4,
    marginBottom: 8,
  },

  // The following blog post was very helpful when attempting to create an accessible,
  // animated and reliable (almost) CSS-only dropdown.
  // https://moderncss.dev/css-only-accessible-dropdown-navigation-menu/
  content: {
    position: 'absolute',
    background: 'white',
    boxShadow: `0px 8px 16px 0px ${theme.palette.grey[300]}`,
    minWidth: '30ch',
    // Use the left from absolute position to shift the left side
    left: '50%',
    // Use translateX to shift the menu 50% of it's width back to the left
    // RotateX helps to hide the dropdown without using display none.
    transform: 'rotateX(-90deg) translateX(-30%)',
    padding: 16,
    border: `1px solid ${theme.palette.grey[300]}`,
    // Without this I found that other elements (images specifically) would appear in front
    // of the open dropdown.
    zIndex: 1,
    transformOrigin: 'top center',
    opacity: 0.3,
    // Animate opening the dropdown.
    transition: '280ms all 120ms ease-out',
    visibility: 'hidden',
  },

  // https://css-tricks.com/a-complete-guide-to-links-and-buttons/#icon-only-links
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
  },
}));

const DropdownMenuItem = ({ title, siteMetadata }) => {
  const classes = useStyles();

  const TWITTER_URL = `https://twitter.com/${siteMetadata.social.twitter}`;
  const GITHUB_URL = `https://github.com/${siteMetadata.social.github}`;

  return (
    <span className={classes.root}>
      <button
        className={classes.triggerWrapper}
        type="button"
        aria-expanded={false}
        aria-controls="resources-dropdown"
      >
        <span>{title}</span>
        <span className={classes.iconPostfix}><FaCaretDown /></span>
      </button>

      <div className={classes.content} id="resources-dropdown">
        <ListItem to="/backstage/plugins/" icon={<FaPlug />} text="Backstage Plugins" />
        <ListItem to="/blog/" icon={<FaBlog />} text="Blog" />
        <ListItem to="/case-studies/" icon={<FaMagic />} text="Case Studies" />
        <ListItem
          to="/docs/getting-started/getting-started-for-admins/"
          text="Documentation"
          icon={<FaGraduationCap />}
        />

        <ListItem
          to="https://discord.gg/W3qEMhmx4f"
          text="Chat with us on Discord"
          icon={<FaDiscord />}
        />

        <div className={classes.divider} />

        <div className={classes.contentItem}>
          <IconLink to={TWITTER_URL}>
            <FaTwitter aria-hidden={true} focusable={false} />
              <span className={classes.visuallyHidden}>Visit Roadie on Twitter</span>
          </IconLink>

          <NavItemSpacer>
            <IconLink to={GITHUB_URL}>
              <FaGithub aria-hidden={true} focusable={false} />
              <span className={classes.visuallyHidden}>Visit Roadie on GitHub</span>
            </IconLink>
          </NavItemSpacer>

          <NavItemSpacer>
            <IconLink to="https://backstage.io">
              <BackstageLogo aria-hidden={true} focusable={false} />
              <span className={classes.visuallyHidden}>Visit the official Backstage site</span>
            </IconLink>
          </NavItemSpacer>
        </div>
      </div>
    </span>
  );
};

export default DropdownMenuItem;
