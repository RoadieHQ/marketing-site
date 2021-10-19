import React from 'react'
import { Link } from 'components/tailwind';

const MobileDropdownNavItem = ({ item }) => (
  <Link
    key={item.name}
    to={item.to}
    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
  >
    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
  </Link>
);

export default MobileDropdownNavItem;
