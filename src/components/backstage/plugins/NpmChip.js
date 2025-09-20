import React from 'react';
import truncate from 'lodash/truncate';

import { Chip, Link } from 'components';
import { NpmIcon } from 'components/icons';

const NpmChip = ({ npmjsPackage }) => {
  if (!npmjsPackage) return null;

  return (
    <Link to={`https://npmjs.com/package/${npmjsPackage}`} className="inline-block">
      <Chip
        label={truncate(npmjsPackage, { length: 40 })}
        color="npm-red"
        icon={<NpmIcon className="h-[1.5rem] w-[1.5rem] inline mr-1" />}
      />
    </Link>
  );
};

export default NpmChip;
