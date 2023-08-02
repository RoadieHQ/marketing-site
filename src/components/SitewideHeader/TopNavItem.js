import React from 'react';
import { Link } from 'components';

const TopNavItem = ({ to, text }) => (
  <Link to={to} className="Text size-3 weight-2 string">
    {text}
  </Link>
);

export default TopNavItem;
