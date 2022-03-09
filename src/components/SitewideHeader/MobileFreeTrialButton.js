import React from 'react'
import { Button } from 'components';

const MobileFreeTrialButton = () => (
  <Button
    link={true}
    to="/free-trial/"
    color="primary"
    text="Try it free"
    size="large"
    fullWidth={true}
  />
);

export default MobileFreeTrialButton;
