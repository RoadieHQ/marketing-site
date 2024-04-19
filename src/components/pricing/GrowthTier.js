import React from 'react';

import TierName from './TierName';
import TierDescription from './TierDescription';
import GrowthTierPriceDisplay from './GrowthTierPriceDisplay';
import TIERS from './tiers';

const GrowthTier = ({ ctaComponent, extraHeaderMargin }) => (
  <div className="p-5" style={{ borderLeft: '1px solid var(--gray-5)' }}>
    <TierName name={TIERS.growth.name} />
    <TierDescription description={TIERS.growth.description} />
    <GrowthTierPriceDisplay extraHeaderMargin={extraHeaderMargin} />

    <div className="mb-5">
      {ctaComponent}
    </div>
  </div>
);

export default GrowthTier;
