import React from 'react';
import classnames from 'classnames';

const HelpText = ({ className, state, message }) => {
  const rootClassName = classnames('Text size-3', {
    'lowContrast': !state || state === '',
    'red': state === 'error',
  }, className);

  return (
    <div className={rootClassName}>
      {message}
    </div>
  );
};

export default HelpText;
