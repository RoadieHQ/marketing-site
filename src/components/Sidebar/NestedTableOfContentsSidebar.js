import React from 'react';
import classnames from 'classnames';

import Sidebar from './Sidebar';
import { SidebarSection } from './Section';
import { Parser } from "html-to-react"

const NestedTableOfContentsSidebar = ({ tableOfContents, className }) => {
  const htmlToReactParser = new Parser();

  const reactComponents = htmlToReactParser.parse(tableOfContents);
  return (
    <Sidebar
      side="right"
      sticky={true}
      className={classnames('hidden xl:block md:w-96 pr-3', className)}
    >
      <SidebarSection>
        <strong>Table of Contents</strong>
      </SidebarSection>

      <SidebarSection>
      {reactComponents}
      </SidebarSection>
    </Sidebar>
  );
};

export default NestedTableOfContentsSidebar;
