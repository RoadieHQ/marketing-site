import React from 'react';
import { Link } from 'components';

const TopNavItem = ({ to, text }) => (
  <Link to={to} className="text-base font-bold text-blueroadie tracking-wide hover:text-blueroadie">
    {text}
  </Link>
);

export default TopNavItem;
