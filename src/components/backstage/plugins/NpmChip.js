import React from 'react';
import truncate from 'lodash/truncate';
import useResponsiveTruncation from '../../../hooks/useResponsiveTruncation';

import { Chip, Link } from 'components';
import { NpmIcon } from 'components/icons';

const NpmChip = ({ npmjsPackage, label, color = 'npm-red', ...rest }) => {
  const length = useResponsiveTruncation();
  if (!npmjsPackage) return null;

  if (!label) {
    label = truncate(npmjsPackage, { length });
  }

  return (
    <Link to={`https://npmjs.com/package/${npmjsPackage}`} className="inline-block">
      <Chip
        label={label}
        icon={<NpmIcon className="h-[1.5rem] w-[1.5rem] inline mr-1" />}
        color={color}
        {...rest}
      />
    </Link>
  );
};

export default NpmChip;
