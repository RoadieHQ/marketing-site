import React from 'react';
import classnames from 'classnames';

import { useStyles } from './home/Button';

const ButtonLink = ({ text = 'Go', ...props }) => {
  const classes = useStyles();

  return (
    <a className={classnames('typography-mono', classes.root)} {...props}>
      <span>{text}</span>
    </a>
  );
};

export default ButtonLink;
