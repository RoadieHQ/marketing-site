import React, { useEffect, useState } from 'react';
import truncate from 'lodash/truncate';
import useMedia from 'react-use/lib/useMedia';

import { Chip, Link } from 'components';
import { NpmIcon } from 'components/icons';
import theme from '../../../theme';

const NpmChip = ({ npmjsPackage }) => {
  const [length, setLength] = useState(20);
  const isMD = useMedia(`(min-width: ${theme.BREAKPOINTS_MD})`);
  const isLG = useMedia(`(min-width: ${theme.BREAKPOINTS_LG})`);
  const isXL = useMedia(`(min-width: ${theme.BREAKPOINTS_XL})`);

  useEffect(() => {
    if (isMD) setLength(20);
    if (isLG) setLength(30);
    if (isXL) setLength(40);
  }, [isLG, isXL]);

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
