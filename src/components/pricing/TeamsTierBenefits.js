import React from 'react';

import TierBulletsSection from './TierBulletsSection';

const TeamsTierBenefits = () => (
  <>
    <TierBulletsSection
      hasIcon={false}
      bullets={[
        'Unlimited software components tracked.',
        'Unlimited API specs.',
        'Unlimited TechDocs.',
        'Unlimited scaffolder templates.',
        'Unlimited scorecards.',
      ]}
    />

    <TierBulletsSection
      heading="Key features"
      bullets={[
        'Backstage software catalog',
        'Monthly, automatic upgrades',
        'TechDocs & API specs',
        'Scaffolder golden paths',
        '75+ Open-source Backstage plugins',
        'Scorecards (optional paid extra)',
        'RAG AI & MCP Server Access (beta)',
        'Single sign on',
      ]}
    />
  </>
);

export default TeamsTierBenefits;
