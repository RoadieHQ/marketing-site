import React from 'react';
import truncate from 'lodash/truncate';
import useMedia from 'react-use/lib/useMedia';

import { Chip, Link } from 'components';
import { NpmIcon } from 'components/icons';
import theme from '../../../theme';

const NpmChip = ({ npmjsPackage }) => {
  const isLG = useMedia(`(min-width: ${theme.BREAKPOINTS_LG})`);
  const isXL = useMedia(`(min-width: ${theme.BREAKPOINTS_XL})`);
  const is2XL = useMedia(`(min-width: ${theme.BREAKPOINTS_2XL})`);
  if (!npmjsPackage) return null;

  let length = 20;
  if (isLG) length = 30;
  if (isXL) length = 40;
  if (is2XL) length = 50;

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
