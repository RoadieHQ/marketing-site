import React from 'react';

import TierName from './TierName';
import TierDescription from './TierDescription';

const TeamsTierHeader = () => (
  <>
    <TierName name="Teams" />
    <TierDescription
      description="For teams who want a home for their services, docs, runbooks, API specs and CI."
    />
  </>
);

export default TeamsTierHeader;
