import React from 'react';
import { createUseStyles } from 'react-jss';
import { FaCaretDown, FaPlug, FaNewspaper, FaBlog, FaMagic } from 'react-icons/fa';
import { TextLink } from 'components';

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

  content: {
    display: 'none',
    position: 'absolute',
    background: 'white',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    marginLeft: 32,
    padding: 16,
    border: '1px solid rgba(0,0,0,0.2)',
    zIndex: 1,
  },

  contentItem: {
    display: 'block',
    padding: 8,
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

const DropdownMenuItem = ({ title }) => {
  const classes = useStyles();

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
      </div>
    </span>
  );
};

export default DropdownMenuItem;
