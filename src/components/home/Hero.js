import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { Lead, Headline } from 'components';

import CallToAction from '../actions/CallToAction';
import { FORM_NAMES } from '../../contactFormConstants';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
  },

  col: {
    flex: 1,
  },

  leftCol: {},

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
    root: {
      paddingTop: 60,
    },

    leftCol: {
      paddingTop: 30,
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
        <Headline>
          <span>Get a grip on your microservices</span>{' '}
          <span role="img" aria-label="Flexed biceps">
            ⚡️
          </span>
        </Headline>

        <div className={classes.leadWrapper}>
          <Lead
            text={`
              Track your services with the world-class technology which powers
              the development and operation of Spotify's 2,000 microservices.
            `}
          />

          <Lead text="Get a demo of Backstage..." />
        </div>

        <div className={classes.callToActionWrapper}>
          <CallToAction
            setModalOpen={setModalOpen}
            buttonText="Get a demo"
            netlifyFormName={FORM_NAMES.getDemo}
          />
        </div>
      </div>
      <div className={classnames(classes.col, classes.rightCol, classes.image)} />
    </div>
  );
};

export default Hero;
