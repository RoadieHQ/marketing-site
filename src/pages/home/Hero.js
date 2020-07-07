import React from 'react';
import { createUseStyles } from 'react-jss';

import Headline from './Headline';
import Lead from './Lead';
import CallToAction from './CallToAction';

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

    col: {
      flex: 1,
    },
  };
});


const Hero = () => {
  const classes = useHeroStyles();

  return (
    <div className={classes.root}>
      <div className={classes.col}>
        <Headline />
        <Lead />
        <CallToAction />
      </div>
      <div className={classes.col}>
        <p>Image goes here</p>
      </div>
    </div>
  );
};

export default Hero;
