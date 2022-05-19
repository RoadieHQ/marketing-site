import React from 'react';
import classnames from 'classnames';

import Sidebar from './Sidebar';
import { SidebarSection } from './Section';

const NestedTableOfContentsSidebar = ({ tableOfContents, className }) => {
  return (
    <Sidebar
      side="right"
      sticky={true}
      className={classnames('hidden xl:block md:w-96 lg:w-3/12 pr-3', className)}
    >
      <SidebarSection>
        <strong>Table of Contents</strong>
      </SidebarSection>

      <SidebarSection >
        <div
          className="table-of-contents-sidebar"
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
      </SidebarSection>
    </Sidebar>
  );
};

export default NestedTableOfContentsSidebar;
