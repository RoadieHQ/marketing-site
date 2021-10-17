import React from 'react';
import classnames from 'classnames';

const InterstitialTitle = ({
  text,
  children,
  id,
  size = 'medium',
  className = {},
}) => {
  const inner = text ? text : children;
  const h2ClassName = classnames('mb-0', {
    'text-xl': size === 'small',
    'text-2xl font-bold': size === 'medium',
    'text-4xl font-extrabold': size === 'large',
  }, className.h2);

  return (
    <div className={classnames('text-center pb-3', className.root)} id={id}>
      <h2 className={h2ClassName}>{inner}</h2>
    </div>
  );
};

export default InterstitialTitle;
