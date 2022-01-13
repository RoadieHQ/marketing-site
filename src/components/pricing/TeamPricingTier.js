import React from 'react';
import { Button } from 'components';

import TierName from './TierName';
import TierDescription from './TierDescription';
import TierLimitations from './TierLimitations';
import TierIncludedFeatures from './TierIncludedFeatures';

const TeamPricingTier = () => {

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
      <div className="p-6">
        <TierName name="Team" comingSoon={true} />
        <TierDescription description="An internal developer hub for the stuff your team builds." />

        <div className="mt-6">
          <p className="text-4xl font-extrabold text-gray-900">FREE</p>
        </div>

        <div className="mt-8">
          <Button
            link={true}
            color="primary"
            text="Request early access"
            to="/"
          />
        </div>
      </div>

      <TierLimitations
        limitations={[
          'Up to 3 software components tracked.',
          'Unlimited TechDocs',
          'Unlimited Users',
        ]}
      />

      <TierIncludedFeatures
        heading="Key Features"
        includedFeatures={[
          'Backstage software catalog',
          'Weekly Backstage upgrades',
          'TechDocs technical documentation',
          'API specs',
          'Vast array of Backstage plugins',
          'Tech radar',
          'Locations log',
        ]}
      />
    </div>
  );
};

export default TeamPricingTier;
