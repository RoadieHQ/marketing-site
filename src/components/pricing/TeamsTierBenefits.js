import React from 'react';

import TierBulletsSection from './TierBulletsSection';

const TeamsTierBenefits = () => (
  <TierBulletsSection
    heading="Key features"
    bullets={[{
      description: 'Backstage software catalog',
    }, {
      description: 'Monthly, automatic upgrades',
    }, {
      description: 'TechDocs & API specs',
    }, {
      description: 'Scaffolder golden paths',
    }, {
      description: '75+ Open-source Backstage plugins',
    }, {
      description: 'RAG AI & MCP Server Access (beta)',
    }, {
      description: 'Single sign on',
    }, {
      iconName: 'plus', description: 'Scorecards (optional paid extra)',
    }, {
      iconName: 'plus', description: 'Custom RBAC (optional paid extra)',
    }]}
  />
);

export default TeamsTierBenefits;
