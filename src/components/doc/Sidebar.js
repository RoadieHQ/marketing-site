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

const DocSidebar = () => {
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
              text="Configuring Roadie"
            />

            <SidebarItem to="/docs/getting-started/adding-components/" text="Adding components" />

            <SidebarItem
              to="/docs/getting-started/technical-documentation/"
              text="Using TechDocs"
            />

            <SidebarItem to="/docs/getting-started/openapi-specs/" text="Using OpenAPI specs" />
          </ul>
        </div>

        <div className={classes.section}>
          <p>Integrations</p>

          <ul className={classes.ul}>
            <SidebarItem to="/docs/integrations/github-token/" text="GitHub via Token" />
            <SidebarItem to="/docs/integrations/github-client/" text="GitHub via Oauth" />
            <SidebarItem to="/docs/integrations/github-org/" text="GitHub Teams" />
            <SidebarItem to="/docs/integrations/sentry/" text="Sentry" />
            <SidebarItem to="/docs/integrations/circleci/" text="CircleCI" />
            <SidebarItem to="/docs/integrations/jira/" text="Jira" />
            <SidebarItem to="/docs/integrations/gcp/" text="Google Cloud Platform" />
          </ul>
        </div>

        <div className={classes.section}>
          <p>Custom Plugins</p>

          <ul className={classes.ul}>
            <SidebarItem to="/docs/custom-plugins/" text="Installing Custom Plugins" />
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default DocSidebar;
