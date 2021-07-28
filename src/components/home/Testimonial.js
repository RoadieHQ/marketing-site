import React from 'react';
import { createUseStyles } from 'react-jss';

import enriqueAvatar from '../../../content/assets/home/enrique-avatar.jpeg';
import contentfulLogo from '../../../content/assets/home/1a-contentful-full-logo.png';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },

  testimonial: {
    // This color is recommended in the Contentful brand guide.
    backgroundColor: '#E9F7FF',
    borderRadius: 16,
    padding: 32,
  },

  quote: {
    fontSize: '2rem',
    marginBottom: 32,
  },

  avatarWrapper: {
    marginRight: 16,
  },

  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  attribution: {
    display: 'flex',
    alignItems: 'center',
  },

  role: {
    marginBottom: 16,
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    quote: {
      fontSize: '2.5rem',
    },

    testimonial: {
      maxWidth: 600,
    },
  },
}));

const Testimonial = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.testimonial}>
        <blockquote className={classes.quote}>
          Roadie helps us get the most out of Backstage, while saving time and money on setup and operation.
        </blockquote>
        <div className={classes.attribution}>
          <span className={classes.avatarWrapper}>
            <img
              src={enriqueAvatar}
              alt="Enrique's face"
              className={classes.avatar}
              height="100"
              width="100"
            />
          </span>
          <span>
            <div className={classes.name}><strong>Enrique Amodeo Rubio</strong></div>
            <div className={classes.role}>Staff software engineer</div>
            <img
              className={classes.logo}
              src={contentfulLogo}
              alt="Contentful logo"
              height="33"
              width="160"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
