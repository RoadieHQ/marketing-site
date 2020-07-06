import React from 'react';
import { createUseStyles } from 'react-jss';

const useHeadlineStyles = createUseStyles({
  root: {
    marginBottom: 30,
  },

  h1: {
    fontSize: '3.75rem',
    fontWeight: 900,
    lineHeight: 1.25,
    fontFamily: 'Moderat, Helvetica Neue, Arial',
    color: '#1a182a',
  },
});

const Headline = () => {
  const classes = useHeadlineStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.h1}>Backstage without the hassle</h1>
    </div>
  );
};

const useLeadStyles = createUseStyles({
  root: {
    marginBottom: 20,
  },

  p: {
    fontSize: '1.25rem',
    color: '#49475f',
    lineHeight: 1.7,
    fontFamily: 'overpass, Arial',
  },
});

const Lead = () => {
  const classes = useLeadStyles();
  return (
    <div className={classes.root}>
      <p className={classes.p}>
        {`Use Backstage without worrying about the cost of operation,
          upgrading plugins or making it fit with your internal tools.`}
      </p>
    </div>
  );
};

const useHeroStyles = createUseStyles((theme) => {
  console.log('theme', theme);
  return {
    root: {
      display: 'flex',
      paddingTop: 100,
      maxWidth: 1024,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  };
});

const Hero = () => {
  const classes = useHeroStyles();

  return (
    <div className={classes.root}>
      <div>
        <Headline />
        <Lead />
      </div>
      <div>
        <p>Image goes here</p>
      </div>
    </div>
  );
};

export default Hero;
