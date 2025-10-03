import React from 'react';

import classnames from 'classnames';

const FeatureBulletPoint = ({ item, boxedIcons = true }) => (
  <div className="relative">
    <dt>
      <div
        className={classnames('absolute flex items-center justify-center', {
          'h-12 w-12 rounded-md bg-primary-600 text-white': boxedIcons === true,
          'text-primary-600': boxedIcons === false,
        })}
      >
        <item.icon
          className={classnames({
            'h-6 w-6': boxedIcons === true,
            'h-10 w-10': boxedIcons === false,
          })}
          aria-hidden="true"
        />
      </div>

      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
    </dt>
    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
  </div>
);

export default FeatureBulletPoint;
