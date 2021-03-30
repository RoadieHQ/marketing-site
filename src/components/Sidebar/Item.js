import React from 'react';
import { createUseStyles } from 'react-jss';

import Link from '../TextLink';

const useStyles = createUseStyles((theme) => ({
  link: {
    paddingLeft: '0.5em',
    paddingTop: '0.2em',
    paddingBottom: '0.2em',
    display: 'block',
  },

  currentLink: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.grey[200],
  },
}));

const SidebarItem = ({ to, text, partiallyActive }) => {
  const classes = useStyles();

  return (
    <li>
      <Link
        to={to}
        className={classes.link}
        activeClassName={classes.currentLink}
        partiallyActive={partiallyActive}
      >
        {text}
      </Link>
    </li>
  );
};

export default SidebarItem;
