import React from 'react';
import { Button } from 'components';

export const ButtonLinkCallToAction = ({ text = 'Request a  demo', ...props }) => (
  <Button
    to="/evaluation-request/"
    link={true}
    text={text}
    id="evaluation-request-link-button"
    color="primary"
    {...props}
  />
);
