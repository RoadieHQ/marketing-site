import React from 'react';
import { Sidebar, SidebarSection, SidebarSectionList, SidebarItem } from 'components/Sidebar';

const LegalNoticeSidebar = () => {
  return (
    <Sidebar>
      <SidebarSection>
        <strong>Legal Notices</strong>
      </SidebarSection>

      <SidebarSectionList>
        <SidebarItem
          to="/legal-notices/terms-of-service/"
          text="Terms of Service & DPA"
          partiallyActive={true}
        />
        <SidebarItem
          to="/legal-notices/sub-processors/"
          text="List of Sub-Processors"
          partiallyActive={true}
        />
        <SidebarItem
          to="/legal-notices/privacy-policy/"
          text="Privacy Policy"
          partiallyActive={true}
        />
        <SidebarItem
          to="/legal-notices/cookies-policy/"
          text="Cookies Policy"
          partiallyActive={true}
        />
        <SidebarItem
          to="/legal-notices/acceptable-use-policy/"
          text="Acceptable Use Policy"
          partiallyActive={true}
        />
      </SidebarSectionList>
    </Sidebar>
  );
};

export default LegalNoticeSidebar;
