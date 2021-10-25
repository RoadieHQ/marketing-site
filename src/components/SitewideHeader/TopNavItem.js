import React from 'react';
import { Link } from 'components/tailwind';

const TopNavItem = ({ to, text }) => (
  <Link to={to} className="text-base font-medium text-gray-500 hover:text-gray-900">
    {text}
  </Link>
);

export default TopNavItem;
