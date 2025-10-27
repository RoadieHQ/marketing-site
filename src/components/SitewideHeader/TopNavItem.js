import React from 'react';
import { Link } from 'components';

const TopNavItem = ({ to, text }) => (
  <Link to={to} className="text-base font-bold text-blueroadie dark:text-gray-200 tracking-wide hover:text-blueroadie dark:hover:text-white">
    {text}
  </Link>
);

export default TopNavItem;
