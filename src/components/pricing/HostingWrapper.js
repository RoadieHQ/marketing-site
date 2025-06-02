import React from 'react';
import { TeamsPricingTier, GrowthPricingTier, LocalPricingTier } from 'components/pricing';

const HostingWrapper = ({ currentlySetHosting, currentlySetCurrency }) => {
  if (currentlySetHosting === 'SaaS') {
    return (
      <>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          <TeamsPricingTier currentlySetCurrency={currentlySetCurrency} />
          <GrowthPricingTier />
        </div>
      </>
    );
  }

  return (
    <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto">
      <LocalPricingTier currentlySetCurrency={currentlySetCurrency} />{' '}
    </div>
  );
};

export default HostingWrapper;
