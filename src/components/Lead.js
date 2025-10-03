import React from 'react';
import classnames from 'classnames';

const Lead = ({ className, children, size = 'medium', ...rest }) => {
  const rootClassName = classnames(
    'text-gray-600',
    {
      'text-base': size === 'small',
      'text-lg md:text-xl': size === 'medium',
    },
    className
  );

  return (
    <p className={rootClassName} {...rest}>
      {children}
    </p>
  );
};

export default Lead;
