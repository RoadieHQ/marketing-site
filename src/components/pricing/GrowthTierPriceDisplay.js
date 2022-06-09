import React from 'react';

import TIERS from './tiers';

const GrowthTierPriceDisplay = () => (
  <>
    <p className="text-4xl font-extrabold text-gray-900 mb-14">Custom</p>

    <div className="mb-10">
      <p className="pt-2 pb-4">
        {TIERS.growth.minSeats} developers or more
      </p>
    </div>
  </>
);

export default GrowthTierPriceDisplay;
