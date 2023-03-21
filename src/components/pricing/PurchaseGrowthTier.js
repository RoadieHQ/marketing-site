import React from 'react';
import { Button } from 'components';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import GrowthTier from './GrowthTier';

const PurchaseGrowthTier = () => (
  <GrowthTier
    extraHeaderMargin={true}
    ctaComponent={
      <Button
        text="Talk to sales"
        id="growth-plan-cta"
        link={true}
        color="primary"
        postfixIcon={<ExternalLinkIcon />}
        to="https://calendly.com/davidtuite/roadie-sales"
        fullWidth
      />
    }
  />
);

export default PurchaseGrowthTier;
