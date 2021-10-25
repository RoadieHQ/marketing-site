import React from 'react';
import FormSubmissionModal from 'components/CallToAction/FormSubmissionModal';
import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';

const isScmToolSupported = (tool) => (
  SCM_TOOLS.filter(({ supported }) => supported).map(({ value }) => value).includes(tool)
);

const SubmissionSuccessModal = ({ email, scmTool, ...rest }) => {
  if (isScmToolSupported(scmTool)) {
    return (
      <FormSubmissionModal
        titleText="Your Backstage experience is on the way"
        bodyText={
          <p>
            Once it&apos;s ready, you&apos;ll receive an email at {email}. It typically takes a day or two to get everything ready.
          </p>
        }
        followOn="NEWSLETTER_AND_TWITTER"
        {...rest}
      />
    );
  }

  return (
    <FormSubmissionModal
      titleText="Oops! We're not ready for you yet."
      titleEmoji={null}
      bodyText={
        <>
          <p>
            Roadie only supports GitHub Cloud for now.
          </p>
          <p>
            We are working to support more tools in the near future,
            and you will be among the first to know when we support yours.
          </p>
        </>
      }
      followOn="NEWSLETTER_AND_TWITTER"
      {...rest}
    />
  );
};

export default SubmissionSuccessModal;
