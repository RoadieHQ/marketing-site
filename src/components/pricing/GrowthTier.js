import React from 'react';

import GrowthTierHeader from './GrowthTierHeader';
import GrowthTierBenefits from './GrowthTierBenefits';
import TierContainer from './TierContainer';
import GrowthTierPriceDisplay from './GrowthTierPriceDisplay';

const GrowthTier = ({ ctaComponent }) => (
  <TierContainer>
    <div className="p-6">
      <GrowthTierHeader />
      <GrowthTierPriceDisplay />

      <div className="mb-5">
        {ctaComponent}
      </div>
    </div>

    <GrowthTierBenefits />
  </TierContainer>
);

export default GrowthTier;
