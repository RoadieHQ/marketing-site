import React from 'react';
import Modal from 'react-modal';
import { createUseStyles } from 'react-jss';

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

const useStyles = createUseStyles((theme) => ({
  modalContentWrapper: {
    padding: 16,
  },

  link: {
    color: theme.palette.primary.main,
  },
}));

const twitterUrl = ({ social }) => `https://twitter.com/${social.twitter}`;

const NewsletterAndTwitterInner = ({ siteMetadata, classes }) => (
  <p>
    Learn more about Backstage via{' '}
    <a
      href={siteMetadata.newsletterUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
    >
      our newsletter
    </a>{' '}
    or follow{' '}
    <a
      href={twitterUrl(siteMetadata)}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
    >
      @{siteMetadata.social.twitter}
    </a>
    .
  </p>
);

const TwitterInner = ({ siteMetadata, classes }) => (
  <p>
    Follow{' '}
    <a
      href={twitterUrl(siteMetadata)}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
    >
      @{siteMetadata.social.twitter}
    </a>
    .
  </p>
);

const FormSubmissionModal = ({
  modalOpen,
  handleCloseModal,
  titleText = 'Thank you!',
  bodyText = `We'll be in touch to learn more about your stack and the problems you're trying to solve.`,
  siteMetadata,
  followOn = 'NEWSLETTER_AND_TWITTER',
}) => {
  const classes = useStyles();

  let followOnContent = <NewsletterAndTwitterInner siteMetadata={siteMetadata} classes={classes} />;
  if (followOn === 'TWITTER') {
    // Doesn't make sense to offer to let people sign up to the newsletter immediately after
    // they have just signed up to the newsletter.
    followOnContent = <TwitterInner siteMetadata={siteMetadata} classes={classes} />;
  }

  return (
    <Modal
      isOpen={modalOpen}
      style={modalStyles}
      contentLabel="Modal"
      onRequestClose={handleCloseModal}
    >
      <div className={classes.modalContentWrapper}>
        <h2>
          {titleText}{' '}
          <span aria-label="Party Streamers" role="img">
            🎉
          </span>
        </h2>
        <p>{bodyText}</p>
        {followOnContent}
      </div>
    </Modal>
  );
};

export default FormSubmissionModal;
