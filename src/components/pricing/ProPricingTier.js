import React from 'react';
import { Button } from 'components';

import TierName from './TierName';
import TierDescription from './TierDescription';
import TierLimitations from './TierLimitations';
import TierIncludedFeatures from './TierIncludedFeatures';

const ProPricingTier = () => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
      <div className="p-6">
        <TierName name="Pro" />
        <TierDescription description="For teams who want a home for their services, docs, runbooks, API specs and CI." />

        <div className="mt-6">
          <div>
            <span className="text-4xl font-extrabold text-gray-900">$14</span>
            <span className="text-2xl text-gray-500">/user/mo</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">10 seats minimum</p>
          </div>
        </div>

        <div className="mt-8">
          <Button
            text="Start a trial"
            link={true}
            color="primary"
            to="/pricing/team/"
          />
        </div>
      </div>

      <TierLimitations
        limitations={[
          'Unlimited software components tracked.',
          'Unlimited scaffolder templates.',
          'Unlimited API specs.',
          'Unlimited TechDocs',
        ]}
      />

      <TierIncludedFeatures
        heading="Key features"
        includedFeatures={[
          'Backstage software catalog',
          'Weekly Backstage upgrades',
          'TechDocs technical documentation',
          'API specs',
          'Vast array of Backstage plugins',
          'Locations log',
          'Tech radar',
          'Kubernetes plugin',
          'Single sign on',
        ]}
      />
    </div>
  );
};

export default ProPricingTier;
