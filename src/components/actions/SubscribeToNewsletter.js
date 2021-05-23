import React from 'react';
import { InterstitialTitle, Link } from 'components';
import { createUseStyles } from 'react-jss';

import FormSubmissionModal from './FormSubmissionModal';
import CallToAction from './NetlifyFormCallToAction';
import { FORM_NAMES } from '../../contactFormConstants';

const useStyles = createUseStyles(() => ({
  callToActionWrapper: {
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: 'center',
  },

  callToActionParagraph: {
    marginBottom: 24,
    marginTop: 0,
  },
}));

export const SubscribeToNewsletterSuccessModal = (props) => {
  return (
    <FormSubmissionModal
      titleText="You're subscribed!"
      bodyText={
        <>
          <p>We publish most Mondays so you&apos;ll receive your first edition soon.</p>
          <p>
            In the meantime, we&apos;d love to hear why you&apos;re excited about Backstage.
            Please fill out this short survey...
          </p>
        </>
      }
      followOn="NEEDS_ANALYSIS_SURVEY"
      {...props}
    />
  );
};

export const SubscribeToNewsletterCTA = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.callToActionWrapper}>
      <InterstitialTitle text="Become a Backstage expert" />

      <p className={classes.callToActionParagraph}>
        To get the latest news, deep dives into Backstage features, and a roundup of recent
        open-source action, sign up for Roadie&apos;s Backstage Weekly.{' '}
        <Link to="/backstage-weekly/">See recent editions.</Link>
      </p>

      <CallToAction
        buttonText="Subscribe"
        netlifyFormName={FORM_NAMES.subscribeToNewsletter}
        {...props}
      />
    </div>
  );
};
