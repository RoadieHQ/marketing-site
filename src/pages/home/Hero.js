import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import Headline from './Headline';
import Lead from './Lead';
import CallToAction from './CallToAction';
import DemoLink from './DemoLink';

const useHeroStyles = createUseStyles((theme) => {
  console.log('theme', theme);
  return {
    root: {
      display: 'flex',
      paddingTop: 108,
      maxWidth: theme.breakpoints.values.lg,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    col: {
      flex: 1,
    },

    rightCol: {
      marginLeft: 24,
    },

    callToActionWrapper: {
      marginBottom: 16,
    },

    image: {
      backgroundImage: 'url(undraw/undraw_content_team_3epn.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
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
        <div className={classes.callToActionWrapper}>
          <CallToAction />
        </div>
        <div>
          <DemoLink />
        </div>
      </div>
      <div className={classnames(classes.col, classes.rightCol, classes.image)} />
    </div>
  );
};

export default Hero;
