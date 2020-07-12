import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import Headline from './Headline';
import Lead from './Lead';
import CallToAction from './CallToAction';
import DemoLink from './DemoLink';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: 60,
  },

  col: {
    flex: 1,
  },

  leftCol: {
    paddingRight: 16,
  },

  rightCol: {
    marginLeft: 100,
    display: 'none',
  },

  leadWrapper: {
    marginBottom: 24,
  },

  callToActionWrapper: {
    marginBottom: 24,
  },

  image: {},

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    leftCol: {
      paddingRight: 0,
    },

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
}));

const Hero = ({ setModalOpen }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classnames(classes.col, classes.leftCol)}>
        <Headline text="Get a grip on your microservices" />

        <div className={classes.leadWrapper}>
          <Lead
            text={`
              Track your services and teams with the world-class technology which powers
              the development and operation of Spotify's 2,000 microservices.
            `}
          />

          <Lead text="Coming soon..." />
        </div>

        <div className={classes.callToActionWrapper}>
          <CallToAction setModalOpen={setModalOpen} />
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
