import React from 'react';
import { Button } from 'components';

const ButtonLinkCallToAction = ({ text = 'Request a demo', ...props }) => {
  return (
    <Button
      to="/free-trial/"
      link={true}
      text={text}
      id="evaluation-request-link-button"
      color="primary"
      {...props}
    />
  );
};

export default ButtonLinkCallToAction;
