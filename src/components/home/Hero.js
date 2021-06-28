import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Modal from 'react-modal';
import { Lead, Headline, TwoColumnLayout, ButtonLinkCallToAction } from 'components';
import { Helmet } from 'react-helmet';

import BackgroundImage from './BackgroundImage';
import backstageScreenshot from '../../../content/assets/backstage-screenshot.png';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.58)',
  },

  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    maxWidth: '860px',
    margin: '80px auto',
    padding: 0,
    border: 0,
  },
};

Modal.setAppElement(`#___gatsby`);


const useStyles = createUseStyles(() => ({
  leadWrapper: {
    marginBottom: 24,
  },

  callToActionWrapper: {
    marginBottom: 24,
  },

  backgroundImage: {
    backgroundPosition: 'right top',
    backgroundSize: '85%',
  },

  leftCol: {
    paddingTop: 0,
  },

  rightCol: {
    flexGrow: 1.1,
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
}));

const Hero = ({ headline, lead }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const onClick = () => {
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
        style={modalStyles}
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
            <Headline>
              <span>{headline}</span>{' '}
            </Headline>

            <div className={classes.leadWrapper}>
              <Lead>{lead}</Lead>
            </div>

            <div className={classes.callToActionWrapper}>
              <ButtonLinkCallToAction />
            </div>
          </>
        }
        rightContent={
          <BackgroundImage
            className={classes.backgroundImage}
            backgroundImage={`url(${backstageScreenshot})`}
            onClick={onClick}
          />
        }
      />
    </>
  );
};

export default Hero;
