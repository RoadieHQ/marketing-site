import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Lead, Headline, TwoColumnLayout } from 'components';
import { Helmet } from 'react-helmet';
// import { ButtonLinkCallToAction } from 'components/CallToAction';
import { GetInstanceFormCallToAction } from 'components/CallToAction';

import IntroToRoadieModal from './IntroToRoadieModal';
import Adornment from './Adornment';

const useStyles = createUseStyles((theme) => ({
  headlineWrapper: {
    marginBottom: 32,
  },

  leadWrapper: {
    marginBottom: 32,
  },

  callToActionWrapper: {
    marginBottom: 24,
  },

  leftCol: {
    paddingTop: 0,
  },

  rightCol: {
    paddingLeft: 32,
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    leftCol: {
      paddingRight: 32,
    },
  },
}));

const Hero = ({ headline, lead }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <script src="https://player.vimeo.com/api/player.js" />
      </Helmet>

      <IntroToRoadieModal
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />

      <TwoColumnLayout
        className={{
          leftCol: classes.leftCol,
          rightCol: classes.rightCol,
        }}
        leftContent={
          <>
            <div className={classes.headlineWrapper}>
              <Headline>
                <span>{headline}</span>{' '}
              </Headline>
            </div>

            <div className={classes.leadWrapper}>
              <Lead>{lead}</Lead>
            </div>

            <div className={classes.callToActionWrapper}>
              {/* <ButtonLinkCallToAction text="Try it free" /> */}
              <GetInstanceFormCallToAction
                emailInputId="get-instance-email-input"
                buttonId="get-instance-email-button"
              />
            </div>
          </>
        }
        rightContent={
          <Adornment openModal={openModal} />
        }
      />
    </>
  );
};

export default Hero;
