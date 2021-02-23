import React from 'react';
import { createUseStyles } from 'react-jss';

import Link from '../TextLink';

const isCurrentPage = ({ location, to }) => location.pathname === to;

const useStyles = createUseStyles((theme) => ({
  spacer: {
    paddingLeft: '0.5em',
    paddingTop: '0.2em',
    paddingBottom: '0.2em',
    backgroundColor: ({ location, to }) => {
      if (isCurrentPage({ location, to })) return theme.palette.grey[200];
      return 'inherit';
    },
  },

  currentLink: {
    color: ({ location, to }) => {
      if (isCurrentPage({ location, to })) return theme.palette.primary.main;
      return 'inherit';
    },
  },
}));

const SidebarItem = ({ to, text, location }) => {
  const classes = useStyles({ location, to });

  return (
    <li>
      <div className={classes.spacer}>
        <Link to={to} className={classes.currentLink}>
          {text}
        </Link>
      </div>
    </li>
  );
};

export default SidebarItem;
