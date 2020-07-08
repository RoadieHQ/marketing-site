import React from 'react';
import Modal from 'react-modal';
import { createUseStyles } from 'react-jss';
import deepOrange from '@material-ui/core/colors/deepOrange';

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
    maxWidth: '660px',
    margin: '80px auto',
    padding: 0,
    border: 0,
  },
};

Modal.setAppElement(`#___gatsby`);

const useStyles = createUseStyles(() => ({
  modalContentWrapper: {
    padding: 16,
  },

  link: {
    color: deepOrange[600],
  },
}));

const FormSubmissionModal = ({ modalOpen, handleCloseModal }) => {
  const classes = useStyles();

  return (
    <Modal
      isOpen={modalOpen}
      style={modalStyles}
      contentLabel="Modal"
      onRequestClose={handleCloseModal}
    >
      <div className={classes.modalContentWrapper}>
        <h2>
          Thank you!{' '}
          <span aria-label="Party Steamers" role="img">
            🎉
          </span>
        </h2>
        <p>
          {`We'll be in touch to learn more about your stack
            and the problems you're trying to solve.`}
        </p>

        <p>
          In the meantime, you could&nbsp;
          <a href="https://twitter.com/RoadieHQ" target="__blank" className={classes.link}>
            follow Roadie on Twitter
          </a>
          &nbsp;or play with the&nbsp;
          <a href="https://demo.upstage.dev" target="__blank" className={classes.link}>
            Backstage demo
          </a>
          .
        </p>
      </div>
    </Modal>
  );
};

export default FormSubmissionModal;
