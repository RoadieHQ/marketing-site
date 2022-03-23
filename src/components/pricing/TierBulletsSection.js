import React from 'react';
import { CheckIcon } from '@heroicons/react/solid'

const TierBullet = ({ feature, hasIcon = true }) => (
  <li className="flex space-x-3">
    {hasIcon && (
      <span className="pt-1">
        <CheckIcon className="flex-shrink-0 h-5 w-5 text-primary-600" aria-hidden="true" />
      </span>
    )}
    <span className="prose prose-primary max-w-none">{feature}</span>
  </li>
);

const TierBulletsSection = ({ heading, bullets, hasIcon = true }) => (
  <div className="pt-6 pb-8 px-6">
    {heading && heading !== '' && (
      <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">{heading}</h3>
    )}
    <ul className="mt-6 space-y-3">
      {bullets.map((feature) => (
        <TierBullet feature={feature} key={feature} hasIcon={hasIcon} />
      ))}
    </ul>
  </div>
);

export default TierBulletsSection;
