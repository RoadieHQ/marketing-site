import React from 'react';
import Link from 'components/TextLink';
import classnames from 'classnames';

const SidebarItem = ({ text, className, ...rest }) => (
  <li>
    <Link
      className={classnames('py-1 block pr-8', className)}
      activeClassName="bg-gray-200 text-primary-700"
      {...rest}
    >
      {text}
    </Link>
  </li>
);

export default SidebarItem;
