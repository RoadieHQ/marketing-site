import React from 'react';
import classnames from 'classnames';

import Sidebar from './Sidebar';
import { SidebarSection } from './Section';

const numberOfContentsItems = (tableOfContents) => (tableOfContents.match(/<li>/g) || []).length;

// This allows the sidebar to scroll without scrolling the whole page. No idea how it works.
// https://stackoverflow.com/a/13337664/574190
const sidebarInternalHeight = {
  height: 'calc(100vh - 9rem)',
};

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

      <div className="mb-7 pl-3 overflow-y-scroll" style={sidebarInternalHeight}>
        {/* There is a CSS stylesheet that targets this class name */}
        <div
          className="table-of-contents-sidebar"
          dangerouslySetInnerHTML={{ __html: tableOfContents }}
        />
      </div>
    </Sidebar>
  );
};

export default NestedTableOfContentsSidebar;
