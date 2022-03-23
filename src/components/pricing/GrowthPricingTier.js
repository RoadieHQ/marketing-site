import React from 'react';
import { Button, TextField } from 'components';

import TierName from './TierName';
import TierDescription from './TierDescription';
import TierBulletsSection from './TierBulletsSection';

const GrowthPricingTier = () => (
  <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
    <div className="p-6">
      <TierName name="Growth" />
      <TierDescription description="For excellent engineering orgs who want to maintain effectiveness through hypergrowth" />

      <p className="text-4xl font-extrabold text-gray-900 mb-14">Custom</p>

      <div className="mb-10">
        <TextField
          type="text"
          name="number-of-engineers-growth"
          id="number-of-engineers-growth"
          readOnly
          value="150 developers or more"
          fullWidth
        />
      </div>

      <div className="mb-5">
        <Button
          text="Request a demo"
          link={true}
          color="primary"
          to="/request-demo/"
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
      heading="Everything in Pro, plus..."
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

export default GrowthPricingTier;
