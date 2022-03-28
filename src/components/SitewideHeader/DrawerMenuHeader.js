import React from 'react';
import { RoadieRIcon } from 'components/icons';

import CloseMenuButton from './CloseMenuButton';

const DrawerMenuHeader = () => (
  <div className="flex items-center justify-between border-b-2 border-gray-100 pb-4">
    <div>
      <RoadieRIcon />
    </div>

    <div className="-mr-2">
      <CloseMenuButton />
    </div>
  </div>
);

export default DrawerMenuHeader;
