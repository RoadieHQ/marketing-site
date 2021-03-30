import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {},
  inner: {},

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      minWidth: 220,
      borderRight: `1px solid ${theme.palette.grey[300]}`,
    },

    inner: {
      paddingTop: 32,
      position: 'sticky',
      top: 0,
    },
  },
}));

const Sidebar = ({ children }) => {
  const classes = useStyles();

  return (
    <aside className={classes.root}>
      <div className={classes.inner}>
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
export { SidebarSection, SidebarSectionList } from './Section';
export { default as SidebarItem } from './Item';
