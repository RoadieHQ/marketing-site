import React from 'react';

import Switch from './Switch';

const SubscribeToNewsletterSwitch = ({ checked, onChange }) => (
  <div className="sm:col-span-2">
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <Switch
          checked={checked}
          onChange={onChange}
          name="sub-to-newsletter"
          srTitle="Subscribe to newsletter"
        />
      </div>

      <div className="ml-3">
        <p className="text-base text-gray-500">
          Subscribe me to the Backstage Weekly newsletter.
        </p>
      </div>
    </div>
  </div>
);

export default SubscribeToNewsletterSwitch;
