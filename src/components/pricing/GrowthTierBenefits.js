import React from 'react';

import TierBulletsSection from './TierBulletsSection';

const GrowthTierBenefits = () => (
  <>
    <TierBulletsSection
      bullets={[
        'Unlimited software components tracked.',
        'Unlimited API specs.',
        'Unlimited TechDocs.',
        'Unlimited scaffolder templates.',
        'Unlimited scorecards.',
      ]}
      hasIcon={false}
    />

    <TierBulletsSection
      heading="Everything in Teams, plus..."
      bullets={[
        'SLA',
        'Slack & MS Teams support',
        'Custom, private Backstage plugins',
        'REST API access',
        'Custom RBAC (optional paid extra)',
        'Secure on-prem connection',
        'Usage analytics dashboard',
      ]}
    />
  </>
);

export default GrowthTierBenefits;
