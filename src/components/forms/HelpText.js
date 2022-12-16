import React from 'react';
import classnames from 'classnames';

const HelpText = ({ className, state, message }) => {
  const rootClassName = classnames('text-gray-600 text-sm', {
    'color-orange-700': state === 'error',
  }, className);

  return (
    <div className={rootClassName}>
      {message}
    </div>
  );
};

export default HelpText;
