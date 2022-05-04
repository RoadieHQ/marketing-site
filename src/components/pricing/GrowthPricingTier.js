import React from 'react';
import { Button } from 'components';

import GrowthTier from './GrowthTier';

const GrowthPricingTier = () => (
  <GrowthTier
    ctaComponent={(
      <Button
        text="Request a demo"
        link={true}
        color="primary"
        to="/request-demo/"
        fullWidth
      />
    )}
  />
);

export default GrowthPricingTier;
