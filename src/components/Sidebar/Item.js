import React from 'react';
import Link from 'components/TextLink';

const SidebarItem = ({ to, text, partiallyActive }) => (
  <li>
    <Link
      to={to}
      className="pl-3 py-1 block"
      activeClassName="bg-gray-300 text-primary-700 dark:text-gray-900"
      partiallyActive={partiallyActive}
    >
      {text}
    </Link>
  </li>
);

export default SidebarItem;
