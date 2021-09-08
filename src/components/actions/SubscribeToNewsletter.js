import React from 'react';
import { InterstitialTitle, TextLink as Link } from 'components';
import { createUseStyles } from 'react-jss';

import FormSubmissionModal from './FormSubmissionModal';
import CallToAction from './NetlifyFormCallToAction';
import { FORM_NAMES } from '../../contactFormConstants';

const useStyles = createUseStyles(() => ({
  center: {
    textAlign: 'center',
  },

  callToActionWrapper: {
    paddingTop: 40,
    paddingBottom: 40,
  },

  callToActionParagraph: {
    marginBottom: 24,
    marginTop: 0,
  },

  p: {
    marginBottom: '1em',
  },
}));

export const SubscribeToNewsletterSuccessModal = (props) => {
  const classes = useStyles();

  return (
    <FormSubmissionModal
      titleText="You're subscribed!"
      bodyText={
        <>
          <p className={classes.p}>We publish most Mondays so you&apos;ll receive your first edition soon.</p>
          <p className={classes.p}>
            In the meantime, we&apos;d love to show you our flexible SaaS Backstage platform...
          </p>
        </>
      }
      followOn="GET_DEMO_SURVEY"
      {...props}
    />
  );
};

export const SubscribeToNewsletterCTA = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.callToActionWrapper}>
      <div className={classes.center}>
        <InterstitialTitle text="Become a Backstage expert" />

        <p className={classes.callToActionParagraph}>
          To get the latest news, deep dives into Backstage features, and a roundup of recent
          open-source action, sign up for Roadie&apos;s Backstage Weekly.{' '}
          <Link color="primary" to="/backstage-weekly/">See recent editions.</Link>
        </p>
      </div>

      <CallToAction
        buttonText="Subscribe"
        netlifyFormName={FORM_NAMES.subscribeToNewsletter}
        {...props}
      />
    </div>
  );
};
