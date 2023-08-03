import React from 'react';

import classnames from 'classnames';

const FeatureBulletPoint = ({ item, boxedIcons = true }) => (
  <div className='Flex column gap-1'>
    <dt className='Flex row ai-center gap-2'>
      <div>
        <item.icon
          className={classnames({
            'Icon size-1': boxedIcons === true,
            'Icon': boxedIcons === false,
          })}
          aria-hidden="true"
        />
      </div>

      <h5 className="Text size-4 weight-2">{item.name}</h5>
    </dt>
    <dd className="pl-7">
      <p className="Text size-3 lowContrast">{item.description}</p>
    </dd>
  </div>
);

export default FeatureBulletPoint;
