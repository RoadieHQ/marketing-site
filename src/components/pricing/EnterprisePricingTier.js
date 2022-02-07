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
          <p className="text-4xl font-extrabold text-gray-900">Let&apos;s Talk</p>
        </div>

        <div className="mt-8">
          <Button
            text="Get a quote"
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
        heading="Everything in Team, plus..."
        includedFeatures={[
          'Scaffolder service creator',
          'Tech radar',
          'Kubernetes plugin',
          'Bring your own private plugins',
          'Slack and email Support',
          'Single sign on',
          'API access (coming soon)',
        ]}
      />
    </div>
  );
};

export default EnterprisePricingTier;
