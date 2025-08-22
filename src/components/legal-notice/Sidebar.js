import React from 'react';
import { Sidebar, SidebarSection, SidebarItem } from 'components/Sidebar';

const LegalNoticeSidebar = () => (
  <Sidebar sticky={true} side="left">
    <SidebarSection>
      <strong className="pl-3">Legal Notices</strong>
    </SidebarSection>

    <SidebarSection>
      <ul className="p-0 list-none">
        <SidebarItem
          to="/legal-notices/terms-of-service/"
          text="Terms of Service & DPA"
          partiallyActive={true}
          className="pl-5"
        />

        <SidebarItem
          to="/legal-notices/evaluation-licence/"
          text="Evaluation Licence"
          partiallyActive={true}
          className="pl-5"
        />

        <SidebarItem
          to="/legal-notices/sub-processors/"
          text="List of Sub-Processors"
          partiallyActive={true}
          className="pl-5"
        />

        <SidebarItem
          to="/legal-notices/privacy-notice/"
          text="Privacy Notice"
          partiallyActive={true}
          className="pl-5"
        />

        <SidebarItem
          to="/legal-notices/cookies-policy/"
          text="Cookies Policy"
          partiallyActive={true}
          className="pl-5"
        />

        <SidebarItem
          to="/legal-notices/acceptable-use-policy/"
          text="Acceptable Use Policy"
          partiallyActive={true}
          className="pl-5"
        />
      </ul>
    </SidebarSection>
  </Sidebar>
);

export default LegalNoticeSidebar;
