import React from 'react';
import TierIncludedFeature from './TierIncludedFeature';

const TierIncludedFeatures = ({ heading, includedFeatures }) => (
  <div className="pt-6 pb-8 px-6">
    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">{heading}</h3>
    <ul className="mt-6 space-y-4">
      {includedFeatures.map((feature) => (
        <TierIncludedFeature feature={feature} key={feature} />
      ))}
    </ul>
  </div>
);

export default TierIncludedFeatures;
