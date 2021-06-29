import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Lead, Headline, TwoColumnLayout, ButtonLinkCallToAction } from 'components';
import { Helmet } from 'react-helmet';

import BackgroundImage from './BackgroundImage';
import backstageScreenshot from '../../../content/assets/backstage-screenshot-long.png';
import playIcon from '../../../content/assets/play-icon.png';
import Modal, { modalStyles } from 'components/Modal';

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

  screenshotButton: {
    height: '100%',
  },

  backgroundImageScreenshot: {
    cursor: 'pointer',
    backgroundSize: 'contain',
    backgroundPosition: 'center top',
    borderRadius: '4px 4px 0 0',
  },

  backgroundImagePlayIcon: {
    backgroundSize: '20%',
    backgroundPosition: 'center',
  },

  leftCol: {
    paddingTop: 0,
    paddingRight: 32,
  },

  rightCol: {
    paddingLeft: 32,
  },

  videoWrapper: {
    padding: '56.25% 0 0 0',
    position: 'relative',
  },

  videoIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  [`@media (min-width: ${theme.breakpoints.values.lg}px)`]: {
    backgroundImageScreenshot: {
      backgroundSize: 'cover',
      borderRadius: '8px 8px 0 0',
    },
  },
}));

const Hero = ({ headline, lead }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <script src="https://player.vimeo.com/api/player.js" />
      </Helmet>

      <Modal
        isOpen={modalOpen}
        style={modalStyles()}
        contentLabel="Modal"
        onRequestClose={handleCloseModal}
      >
        <div className={classes.videoWrapper}>
          <iframe
            title="Introduction to Backstage on Roadie"
            src="https://player.vimeo.com/video/568429209?autoplay=1&color=F5501E"
            className={classes.videoIframe}
            frameBorder={0}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen={true}
          />
        </div>
      </Modal>

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
              <ButtonLinkCallToAction />
            </div>
          </>
        }
        rightContent={
          <div
            role="button"
            onClick={openModal}
            onKeyPress={openModal}
            className={classes.screenshotButton}
            tabIndex={0}
          >
            <BackgroundImage
              className={classes.backgroundImageScreenshot}
              backgroundImage={`url(${backstageScreenshot})`}
            >
              <BackgroundImage
                backgroundImage={`url(${playIcon})`}
                className={classes.backgroundImagePlayIcon}
              />
            </BackgroundImage>
          </div>
        }
      />
    </>
  );
};

export default Hero;
