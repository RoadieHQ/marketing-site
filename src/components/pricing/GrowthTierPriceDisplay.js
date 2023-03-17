import classNames from 'classnames';
import React from 'react';

import TIERS from './tiers';

const GrowthTierPriceDisplay = ({ extraHeaderMargin }) => {
  const marginBottom = extraHeaderMargin ? 'mb-14' : 'mb-4';
  return (
    <>
      <p className={classNames("text-4xl font-extrabold text-gray-900", marginBottom)}>Custom</p>
  
      <div className="mb-10">
        <p className="pt-2 pb-4">{TIERS.growth.minSeats} developers or more</p>
      </div>
    </>
  );
};

export default GrowthTierPriceDisplay;
