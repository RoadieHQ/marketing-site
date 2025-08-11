import React from 'react';

import GrowthTierBenefits from './GrowthTierBenefits';
import TierContainer from './TierContainer';
import TierName from './TierName';
import TierDescription from './TierDescription';
import GrowthTierPriceDisplay from './GrowthTierPriceDisplay';
import TIERS from './tiers';

const GrowthTier = ({ ctaComponent }) => (
  <TierContainer>
    <div className="p-6">
      <TierName name={TIERS.growth.name} />
      <TierDescription description={TIERS.growth.description} />
      <GrowthTierPriceDisplay />

      <div className="mb-5">
        {ctaComponent}
      </div>
    </div>

    <GrowthTierBenefits />
  </TierContainer>
);

export default GrowthTier;
