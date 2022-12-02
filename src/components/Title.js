import React from 'react';
import classNames from 'classnames';

const Title = ({
  text,
  children,
  id,
  el = 'h2',
}) => {
  const inner = text ? text : children;
  return React.createElement(el, { className: 'font-highlight mb-0 text-2xl font-bold tracking-tight', id }, inner);
};

export default Title;