import React from 'react';
import TierIncludedFeature from './TierIncludedFeature';

const TierLimitations = ({ limitations }) => (
  <div className="pt-6 pb-8 px-6">
    <ul className="mt-6 space-y-4">
      {limitations.map((limitation) => (
        <TierIncludedFeature feature={limitation} key={limitation} hasIcon={false} />
      ))}
    </ul>
  </div>
);

export default TierLimitations;
