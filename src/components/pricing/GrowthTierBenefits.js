import React from 'react';

import TierBulletsSection from './TierBulletsSection';

const GrowthTierBenefits = () => (
  <TierBulletsSection
    heading="Everything in Teams, plus..."
    bullets={[{
      description: 'SLA',
    }, {
      description: 'Slack & MS Teams support',
    }, {
      description: 'Custom, private Backstage plugins',
    }, {
      description: 'REST API access',
    }, {
      description: 'Secure on-prem connection',
    }, {
      description: 'Usage analytics dashboard',
    }]}
  />
);

export default GrowthTierBenefits;
