import React from 'react';
import classnames from 'classnames';

const Lead = ({ className, children }) => (
  <p className={classnames('text-2xl md:text-3xl', className)}>
    {children}
  </p>
);

export default Lead;
