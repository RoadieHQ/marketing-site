import React from 'react';

import { TIERS } from './prices';

const GrowthTierPriceDisplay = () => {
  return (
    <>
      <p className="text-4xl font-extrabold text-gray-900 mb-4">Custom</p>
  
      <div className="mb-10">
        <p>{TIERS.growth.minSeats} developers or more. Unlimited entities.</p>
      </div>
    </>
  );
};

export default GrowthTierPriceDisplay;
