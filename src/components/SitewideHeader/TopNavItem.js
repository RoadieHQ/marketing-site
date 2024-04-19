import React from 'react';
import { Link } from 'components';

const TopNavItem = ({ to, text }) => (
  <Link to={to} className="Link highContrast">
    <span className='Text size-3 string'>
      {text}
    </span>
  </Link>
);

export default TopNavItem;
