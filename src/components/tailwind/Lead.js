import React from 'react';
import classnames from 'classnames';

const Lead = ({ className, children }) => (
  <p className={classnames('text-base text-gray-500 sm:text-lg md:text-xl', className)}>
    {children}
  </p>
);

export default Lead;
