import React from 'react';
import Modal from 'react-modal';
import { createUseStyles } from 'react-jss';
import { Link } from 'components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Button from 'components/home/Button';

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
    <Link to="/backstage-weekly/" className={classes.link}>
      our newsletter
    </Link>{' '}
    or follow{' '}
    <Link to={twitterUrl(siteMetadata)} className={classes.link}>
      @{siteMetadata.social.twitter}
    </Link>
    .
  </p>
);

const TwitterInner = ({ siteMetadata, classes }) => (
  <p>
    Follow{' '}
    <Link to={twitterUrl(siteMetadata)} className={classes.link}>
      @{siteMetadata.social.twitter}
    </Link>
    .
  </p>
);

const NeedsAnalysisSurveyInner = ({ referredEmail }) => (
  <p>
    <Button
      link={true}
      to={`/onboarding-survey/?referred_email=${encodeURIComponent(referredEmail)}`}
      icon={<FaExternalLinkAlt />}
      text="Onwards"
    />
  </p>
);

const FormSubmissionModal = ({
  modalOpen,
  handleCloseModal,
  titleText = 'Thank you!',
  bodyText = (
    <p>
      We&apos;ll be in touch to learn more about your stack and the problems you&apos;re trying to
      solve.
    </p>
  ),
  siteMetadata,
  followOn = 'NEWSLETTER_AND_TWITTER',
  email,
}) => {
  const classes = useStyles();

  let followOnContent = <NewsletterAndTwitterInner siteMetadata={siteMetadata} classes={classes} />;
  if (followOn === 'TWITTER') {
    // Doesn't make sense to offer to let people sign up to the newsletter immediately after
    // they have just signed up to the newsletter.
    followOnContent = <TwitterInner siteMetadata={siteMetadata} classes={classes} />;
  } else if (followOn === 'NEEDS_ANALYSIS_SURVEY') {
    followOnContent = <NeedsAnalysisSurveyInner referredEmail={email} />;
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
        {bodyText}
        {followOnContent}
      </div>
    </Modal>
  );
};

export default FormSubmissionModal;
