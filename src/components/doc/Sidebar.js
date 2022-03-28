import React, { useState, useEffect } from 'react';
import { Sidebar, SidebarSectionList, SidebarItem } from 'components/Sidebar';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import Button from 'components/forms/Button';
import useMedia from 'react-use/lib/useMedia';
import classnames from 'classnames';

import theme from '../../theme';
import sidebar from '../../../content/docs/docs-nav.yaml';

const DocSidebar = ({ location }) => {
  const isWide = useMedia(`(min-width: ${theme.BREAKPOINTS_MD})`);
  // const isWide = useMedia(`(min-width: ${fullTailwindConfig.theme.screens.md})`);
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

  console.log(sidebar);

  let sidebarNavItems = [];

  if (location.pathname.match(/getting-started/)[0]) {
    sidebarNavItems = [{ 'Getting started': sidebar.nav['Getting started'] }];
  } else if (location.pathname.match(/integrations/)[0]) {
    sidebarNavItems = [{
      'Adding Backtage Plugins': sidebar.nav['Adding Backstage plugins'],
    }, {
      'Custom Plugins': sidebar.nav['Custom Plugins'],
    }, {
      'Integrations': sidebar.nav['Integrations'],
    }];
  } else if (location.pathname.match(/details/)) {
    sidebarNavItems = [{
      'Details': sidebar.nav['Details'],
    }];
  }

  return (
    <Sidebar side="left">
      <div className="px-2 my-3">
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
        {
          sidebarNavItems.map((_k, v) => {
            const [[sectionHeader, sectionItems]] = Object.entries(sidebar.nav[v]);
            const items = sectionItems.map((item) => {
              const [[title, path]] = Object.entries(item);
              return <SidebarItem key={path} text={title} to={path} />;
            });

            return (
              <SidebarSectionList key={sectionHeader} title={sectionHeader}>
                {items}
              </SidebarSectionList>
            );
          })
        }
      </nav>
    </Sidebar>
  );
};

export default DocSidebar;
