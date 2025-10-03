import React from 'react';
import { Button } from 'components';
import { PAGE_PATHS } from '../../contactFormConstants';

const MobileFreeTrialButton = () => (
  <Button
    link={true}
    to={PAGE_PATHS.freeTrial}
    color="primary"
    text="Try it free"
    size="large"
    fullWidth={true}
  />
);

export default MobileFreeTrialButton;
