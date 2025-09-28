import React, { useEffect, useState } from 'react';
import truncate from 'lodash/truncate';
import useMedia from 'react-use/lib/useMedia';

import { Chip, Link } from 'components';
import { GitHubIcon } from 'components/icons';
import theme from '../../../theme';

const labelFromCodeLocation = (codeLocation, length) => {
  try {
    const { pathname } = new URL(codeLocation);
    const segments = pathname.split('/').filter(Boolean);
    return truncate(segments[1], { length }) || 'GitHub';
  } catch (err) {
    // The only error seen in the wold here is the 'new URL' constructor blowing up because
    // the URL is invalid because of a typo or something else. This will throw a TypeError
    // if it happens. There's no point trying to render a GitHUb chip for an invalid URL so we
    // should just render nothing if that happens.
    console.log(err);
    return null;
  }
};

const GitHubChip = ({ codeLocation }) => {
  const [length, setLength] = useState(20);
  const isMD = useMedia(`(min-width: ${theme.BREAKPOINTS_MD})`);
  const isLG = useMedia(`(min-width: ${theme.BREAKPOINTS_LG})`);
  const isXL = useMedia(`(min-width: ${theme.BREAKPOINTS_XL})`);

  useEffect(() => {
    if (isMD) setLength(20);
    if (isLG) setLength(30);
    if (isXL) setLength(40);
  }, [isLG, isXL]);

  if (!codeLocation) return null;

  const label = labelFromCodeLocation(codeLocation, length);
  if (!label) return null;

  return (
    <Link to={codeLocation} className="inline-block">
      <Chip
        label={label}
        color="black"
        icon={<GitHubIcon className="h-[1.2rem] w-[1.2rem] inline mr-1" />}
      />
    </Link>
  );
};

export default GitHubChip;
