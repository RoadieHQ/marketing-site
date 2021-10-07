import React from 'react';
import classnames from 'classnames';

const Sidebar = ({ children, className }) => (
  <aside className={classnames('md:w-72 border-gray-100 md:border-r-2 md:pt-7 md:sticky md:top-0 md:h-screen', className)}>
    <div className="md:h-screen">
      {children}
    </div>
  </aside>
);

export default Sidebar;
