import React from 'react';
import classnames from 'classnames';

const Headline = ({ children, className }) => (
  <h1 className={classnames('text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl', className)}>
    {children}
  </h1>
);

export default Headline;
