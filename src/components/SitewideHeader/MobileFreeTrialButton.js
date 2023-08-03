import React from 'react'
import { Button } from 'components';

const MobileFreeTrialButton = () => (
  <Button
    link={true}
    to="/free-trial/"
    text="Try it free"
    fullWidth={true}
    className="Button size-3 accent"
  />
);

export default MobileFreeTrialButton;
