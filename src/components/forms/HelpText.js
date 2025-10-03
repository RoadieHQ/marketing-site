import React from 'react';
import classnames from 'classnames';

const HelpText = ({ className, state, message }) => {
  const rootClassName = classnames(
    'text-sm',
    {
      'text-gray-600': !state || state === '',
      'text-primary-700': state === 'error',
    },
    className
  );

  return <div className={rootClassName}>{message}</div>;
};

export default HelpText;
