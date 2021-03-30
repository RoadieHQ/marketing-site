import React from 'react';
import { createUseStyles } from 'react-jss';

import SidebarItem from './SidebarItem';

const useStyles = createUseStyles((theme) => ({
  root: {},
  inner: {},

  section: {
    marginBottom: 32,
  },

  ul: {
    listStyle: 'none',
    padding: 0,
  },

  spacer: {
    marginBottom: '1em',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      minWidth: 250,
      borderRight: `1px solid ${theme.palette.grey[300]}`,
    },

    inner: {
      paddingTop: 32,
      position: 'sticky',
      top: 0,
    },
  },
}));

const DocSidebar = () => {
  const classes = useStyles();

  return (
    <aside className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.section}>
          <strong>Legal Notices</strong>
        </div>

        <div className={classes.section}>
          <ul className={classes.ul}>
            <SidebarItem
              to="/legal-notices/terms-of-service/"
              text="Terms of Service & DPA"
            />

            <SidebarItem
              to="/legal-notices/sub-processors/"
              text="List of Sub-Processors"
            />

            <SidebarItem
              to="/legal-notices/privacy-policy/"
              text="Privacy Policy"
            />

            <SidebarItem
              to="/legal-notices/cookies-policy/"
              text="Cookies Policy"
            />

            <SidebarItem
              to="/legal-notices/acceptable-use-policy/"
              text="Acceptable Use Policy"
            />
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default DocSidebar;
