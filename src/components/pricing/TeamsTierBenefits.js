import React from 'react';

import TierBulletsSection from './TierBulletsSection';

const TeamsTierBenefits = () => (
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
        'Backstage software catalog',
        'Monthly Backstage upgrades',
        'TechDocs technical documentation',
        'Scaffolder service creator',
        'API specs',
        'Vast array of open-source Backstage plugins',
        'Locations log',
        'Tech radar',
        'Kubernetes plugin',
        'Single sign on',
      ]}
    />
  </>
);

export default TeamsTierBenefits;
