import React from 'react';
import classnames from 'classnames';

const ROOT_CLASSES = 'tracking-tight font-extrabold text-gray-900 dark:text-white';

const Headline = ({
  el = 'h1',
  children,
  size = 'large',
  className,
  ...rest
}) => (
  React.createElement(el, {
    className: classnames(ROOT_CLASSES, {
      'text-4xl sm:text-5xl md:text-6xl': size === 'large',
      'text-3xl sm:text-4xl md:text-5xl': size === 'medium',
      'text-2xl sm:text-3xl md:text-4xl': size === 'small',
    }, className),
    ...rest,
  }, children)
);

export default Headline;
