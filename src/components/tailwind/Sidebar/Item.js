import React from 'react';
import { TextLink as Link } from 'components';

const SidebarItem = ({ to, text, partiallyActive }) => (
  <li>
    <Link
      to={to}
      className="pl-3 pt-3 pb-3 block"
      activeClassName="bg-gray-200 text-indigo-700"
      partiallyActive={partiallyActive}
    >
      {text}
    </Link>
  </li>
);

export default SidebarItem;
