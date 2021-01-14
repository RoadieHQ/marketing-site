import React from 'react';
import { createUseStyles } from 'react-jss';
import { Lead, Headline, TwoColumnLayout } from 'components';

import CallToAction from '../actions/CallToAction';
import { FORM_NAMES } from '../../contactFormConstants';
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

const Hero = ({ setModalOpen }) => {
  const classes = useStyles();

  return (
    <TwoColumnLayout
      leftContent={
        <>
          <Headline>
            <span>Supercharge your internal platform</span>{' '}
          </Headline>

          <div className={classes.leadWrapper}>
            <Lead
              text={`
                Delight your devs with the world-class technology that powers
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
        </>
      }
      rightContent={<BackgroundImage className={classes.backgroundImage} />}
    />
  );
};

export default Hero;
