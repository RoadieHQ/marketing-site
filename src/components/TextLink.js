import React from 'react';
import { Link } from 'components';
import classnames from 'classnames';

const BASE_ROOT_CLASS_LIST =
  `no-underline outline-none text-gray-700 hover:text-primary-600 visited:text-gray-700 dark:text-gray-300 dark:visited:text-gray-300`;
const PRIMARY_ROOT_CLASS_LIST =
  `text-primary-600 hover:text-primary-700 visited:text-primary-700`;

const TextLink = ({
  to,
  text,
  color,
  className,
  children,
  ...rest
}) => {
  const rootClassList = classnames(
    BASE_ROOT_CLASS_LIST, {
      [PRIMARY_ROOT_CLASS_LIST]: color === 'primary',
  }, className);
  const inner = text || children;

  return (
    <Link to={to} className={rootClassList} {...rest}>
      {inner}
    </Link>
  );
};

export default TextLink;
