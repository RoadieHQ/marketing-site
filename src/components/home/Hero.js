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
    backgroundPosition: 'right',
  },
}));

const Hero = ({ setModalOpen, headline, lead, netlifyFormName, email, setEmail }) => {
  const classes = useStyles();

  return (
    <TwoColumnLayout
      leftContent={
        <>
          <Headline>
            <span>{headline}</span>{' '}
          </Headline>

          <div className={classes.leadWrapper}>
            <Lead>{lead}</Lead>
            <Lead>Get a demo...</Lead>
          </div>

          <div className={classes.callToActionWrapper}>
            <CallToAction
              setModalOpen={setModalOpen}
              buttonText="Get a demo"
              netlifyFormName={netlifyFormName}
              email={email}
              setEmail={setEmail}
            />
          </div>
        </>
      }
      rightContent={
        <BackgroundImage
          className={classes.backgroundImage}
          backgroundImage="url(/undraw/undraw_Onboarding_re_6osc.png)"
        />
      }
    />
  );
};

export default Hero;
