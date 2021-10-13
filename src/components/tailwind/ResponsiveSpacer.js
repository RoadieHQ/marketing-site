import React from 'react';
import classnames from 'classnames';

const ResponsiveSpacer = ({ children, className = {} }) => (
  <div className={classnames('pb-4 md:py-6', className.root)}>{children}</div>
);

export default ResponsiveSpacer;
