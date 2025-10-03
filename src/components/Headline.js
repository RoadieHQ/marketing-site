import React from 'react';
import classnames from 'classnames';

const ROOT_CLASSES = 'font-highlight tracking-tighter font-bold';

const Headline = ({ el = 'h1', children, size = 'large', className, ...rest }) =>
  React.createElement(
    el,
    {
      className: classnames(
        ROOT_CLASSES,
        {
          'text-4xl sm:text-5xl md:text-6xl': size === 'large',
          'text-3xl sm:text-4xl md:text-4xl': size === 'medium',
          'text-2xl sm:text-3xl md:text-3xl': size === 'small',
          'text-xl sm:text-2xl md:text-2xl': size === 'xs',
        },
        className
      ),
      ...rest,
    },
    children
  );

export default Headline;
