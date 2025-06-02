import React from 'react';

import TierBulletsSection from './TierBulletsSection';

const LocalTierBenefits = () => (
  <>
    <TierBulletsSection
      hasIcon={false}
      bullets={[
        'Unlimited software components tracked.',
        'Unlimited API specs.',
        'Unlimited TechDocs',
        'Unlimited scaffolder templates.',
      ]}
    />

    <TierBulletsSection
      heading="Key features"
      bullets={[
        'Everything from Roadie SaaS',
        'Self-hosted on your infrastructure',
        'Role-based Access Control',
        'Scorecards and engineering metrics',
        '70+ plugins, baked in',
        'Extensible with custom plugins',
        'Performance improvements',
        'Upgrades included',
      ]}
    />
  </>
);

export default LocalTierBenefits;
