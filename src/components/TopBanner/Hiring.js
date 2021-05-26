import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'components';

const useStyles = createUseStyles((theme) => ({
  highlight: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.bold.fontWeight,
  },

  link: {
    color: 'white',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Hiring = () => {
  const classes = useStyles();
  return (
    <Link to="https://careers.roadie.io/o/open-source-software-engineer" className={classes.link}>
      <span className={classes.highlight}>We&apos;re hiring! </span>
      <span>Become a Backstage contributor</span>
    </Link>
  );
};

export default Hiring;
