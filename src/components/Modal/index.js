import Modal from 'react-modal';

export const modalStyles = ({ maxWidth = 860 } = {}) => ({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.58)',
    // Otherwise the <SitewideHeader /> is on top of the overlay.
    zIndex: 20,
  },

  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    maxWidth,
    margin: '80px auto',
    padding: 0,
    border: 0,
  },
});

Modal.setAppElement('#___gatsby');

export default Modal;
