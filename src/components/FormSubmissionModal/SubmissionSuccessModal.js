import React from 'react';
import { SCM_TOOLS } from '../../contactFormConstants';

import FormSubmissionModal from './FormSubmissionModal';

const isScmToolSupported = (tool) =>
  SCM_TOOLS.filter(({ supported }) => supported)
    .map(({ value }) => value)
    .includes(tool.value);

const SubmissionSuccessModal = ({
  scmTool,
  positiveTitle = 'Positive title!',
  positiveBody = <p>This is the positive body</p>,
  negativeTitle = 'Negative title :-(',
  negativeBody = <p>This is the negative body</p>,
  ...rest
}) => {
  if (isScmToolSupported(scmTool)) {
    return (
      <FormSubmissionModal
        titleText={positiveTitle}
        bodyText={positiveBody}
        followOn="LINKEDIN"
        {...rest}
      />
    );
  }

  return (
    <FormSubmissionModal
      titleText={negativeTitle}
      titleEmoji={null}
      bodyText={negativeBody}
      followOn="LINKEDIN"
      {...rest}
    />
  );
};

export default SubmissionSuccessModal;
