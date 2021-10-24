import React from 'react';
import classnames from 'classnames';

const ROOT_CLASSES = 'text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl';

const Headline = ({ el = 'h1', children, className }) => (
  React.createElement(el, { className: classnames(ROOT_CLASSES, className) }, children)
);

export default Headline;
