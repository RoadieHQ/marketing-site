import classNames from 'classnames';
import React from 'react';

const Title = ({ text, children, id, el = 'h2', className }) => {
  const inner = text ? text : children;
  return React.createElement(
    el,
    {
      className: classNames(className, 'font-highlight mb-0 text-2xl font-bold tracking-tight'),
      id,
    },
    inner
  );
};

export default Title;
