import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
import classnames from 'classnames';

import SidebarItem from './Item';

const ExpandableSidebarItem = ({ text, subItems, location }) => {
  const isOpenOnPageLoad = subItems.map(Object.values).flat().includes(location.pathname);
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
    const [[text, path]] = Object.entries(item);

    return <SidebarItem key={path} text={text} to={path} className="pl-10" />;
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
