import React from 'react';
import FormSubmissionModal from 'components/CallToAction/FormSubmissionModal';
import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';

const isScmToolSupported = (tool) => (
  SCM_TOOLS.filter(({ supported }) => supported).map(({ value }) => value).includes(tool)
);

const SubmissionSuccessModal = ({
  scmTool,
  positiveTitle = 'Positive title!',
  positiveBody = (<p>This is the positive body</p>),
  negativeTitle = 'Negative title :-(',
  negativeBody = (<p>This is the negative body</p>),
  ...rest
}) => {
  if (isScmToolSupported(scmTool)) {
    return (
      <FormSubmissionModal
        titleText={positiveTitle}
        bodyText={positiveBody}
        followOn="NEWSLETTER_AND_TWITTER"
        {...rest}
      />
    );
  }

  return (
    <FormSubmissionModal
      titleText={negativeTitle}
      titleEmoji={null}
      bodyText={negativeBody}
      followOn="NEWSLETTER_AND_TWITTER"
      {...rest}
    />
  );
};

export default SubmissionSuccessModal;
