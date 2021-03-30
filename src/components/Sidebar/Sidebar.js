import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {},
  inner: {},

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      minWidth: 250,
      borderRight: `1px solid ${theme.palette.grey[300]}`,
      paddingTop: 32,
      position: 'sticky',
      top: 0,
      // Supports scrolling inside the sidebar if the content is very long. Simply pass in
      // an override class with overflowY: 'auto' to enable.
      height: '100vh',
    },

    inner: {
      height: '100vh',
    },
  },
}));

const Sidebar = ({ children, className }) => {
  const classes = useStyles();

  return (
    <aside className={classnames(classes.root, className)}>
      <div className={classes.inner}>
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
