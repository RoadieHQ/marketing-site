import React from 'react';
import classnames from 'classnames';

import Sidebar from './Sidebar';
import { SidebarSection, SidebarSectionList } from './Section';
import useScrollSpy from '../../../hooks/useScrollSpy';
import Link from '../TextLink';

const TableOfContentsSidebar = ({ headings, className }) => {
  const activeSection = useScrollSpy({
    headings,
    offsetPx: -200,
  });

  // There's no point in showing the ToC if there are very few headings.
  if (!headings || headings.length < 2) return null;

  return (
    <Sidebar className={classnames('hidden xl:block xl:pl-3 xl:max-w-md xl:border-l-2 border-gray-100', className)}>
      <SidebarSection>
        <strong>Table of Contents</strong>
      </SidebarSection>

      <SidebarSectionList>
        {headings.map(({ value, id }, index) => {
          const isActive = activeSection === index;
          const className = classnames('block py-1', { 'text-indigo-600': isActive });
          return (
            <li key={id}>
              <Link to={`#${id}`} className={className}>{value}</Link>
            </li>
          );
        })}
      </SidebarSectionList>
    </Sidebar>
  );
};

export default TableOfContentsSidebar;
