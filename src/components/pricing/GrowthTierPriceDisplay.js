import classNames from 'classnames';
import React from 'react';

import TIERS from './tiers';

const GrowthTierPriceDisplay = ({ extraHeaderMargin }) => {
  const marginBottom = extraHeaderMargin ? 'mb-14' : 'mb-4';
  return (
    <>
      <div className='mb-5'>
        <p className={classNames("Text size-7 inline", marginBottom)}>Custom</p>
      </div>
  
      <div className="mb-6" style={{ height: 'var(--space-8)', lineHeight: 'var(--space-8)' }}>
        <p className="">{TIERS.growth.minSeats}+ developers</p>
      </div>
    </>
  );
};

export default GrowthTierPriceDisplay;
