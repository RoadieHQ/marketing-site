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

const DocSidebar = ({ location }) => {
  const classes = useStyles();

  return (
    <aside className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.section}>
          <strong>Documentation</strong>
        </div>

        <div className={classes.section}>
          <p>Getting started</p>

          <ul className={classes.ul}>
            <SidebarItem
              to="/docs/getting-started/getting-started-for-admins/"
              text="First 30 minutes"
              location={location}
            />

            <SidebarItem
              to="/docs/getting-started/technical-documentation/"
              text="Using TechDocs"
              location={location}
            />

            <SidebarItem
              to="/docs/getting-started/openapi-specs/"
              text="Using OpenAPI specs"
              location={location}
            />
          </ul>
        </div>

        <div className={classes.section}>
          <p>Integrations</p>

          <ul className={classes.ul}>
            <SidebarItem
              to="/docs/integrations/github-token/"
              text="GitHub via Token"
              location={location}
            />
            <SidebarItem
              to="/docs/integrations/github-client/"
              text="GitHub via Oauth"
              location={location}
            />
            <SidebarItem to="/docs/integrations/sentry/" text="Sentry" location={location} />
            <SidebarItem to="/docs/integrations/circleci/" text="CircleCI" location={location} />
            <SidebarItem to="/docs/integrations/jira/" text="Jira" location={location} />
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default DocSidebar;
