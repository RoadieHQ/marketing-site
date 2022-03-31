import React from 'react';
import FormSubmissionModal from 'components/CallToAction/FormSubmissionModal';
import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';

export const isScmToolSupported = (tool) => (
  SCM_TOOLS.filter(({ supported }) => supported).map(({ value }) => value).includes(tool)
);

const SubmissionSuccessModal = ({ email, scmTool, ...rest }) => {
  if (isScmToolSupported(scmTool)) {
    return (
      <FormSubmissionModal
        titleText="We'll be in touch!"
        bodyText={
          <p>
            Expect an email at {email}. It sometimes takes a day or two to get everything ready.
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
            Roadie only supports GitHub and Bitbucket for now.
          </p>
          <p>
            We are working to support more tools in the near future.
            You will be among the first to know when we support yours.
          </p>
        </>
      }
      followOn="NEWSLETTER_AND_TWITTER"
      {...rest}
    />
  );
};

export default SubmissionSuccessModal;
