import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'components';

const useStyles = createUseStyles((theme) => ({
  link: {
    color: theme.palette.primary.main,

    '&:visited': {
      color: theme.palette.primary.main,
    },
  },
}));

const Attribution = ({ attribution }) => {
  const classes = useStyles();
  if (!attribution) return null;

  if (!attribution.href || attribution.href === '') {
    return <div>by {attribution.text}</div>;
  }

  return (
    <div>
      by{' '}
      <Link to={attribution.href} className={classes.link}>
        {attribution.text}
      </Link>
    </div>
  );
};

export default Attribution;
