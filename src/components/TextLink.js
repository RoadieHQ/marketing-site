import React from 'react';
import { Link } from 'components';
import classnames from 'classnames';

const TextLink = ({ to, text, color, className, children, ...rest }) => {
  const rootClassList = classnames(
    'no-underline outline-none text-gray-700 hover:text-primary-600 visited:text-gray-700',
    {
      'text-primary-600 hover:text-primary-700 visited:text-primary-700': color === 'primary',
      'text-gray-100 hover:text-primary-100 visited:text-primary-100': color === 'contrasting',
    },
    className
  );
  const inner = text || children;

  return (
    <Link to={to} className={rootClassList} {...rest}>
      {inner}
    </Link>
  );
};

export default TextLink;
