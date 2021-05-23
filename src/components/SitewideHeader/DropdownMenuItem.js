import React from 'react';
import { createUseStyles } from 'react-jss';
import {
  FaCaretDown,
  FaPlug,
  FaNewspaper,
  FaBlog,
  FaMagic,
  FaTwitter,
  FaGithub,
  FaGraduationCap,
} from 'react-icons/fa';
import { TextLink } from 'components';

import IconLink from '../IconLink';
import NavItemSpacer from './NavItemSpacer';
import BackstageLogo from './BackstageLogo';

const useStyles = createUseStyles((theme) => ({
  root: {
    overflow: 'hidden',

    '&:hover $triggerWrapper': {
      color: theme.palette.text.primary,
      textDecoration: 'underline',
    },

    '&:hover $content': {
      display: 'block',
    },
  },

  iconPostfix: {
    // Get the icon to line up with the text.
    verticalAlign: 'middle',
    marginLeft: 4,
  },

  iconPrefix: {
    verticalAlign: 'middle',
    marginRight: 16,
  },

  triggerWrapper: {
    color: theme.palette.text.secondary,
  },

  divider: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    marginTop: 4,
    marginBottom: 8,
  },

  content: {
    display: 'none',
    position: 'absolute',
    background: 'white',
    boxShadow: `0px 8px 16px 0px ${theme.palette.grey[300]}`,
    marginLeft: 32,
    padding: 16,
    border: `1px solid ${theme.palette.grey[300]}`,
    zIndex: 1,
  },

  contentItem: {
    display: 'block',
    padding: 8,
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

const ListItem = ({ icon, text, to }) => {
  const classes = useStyles();
  return (
    <TextLink to={to} className={classes.contentItem}>
      <span className={classes.iconPrefix}>{icon}</span>
      <span>{text}</span>
    </TextLink>
  );
};

const DropdownMenuItem = ({ title, siteMetadata }) => {
  const classes = useStyles();

  const TWITTER_URL = `https://twitter.com/${siteMetadata.social.twitter}`;
  const GITHUB_URL = `https://github.com/${siteMetadata.social.github}`;

  return (
    <span className={classes.root}>
      <span className={classes.triggerWrapper}>
        <span>{title}</span>
        <span className={classes.iconPostfix}><FaCaretDown /></span>
      </span>
      <div className={classes.content}>
        <ListItem to="/backstage/plugins/" icon={<FaPlug />} text="Backstage Plugins" />
        <ListItem
          to="/backstage-weekly/"
          icon={<FaNewspaper />}
          text="Backstage Weekly Newsletter"
        />
        <ListItem to="/blog/" icon={<FaBlog />} text="Blog" />
        <ListItem to="/case-studies/" icon={<FaMagic />} text="Case Studies" />
        <ListItem
          to="/docs/getting-started/getting-started-for-admins/"
          text="Documentation"
          icon={<FaGraduationCap />}
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
