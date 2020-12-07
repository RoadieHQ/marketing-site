import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'components';
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
  const rootClassList = classnames(classes.root, className);
  return (
    <Link to={to} className={rootClassList}>
      {text}
    </Link>
  );
};

export default TextLink;
