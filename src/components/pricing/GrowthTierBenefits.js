import React from 'react';

import TierBulletsSection from './TierBulletsSection';

const GrowthTierBenefits = () => (
  <>
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
        'API access (beta)',
        'Infra access via broker',
        'Usage analytics dashboard',
      ]}
    />
  </>
);

export default GrowthTierBenefits;
