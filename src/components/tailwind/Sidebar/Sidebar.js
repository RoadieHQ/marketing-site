import React from 'react';
import classnames from 'classnames';

const ROOT_STYLES = 'md:w-72 border-gray-100 md:pt-5 md:h-screen';

const Sidebar = ({ children, className, side = 'left', sticky = false }) => (
  <aside className={classnames(ROOT_STYLES, {
    'md:border-r-2': side === 'left',
    'md:border-l-2': side === 'right',
    'md:sticky md:top-0': sticky,
  }, className)}>
    <div className="md:h-screen">
      {children}
    </div>
  </aside>
);

export default Sidebar;
