import React from 'react';
import classnames from 'classnames';

const InterstitialTitle = ({
  text,
  children,
  id,
  className = {},
}) => {
  const inner = text ? text : children;

  return (
    <div className={classnames('text-center pb-3', className.root)} id={id}>
      <h2 className={classnames('mb-0 text-2xl font-bold', className.h2)}>{inner}</h2>
    </div>
  );
};

export default InterstitialTitle;
