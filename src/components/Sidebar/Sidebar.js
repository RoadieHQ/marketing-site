import React from 'react';
import classnames from 'classnames';

const Sidebar = ({ children, className, side = 'left', sticky = false }) => (
  <aside
    className={
      classnames('md:w-72 border-gray-100', {
        'md:border-r-2': side === 'left',
        'md:border-l-2': side === 'right',
        'md:sticky md:top-0 md:h-screen': sticky,
      }, className)
    }
  >
    {children}
  </aside>
);

export default Sidebar;
