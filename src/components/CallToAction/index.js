import React from 'react';
import { Button } from 'components';

export const ButtonLinkCallToAction = () => (
  <Button
    to="/evaluation-request/"
    link={true}
    text="Join the waitlist"
    id="evaluation-request-link-button"
    color="primary"
  />
);
