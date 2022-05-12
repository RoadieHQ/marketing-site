import React from 'react';
import { Button } from 'components';

import GrowthTier from './GrowthTier';
import TIERS from './tiers';

const GrowthPricingTier = () => (
  <GrowthTier
    ctaComponent={(
      <Button
        text={TIERS.growth.ctaLabel}
        link={true}
        color="primary"
        to={TIERS.growth.ctaLinkTo}
        fullWidth
      />
    )}
  />
);

export default GrowthPricingTier;
