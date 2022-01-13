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
        <TierName name="Enterprise" />
        <TierDescription description="A single pane of glass for every engineer in your company." />

        <div className="mt-24">
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
          'Kubernetes plugin',
          'Bring your own private plugins',
          'Slack and email Support',
          'Single sign on',
          'Roadie API access',
        ]}
      />
    </div>
  );
};

export default EnterprisePricingTier;
