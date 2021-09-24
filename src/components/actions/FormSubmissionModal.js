import React from 'react';
import { createUseStyles } from 'react-jss';
import { TextLink as Link, Button } from 'components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Modal, { modalStyles } from 'components/Modal';

const useStyles = createUseStyles(() => ({
  modalContentWrapper: {
    padding: 16,
  },

  h2: {
    marginBottom: '0.5em',
  },
}));

const twitterUrl = ({ social }) => `https://twitter.com/${social.twitter}`;

const NewsletterAndTwitterInner = ({ siteMetadata }) => (
  <p>
    Learn more about Backstage via{' '}
    <Link to="/backstage-weekly/" color="primary">
      our newsletter
    </Link>{' '}
    or follow{' '}
    <Link to={twitterUrl(siteMetadata)} color="primary">
      @{siteMetadata.social.twitter}
    </Link>
    .
  </p>
);

const TwitterInner = ({ siteMetadata }) => (
  <p>
    Follow{' '}
    <Link to={twitterUrl(siteMetadata)} color="primary">
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
      color="primary"
    />
  </p>
);

const GetDemoSurveyInner = ({ referredEmail }) => {
  const codedEmail = encodeURIComponent(referredEmail);

  return (
    <p>
      <Button
        link={true}
        to={`/request-demo/?email=${codedEmail}`}
        icon={<FaExternalLinkAlt />}
        text="Request a demo"
        color="primary"
      />
    </p>
  );
};

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
  titleEmoji = (
    <span aria-label="Party Streamers" role="img">
      🎉
    </span>
  ),
}) => {
  const classes = useStyles();

  let followOnContent = <NewsletterAndTwitterInner siteMetadata={siteMetadata} classes={classes} />;
  if (followOn === 'TWITTER') {
    // Doesn't make sense to offer to let people sign up to the newsletter immediately after
    // they have just signed up to the newsletter.
    followOnContent = <TwitterInner siteMetadata={siteMetadata} classes={classes} />;
  } else if (followOn === 'NEEDS_ANALYSIS_SURVEY') {
    followOnContent = <NeedsAnalysisSurveyInner referredEmail={email} />;
  } else if (followOn === 'GET_DEMO_SURVEY') {
    followOnContent = <GetDemoSurveyInner referredEmail={email} />;
  }

  return (
    <Modal
      isOpen={modalOpen}
      style={modalStyles({ maxWidth: 660 })}
      contentLabel="Modal"
      onRequestClose={handleCloseModal}
    >
      <div className={classes.modalContentWrapper}>
        <h2 className={classes.h2}>
          {titleText}{' '}{titleEmoji}
        </h2>
        {bodyText}
        {followOnContent}
      </div>
    </Modal>
  );
};

export default FormSubmissionModal;
