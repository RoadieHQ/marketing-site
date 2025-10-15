import React from 'react';
import classnames from 'classnames';

const textColor = ({ hasError, color }) => {
  if (hasError) return 'text-primary-700';
  if (color === 'secondary') return 'text-gray-200';
  return 'text-gray-600';
};

const HelpText = ({ className, state, message, color = 'primary' }) => {
  const hasError = state === 'error';
  const rootClassName = classnames(`text-sm ${textColor({ hasError, color })}`, className);
  return <div className={rootClassName}>{message}</div>;
};

export default HelpText;
