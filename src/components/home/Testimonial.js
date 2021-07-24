import React from 'react';
import { createUseStyles } from 'react-jss';

import enriqueAvatar from '../../../content/assets/home/enrique-avatar.jpeg';
import contentfulLogo from '../../../content/assets/home/1a-contentful-full-logo.png';

const useStyles = createUseStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    borderRadius: 16,
    padding: 32,
  },

  quote: {
    fontSize: '2rem',
    marginBottom: 16,
  },

  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  attribution: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  role: {
    marginBottom: 16,
  },
}));

const Testimonial = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <blockquote className={classes.quote}>
        Roadie helps us get the most out of Backstage, while saving time and money on setup and operation.
      </blockquote>
      <div className={classes.attribution}>
        <span>
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
            src={contentfulLogo}
            alt="Contentful logo"
            height="33"
            width="160"
          />
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
