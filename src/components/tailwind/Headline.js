import React from 'react';
import classnames from 'classnames';

const Headline = ({ children, className }) => (
  <h1 className={classnames('text-6xl my-0 bold md:text-8xl', className)}>
    {children}
  </h1>
);

export default Headline;
