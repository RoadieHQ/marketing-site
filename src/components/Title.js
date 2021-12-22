import React from 'react';

const Title = ({
  text,
  children,
  el = 'h2',
  ...rest
}) => {
  const inner = text ? text : children;
  return React.createElement(el, { className: 'mb-0 text-2xl font-bold dark:text-white', ...rest }, inner);
};

export default Title;
