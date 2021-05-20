import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'components';
import classnames from 'classnames';

const useStyles = createUseStyles((theme) => ({
  root: {
    color: ({ color }) => {
      if (color === 'contrasting') {
        return theme.palette.text.secondaryLight;
      } else if (color === 'primary') {
        return theme.palette.primary.main;
      }

      return theme.palette.text.secondary;
    },
    textDecoration: 'none',
    outline: 'none',

    '&:hover': {
      textDecoration: 'underline',
      color: ({ color }) => {
        if (color === 'contrasting') {
          return theme.palette.text.primaryLight;
        } else if (color === 'primary') {
          return theme.palette.primary.main;
        }

        return theme.palette.text.primary;
      },
    },

    '&visited': {
      color: ({ color }) => {
        if (color === 'contrasting') {
          return theme.palette.text.primaryLight;
        } else if (color === 'primary') {
          return theme.palette.primary.main;
        }

        return theme.palette.text.primary;
      },
    },
  },
}));

const TextLink = ({ to, text, color, className, children, ...rest }) => {
  const classes = useStyles({ color });
  const rootClassList = classnames(classes.root, className);
  const inner = text || children;

  return (
    <Link to={to} className={rootClassList} {...rest}>
      {inner}
    </Link>
  );
};

export default TextLink;
