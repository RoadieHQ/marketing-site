import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import Headline from './Headline';
import Lead from './Lead';
import CallToAction from './CallToAction';
import DemoLink from './DemoLink';
import LayoutControl from '../LayoutControl';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: 108,
  },

  col: {
    flex: 1,
  },

  rightCol: {
    marginLeft: 100,
    display: 'none',
  },

  leadWrapper: {
    marginBottom: 24,
  },

  callToActionWrapper: {
    marginBottom: 16,
  },

  image: {},

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
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


const Hero = () => {
  const classes = useStyles();

  return (
    <LayoutControl>
      <div className={classes.root}>
        <div className={classes.col}>
          <Headline text="Get a grip on your microservices" />

          <div className={classes.leadWrapper}>
            <Lead
              text={`
                Track your services and teams with the world-class technology which powers
                the development and operation of Spotify's 2000+ microservices.
              `}
            />

            <Lead text="Coming soon..." />
          </div>

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
