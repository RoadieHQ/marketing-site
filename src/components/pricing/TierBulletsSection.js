import React from 'react';
import { CheckIcon, PlusIcon } from '@heroicons/react/solid';

const renderIcon = ({ iconName }) => {
  const classes = 'flex-shrink-0 h-5 w-5 text-primary-600';
  if (iconName === 'plus') {
    return <PlusIcon className={classes} aria-hidden="true" />
  }
  return <CheckIcon className={classes} aria-hidden="true" />;
};

const TierBullet = ({ feature: { iconName, description }, hasIcon = true }) => (
  <li className="flex space-x-3">
    {hasIcon && (
      <span className="pt-1">
        {renderIcon({ iconName })}
      </span>
    )}
    <span className="prose prose-primary max-w-none">{description}</span>
  </li>
);

const TierBulletsSection = ({ heading, bullets, hasIcon = true }) => (
  <div className="pt-6 pb-8 px-6">
    {heading && heading !== '' && (
      <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">{heading}</h3>
    )}
    <ul className="mt-6 space-y-3">
      {bullets.map((feature) => (
        <TierBullet feature={feature} key={`${heading}-${feature}`} hasIcon={hasIcon} />
      ))}
    </ul>
  </div>
);

export default TierBulletsSection;
