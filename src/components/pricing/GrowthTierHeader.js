import React from 'react';

import TierName from './TierName';
import TierDescription from './TierDescription';

const GrowthTierHeader = () => (
  <>
    <TierName name="Growth" />
    <TierDescription
      description="For excellent engineering orgs who want to maintain effectiveness through hypergrowth"
    />
  </>
);

export default GrowthTierHeader;
