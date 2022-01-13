import React from 'react';
import { CheckIcon } from '@heroicons/react/solid'

const TierIncludedFeature = ({ feature, hasIcon = true }) => {
  return (
    <li className="flex space-x-3">
      {hasIcon && (
        <CheckIcon className="flex-shrink-0 h-5 w-5 text-gray-600" aria-hidden="true" />
      )}
      <span className="text-sm text-gray-600">{feature}</span>
    </li>
  );
};

export default TierIncludedFeature;
