import React from 'react';
import Sidebar, { SidebarSection, SidebarSectionList } from 'components/Sidebar';

import SidebarItem from './SidebarItem';

const LegalNoticeSidebar = () => {
  return (
    <Sidebar>
      <SidebarSection>
        <strong>Legal Notices</strong>
      </SidebarSection>

      <SidebarSectionList>
        <SidebarItem to="/legal-notices/terms-of-service/" text="Terms of Service & DPA" />
        <SidebarItem to="/legal-notices/sub-processors/" text="List of Sub-Processors" />
        <SidebarItem to="/legal-notices/privacy-policy/" text="Privacy Policy" />
        <SidebarItem to="/legal-notices/cookies-policy/" text="Cookies Policy" />
        <SidebarItem to="/legal-notices/acceptable-use-policy/" text="Acceptable Use Policy" />
      </SidebarSectionList>
    </Sidebar>
  );
};

export default LegalNoticeSidebar;
