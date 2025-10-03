import React, { useState, useEffect } from 'react';
import { Sidebar, SidebarSectionList } from 'components/Sidebar';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import Button from 'components/forms/Button';
import useMedia from 'react-use/lib/useMedia';
import classnames from 'classnames';

import theme from '../../theme';
import { DOCS_LAYOUTS } from 'components/doc';

const DocSidebar = ({ location }) => {
  const isWide = useMedia(`(min-width: ${theme.BREAKPOINTS_MD})`);
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    setOpen(isWide);
  }, [isWide]);

  const toggleSliderOpen = () => {
    // It should never be possible to hide the nav on big screens. The feature only makes
    // sense on mobile.
    if (isOpen && !isWide) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const docToggleButtonText = isOpen ? 'Hide nav' : 'Show nav';
  const docToggleButtonIcon = isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />;
  const docNavClassNames = classnames('overflow-y-hidden', { 'h-0': !isOpen, 'h-full': isOpen });

  const sidebarNavItemGroups = DOCS_LAYOUTS.find(({ isActiveMatch }) =>
    location.pathname.match(isActiveMatch)
  ).sidebarNavItemGroups;

  return (
    <Sidebar side="left">
      <div className="px-2 my-3 md:w-72">
        <div className="mb-1 flex justify-between items-center">
          <span className="inline md:hidden">
            <Button
              onClick={toggleSliderOpen}
              text={docToggleButtonText}
              prefixIcon={docToggleButtonIcon}
              color="inset"
              size="small"
            />
          </span>
        </div>
      </div>

      <nav className={docNavClassNames}>
        {sidebarNavItemGroups.map((_k, v) => {
          const [[sectionHeader, sectionItems]] = Object.entries(sidebarNavItemGroups[v]);

          return (
            <SidebarSectionList
              key={sectionHeader}
              title={sidebarNavItemGroups.length > 1 && sectionHeader}
              items={sectionItems}
              location={location}
            />
          );
        })}
      </nav>
    </Sidebar>
  );
};

export default DocSidebar;
