import React from 'react';
import Modal, { modalStyles } from 'components/Modal';

const IntroToRoadieModal = ({ setModalOpen, modalOpen }) => {
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
      <div className="relative" style={{ paddingTop: '56.25%' }}>
        <iframe
          title="Introduction to Backstage on Roadie"
          src="https://player.vimeo.com/video/568429209?autoplay=1&color=F5501E"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen={true}
        />
      </div>
    </Modal>
  );
};

export default IntroToRoadieModal;
