import React from 'react';
import Modal, { modalStyles } from 'components/Modal';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  root: {
    padding: '56.25% 0 0 0',
    position: 'relative',
  },

  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

const IntroToRoadieModal = ({ setModalOpen, modalOpen }) => {
  const classes = useStyles();

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      isOpen={modalOpen}
      style={modalStyles()}
      contentLabel="Modal"
      onRequestClose={handleCloseModal}
    >
      <div className={classes.root}>
        <iframe
          title="Introduction to Backstage on Roadie"
          src="https://player.vimeo.com/video/568429209?autoplay=1&color=F5501E"
          className={classes.iframe}
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen={true}
        />
      </div>
    </Modal>
  );
};

export default IntroToRoadieModal;
