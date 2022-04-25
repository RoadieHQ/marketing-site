import React from 'react';
import { Button } from 'components';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import GrowthTier from './GrowthTier';

const PurchaseGrowthTier = () => (
  <GrowthTier
    ctaComponent={(
      <Button
        text="Talk to sales"
        link={true}
        color="primary"
        postfixIcon={<ExternalLinkIcon />}
        to="https://calendly.com/davidtuite/roadie-sales"
        fullWidth
      />
    )}
  />
);

export default PurchaseGrowthTier;
