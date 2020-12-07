import React from 'react';
import classnames from 'classnames';
import Link from './Link';

import { useStyles } from './home/Button';

const ButtonLink = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Link className={classnames('typography-mono', classes.root)} {...props}>
      {children}
    </Link>
  );
};

export default ButtonLink;
