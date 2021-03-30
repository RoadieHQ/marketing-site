import React from 'react';
import Sidebar, { SidebarSection, SidebarSectionList } from 'components/Sidebar';

import SidebarItem from './SidebarItem';

const DocSidebar = () => {
  return (
    <Sidebar>
      <SidebarSection>
        <strong>Documentation</strong>
      </SidebarSection>

      <SidebarSectionList title="Getting started">
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
      </SidebarSectionList>

      <SidebarSectionList title="Integrations">
        <SidebarItem to="/docs/integrations/github-token/" text="GitHub via Token" />
        <SidebarItem to="/docs/integrations/github-client/" text="GitHub via Oauth" />
        <SidebarItem to="/docs/integrations/github-org/" text="GitHub Teams" />
        <SidebarItem to="/docs/integrations/sentry/" text="Sentry" />
        <SidebarItem to="/docs/integrations/circleci/" text="CircleCI" />
        <SidebarItem to="/docs/integrations/jira/" text="Jira" />
        <SidebarItem to="/docs/integrations/gcp/" text="Google Cloud Platform" />
      </SidebarSectionList>

      <SidebarSectionList title="Custom plugins">
        <SidebarItem to="/docs/custom-plugins/" text="Installing Custom Plugins" />
      </SidebarSectionList>
    </Sidebar>
  );
};

export default DocSidebar;
