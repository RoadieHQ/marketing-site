import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'components';
import backstageOpenMicLogo from '../../../content/assets/backstage-open-mic-logo.png';

const useStyles = createUseStyles(() => ({
  root: {
    textAlign: 'center',
    // This color is the one used on the Open Mic website.
    backgroundColor: '#121212',
    color: 'white',
    padding: '0.75em 16px',
  },

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

const TopBanner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="https://backstage-openmic.com/" className={classes.link}>
        <img
          src={backstageOpenMicLogo}
          alt="The open mic logo. A purple swirl to the right of the capitalized words open mic"
          className={classes.image}
        />
        Join us at the first ever Backstage Open Mic community event on <strong>March 31st</strong>.
      </Link>
    </div>
  );
};

export default TopBanner;
