import React from 'react';
import { createUseStyles } from 'react-jss';
import { TextLink } from 'components';

const useStyles = createUseStyles(() => ({
  iconPrefix: {
    verticalAlign: 'middle',
    marginRight: 16,
  },

  contentItem: {
    display: 'block',
    padding: 8,
  },
}));

const ListItemLink = ({ icon, text, to, ...props }) => {
  const classes = useStyles();
  return (
    <TextLink to={to} className={classes.contentItem} {...props}>
      <span className={classes.iconPrefix}>{icon}</span>
      <span>{text}</span>
    </TextLink>
  );
};

export default ListItemLink;
