import React from 'react';

const Title = ({
  text,
  children,
  id,
  el = 'h2',
}) => {
  const inner = text ? text : children;
  return React.createElement(el, { className: 'mb-0 text-2xl font-bold', id }, inner);
};

export default Title;
