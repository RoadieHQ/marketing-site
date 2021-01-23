import React from 'react';
import { createUseStyles } from 'react-jss';
import { Lead, Headline, TwoColumnLayout } from 'components';

import CallToAction from '../actions/CallToAction';
import BackgroundImage from './BackgroundImage';

const useStyles = createUseStyles(() => ({
  leadWrapper: {
    marginBottom: 24,
  },

  callToActionWrapper: {
    marginBottom: 24,
  },

  backgroundImage: {
    backgroundSize: '70%',
  },
}));

const Hero = ({ setModalOpen, headline, lead, netlifyFormName }) => {
  const classes = useStyles();

  return (
    <TwoColumnLayout
      leftContent={
        <>
          <Headline>
            <span>{headline}</span>{' '}
          </Headline>

          <div className={classes.leadWrapper}>
            <Lead text={lead} />
            <Lead text="Get a demo of Backstage..." />
          </div>

          <div className={classes.callToActionWrapper}>
            <CallToAction
              setModalOpen={setModalOpen}
              buttonText="Get a demo"
              netlifyFormName={netlifyFormName}
            />
          </div>
        </>
      }
      rightContent={<BackgroundImage className={classes.backgroundImage} />}
    />
  );
};

export default Hero;
