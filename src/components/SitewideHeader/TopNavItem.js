import React from 'react';
import { Link } from 'components';

const TopNavItem = ({ to, text }) => (
  <Link to={to} className="text-base font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
    {text}
  </Link>
);

export default TopNavItem;
