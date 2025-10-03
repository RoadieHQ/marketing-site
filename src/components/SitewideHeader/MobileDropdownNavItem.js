import React from 'react';
import classnames from 'classnames';
import { Link } from 'components';

const MobileDropdownNavItem = ({ item, isActive }) => (
  <Link
    key={item.name}
    to={item.to}
    className="-m-3 p-2 pl-3 flex items-center rounded-md hover:bg-gray-50"
  >
    {item.icon && (
      <item.icon className="flex-shrink-0 h-6 w-6 text-primary-600 mr-3" aria-hidden="true" />
    )}

    <span
      className={classnames('text-base font-medium', {
        'text-gray-900': !isActive,
        'text-primary-600': isActive,
      })}
    >
      {item.name}
    </span>
  </Link>
);

export default MobileDropdownNavItem;
