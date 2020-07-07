import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import Headline from './Headline';
import Lead from './Lead';
import CallToAction from './CallToAction';
import DemoLink from './DemoLink';
import LayoutControl from '../LayoutControl';

const useStyles = createUseStyles(() => {
  // console.log('theme', theme);
  return {
    root: {
      display: 'flex',
      paddingTop: 108,
    },

    col: {
      flex: 1,
    },

    rightCol: {
      marginLeft: 24,
      display: 'none',
    },

    callToActionWrapper: {
      marginBottom: 16,
    },

    image: {

    },

    '@media (min-width: 1024px)': {
      rightCol: {
        display: 'block',
      },

      image: {
        backgroundImage: 'url(undraw/undraw_content_team_3epn.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      },
    },
  };
});


const Hero = () => {
  const classes = useStyles();

  return (
    <LayoutControl>
      <div className={classes.root}>
        <div className={classes.col} style={{ minWidth: 500 }}>
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
    </LayoutControl>
  );
};

export default Hero;
