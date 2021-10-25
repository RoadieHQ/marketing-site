import React from 'react';
import { Title, TextLink as Link } from 'components';

import FormSubmissionModal from './FormSubmissionModal';
import CallToAction from './NetlifyFormCallToAction';
import { FORM_NAMES } from '../../contactFormConstants';

export const SubscribeToNewsletterSuccessModal = (props) => (
  <FormSubmissionModal
    titleText="You're subscribed!"
    bodyText={
      <>
        <p>We publish most Mondays so you&apos;ll receive your first edition soon.</p>
        <p>
          In the meantime, we&apos;d love to show you our flexible SaaS Backstage platform...
        </p>
      </>
    }
    followOn="GET_DEMO_SURVEY"
    {...props}
  />
);

export const SubscribeToNewsletterCTA = (props) => (
  <div className="text-center">
    <div className="pb-3">
      <Title text="Become a Backstage expert" />
    </div>

    <p className="prose prose-primary mb-3 max-w-62 mx-auto">
      To get the latest news, deep dives into Backstage features, and a roundup of recent
      open-source action, sign up for Roadie&apos;s Backstage Weekly.{' '}
      <Link color="primary" to="/backstage-weekly/">See recent editions.</Link>
    </p>

    <CallToAction
      buttonText="Subscribe"
      netlifyFormName={FORM_NAMES.subscribeToNewsletter}
      {...props}
    />
  </div>
);
