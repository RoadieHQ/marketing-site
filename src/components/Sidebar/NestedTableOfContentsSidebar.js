import React from 'react';
import classnames from 'classnames';

import Sidebar from './Sidebar';
import { SidebarSection } from './Section';

const numberOfContentsItems = (tableOfContents) => (
  (tableOfContents.match(/<li>/g) || []).length
);

const NestedTableOfContentsSidebar = ({ tableOfContents, className }) => {
  // There's no benefit to the ToC if it's very short.
  if (numberOfContentsItems(tableOfContents) < 3) {
    return null;
  }

  return (
    <Sidebar
      side="right"
      sticky={true}
      className={classnames('hidden xl:block md:w-96 lg:w-3/12 pr-3', className)}
    >
      <SidebarSection>
        <strong>Table of Contents</strong>
      </SidebarSection>

      <SidebarSection>
        {/* There is a CSS stylesheet that targets this class name */}
        <div
          className="table-of-contents-sidebar"
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
      </SidebarSection>
    </Sidebar>
  );
};

export default NestedTableOfContentsSidebar;
