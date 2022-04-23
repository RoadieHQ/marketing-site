import React from 'react';
import { Button } from 'components';

import TierName from './TierName';
import TierDescription from './TierDescription';
import TierBulletsSection from './TierBulletsSection';

const PurchaseGrowthTier = () => (
  <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
    <div className="p-6">
      <TierName name="Growth" />
      <TierDescription description="For excellent engineering orgs who want to maintain effectiveness through hypergrowth" />

      <p className="text-4xl font-extrabold text-gray-900 mb-14">Custom</p>

      <div className="mb-10">
        <p className="pt-2 pb-4">
          100 developers or more
        </p>
      </div>

      <div className="mb-5">
        <Button
          text="Request a demo"
          link={true}
          color="primary"
          to="/request-demo/"
          fullWidth
        />
      </div>
    </div>

    <TierBulletsSection
      bullets={[
        'Unlimited software components tracked.',
        'Unlimited API specs.',
        'Unlimited TechDocs',
        'Unlimited scaffolder templates.',
      ]}
      hasIcon={false}
    />

    <TierBulletsSection
      heading="Everything in Teams, plus..."
      bullets={[
        'SLA',
        '24/7 On-call',
        'Slack and email support',
        'Bring your own Backstage plugins',
        'API access',
      ]}
    />
  </div>
);

export default PurchaseGrowthTier;
