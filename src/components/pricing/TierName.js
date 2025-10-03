import React from 'react';

const TierName = ({ name, comingSoon = false }) => (
  <div>
    <h2 className="inline text-lg leading-6 font-medium text-gray-900 pr-2">{name}</h2>
    {comingSoon && (
      <span className="text-base font-bold bg-primary-100 px-2 py-1 rounded-md text-primary-500">
        coming soon
      </span>
    )}
  </div>
);

export default TierName;
