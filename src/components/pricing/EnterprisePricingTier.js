import React from 'react';
import { Button } from 'components';

import TierName from './TierName';
import TierDescription from './TierDescription';
import TierLimitations from './TierLimitations';
import TierIncludedFeatures from './TierIncludedFeatures';

const EnterprisePricingTier = () => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
      <div className="p-6">
        <TierName name="Growth" />
        <TierDescription description="A service catalog, developer portal, and paved path to production for every engineer in your company" />

        <div className="mt-6">
          <p className="text-4xl font-extrabold text-gray-900">Let&apos;s talk</p>
        </div>

        <div className="mt-14">
          <Button
            text="Request a demo"
            link={true}
            color="primary"
            to="/pricing/enterprise/"
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
        heading="Everything in Pro, plus..."
        includedFeatures={[
          'SLA',
          '24/7 On-call',
          'Slack and email support',
          'Scaffolder service creator',
          'Write your own private, custom plugins',
          'API access',
        ]}
      />
    </div>
  );
};

export default EnterprisePricingTier;
