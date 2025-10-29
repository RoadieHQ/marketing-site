import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
import classnames from 'classnames';

import SidebarItem from './Item';

const ExpandableSidebarItem = ({ text, subItems, location }) => {
  // Extract paths from subItems, handling both old string format and new object format
  const paths = subItems.map((item) => {
    const [[, pathOrConfig]] = Object.entries(item);
    // If it's an object with linkTo property, extract linkTo; otherwise use the value directly
    if (typeof pathOrConfig === 'object' && pathOrConfig !== null && 'linkTo' in pathOrConfig) {
      return pathOrConfig.linkTo;
    }
    return pathOrConfig;
  });

  const isOpenOnPageLoad = paths.includes(location.pathname);
  const [isOpen, setIsOpen] = useState(isOpenOnPageLoad);
  const subMenuButtonIcon = isOpen ? (
    <ChevronDownIcon className="h-4" />
  ) : (
    <ChevronRightIcon className="h-4" />
  );

  const toggleSubMenuOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const itemComponents = subItems.map((item) => {
    const [[text, pathOrConfig]] = Object.entries(item);

    // Handle new object format: { linkTo: string, external?: boolean }
    if (typeof pathOrConfig === 'object' && pathOrConfig !== null && 'linkTo' in pathOrConfig) {
      const { linkTo, external = false } = pathOrConfig;
      return <SidebarItem key={linkTo} text={text} to={linkTo} external={external} className="pl-10" />;
    }

    // Handle old string format: direct path string
    return <SidebarItem key={pathOrConfig} text={text} to={pathOrConfig} className="pl-10" />;
  });

  return (
    <li>
      <div>
        <button
          onClick={toggleSubMenuOpen}
          className="flex items-center text-gray-700 hover:text-primary-600 py-1 outline-none"
        >
          <span className="mr-1">{subMenuButtonIcon}</span>
          <span>{text}</span>
        </button>
      </div>
      <div className={classnames({ 'h-0 hidden': !isOpen, 'h-full': isOpen })}>
        <ul className="p-0 list-none">{itemComponents}</ul>
      </div>
    </li>
  );
};

export default ExpandableSidebarItem;
