import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {
    color: ({ color }) =>
      color === 'contrasting' ? theme.palette.text.secondaryLight : theme.palette.text.secondary,
    textDecoration: 'none',
    outline: 'none',

    '&:hover': {
      textDecoration: 'underline',
      color: ({ color }) =>
        color === 'contrasting' ? theme.palette.text.primaryLight : theme.palette.text.primary,
    },
  },
}));

const TextLink = ({ to, text, color, className }) => {
  const classes = useStyles({ color });
  const rootClassList = classnames('typography-body', classes.root, className);

  if (to.startsWith('/')) {
    return (
      <Link to={to} className={rootClassList}>
        {text}
      </Link>
    );
  }

  return (
    <a href={to} className={rootClassList} target="_blank" rel="noreferrer noopener">
      {text}
    </a>
  );
};

export default TextLink;
