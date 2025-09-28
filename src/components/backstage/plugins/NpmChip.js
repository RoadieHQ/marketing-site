import React from 'react';
import truncate from 'lodash/truncate';
import useResponsiveTruncation from '../../../hooks/useResponsiveTruncation';

import { Chip, Link } from 'components';
import { NpmIcon } from 'components/icons';

const NpmChip = ({ npmjsPackage }) => {
  const length = useResponsiveTruncation();

  if (!npmjsPackage) return null;

  return (
    <Link to={`https://npmjs.com/package/${npmjsPackage}`} className="inline-block">
      <Chip
        label={truncate(npmjsPackage, { length })}
        color="npm-red"
        icon={<NpmIcon className="h-[1.5rem] w-[1.5rem] inline mr-1" />}
      />
    </Link>
  );
};

export default NpmChip;
