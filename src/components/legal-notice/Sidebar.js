import React from 'react';
import { createUseStyles } from 'react-jss';

import SidebarItem from './SidebarItem';

const useStyles = createUseStyles((theme) => ({
  root: {
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    paddingTop: 32,
  },

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
    },
  },
}));

const DocSidebar = ({ location }) => {
  const classes = useStyles();

  return (
    <aside className={classes.root}>
      <div className={classes.section}>
        <strong>Legal Notices</strong>
      </div>

      <div className={classes.section}>
        <ul className={classes.ul}>
          <SidebarItem
            to="/legal-notices/website-terms/"
            text="Website Terms of Use"
            location={location}
          />

          <SidebarItem
            to="/legal-notices/sub-processors/"
            text="List of Sub-Processors"
            location={location}
          />

          <SidebarItem
            to="/legal-notices/privacy-policy/"
            text="Privacy Policy"
            location={location}
          />

          <SidebarItem
            to="/legal-notices/cookies-policy/"
            text="Cookies Policy"
            location={location}
          />

          <SidebarItem
            to="/legal-notices/acceptable-use-policy/"
            location={location}
            text="Acceptable Use Policy"
          />
        </ul>
      </div>
    </aside>
  );
};

export default DocSidebar;
