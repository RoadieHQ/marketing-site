import React from 'react';
import classnames from 'classnames';

const Sidebar = ({ children, className, side = 'left', sticky = false }) => (
  <aside
    className={classnames(className, 'border-gray-100 overflow-y-scroll', {
      'md:border-r-2': side === 'left',
      'md:border-l-2': side === 'right',
    })}
  >
    <div className={classnames({ 'md:sticky md:top-0 md:pt-4': sticky })}>{children}</div>
  </aside>
);

export default Sidebar;
