import React from 'react';
import { Link } from 'components';
import classnames from 'classnames';

const TextLink = ({ to, text, color, className, children, ...rest }) => {
  const rootClassList = classnames(
    'no-underline outline-none text-gray-500 hover:text-primary-600 visited:text-gray-500 py-4',
    {
      'text-primary-600 hover:text-primary-700 visited:text-primary-700': color === 'primary',
      'text-gray-100 hover:text-primary-100 visited:text-primary-100': color === 'contrasting',
    },
    'yolo',
    className
  );
  const activeStyle = {
    backgroundColor: 'rgb(234 88 12 / 10%)',
    borderLeft: '2px solid rgb(234 88 12)',
    color: 'rgb(234 88 12)',
  };

  const inner = text || children;

  return (
    <Link to={to} activeStyle={activeStyle} className={rootClassList} {...rest}>
      {inner}
    </Link>
  );
};

export default TextLink;
