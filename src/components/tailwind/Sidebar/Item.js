import React from 'react';
import Link from 'components/tailwind/TextLink';

const SidebarItem = ({ to, text, partiallyActive }) => (
  <li>
    <Link
      to={to}
      className="pl-3 py-1 block"
      activeClassName="bg-gray-200 text-indigo-700"
      partiallyActive={partiallyActive}
    >
      {text}
    </Link>
  </li>
);

export default SidebarItem;
