import React from 'react';
import classnames from 'classnames';

import Sidebar from './Sidebar';
import { SidebarSection } from './Section';
import useScrollSpy from '../../hooks/useScrollSpy';
import Link from '../TextLink';

const TableOfContentsSidebar = ({ headings, className }) => {
  const activeSection = useScrollSpy({
    headings,
    offsetPx: -200,
  });

  // There's no point in showing the ToC if there are very few headings.
  if (!headings || headings.length < 2) return null;

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
        <ul className="p-0 list-none">
          {headings.map(({ value, id }, index) => {
            const isActive = activeSection === index;
            const className = classnames('block py-1', { 'text-primary-600': isActive });
            return (
              <li key={id}>
                <Link to={`#${id}`} className={className}>{value}</Link>
              </li>
            );
          })}
        </ul>
      </SidebarSection>
    </Sidebar>
  );
};

export default TableOfContentsSidebar;
