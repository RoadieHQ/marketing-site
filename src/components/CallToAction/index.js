import React from 'react';
import { Button } from 'components';

export const ButtonLinkCallToAction = ({ text = 'Request a  demo', ...props }) => {
  const codedText = encodeURIComponent(text);

  return (
    <Button
      to={`/evaluation-request/?clicked_button_label=${codedText}`}
      link={true}
      text={text}
      id="evaluation-request-link-button"
      color="primary"
      {...props}
    />
  );
};
