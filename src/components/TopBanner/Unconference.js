import React from 'react';
import { createUseStyles } from 'react-jss';
import unconferenceLogo from '../../../content/assets/backstage-unconference.png';
import { Link } from 'components';

const useStyles = createUseStyles(() => ({
  image: {
    height: 16,
    verticalAlign: 'middle',
    marginRight: 8,
  },

  link: {
    color: 'white',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Unconference = () => {
  const classes = useStyles();
  return (
    <Link to="https://hopin.com/events/backstage-users-unconference" className={classes.link}>
      <img
        src={unconferenceLogo}
        alt="The Backstage users unconference logo."
        className={classes.image}
      />
      Join us at the first ever Backstage Users Unconference community event on <strong>November 4th</strong>.
    </Link>
  );
};

export default Unconference;
