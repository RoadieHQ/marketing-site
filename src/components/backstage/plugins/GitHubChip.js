import React from 'react';
import truncate from 'lodash/truncate';
import useResponsiveTruncation from '../../../hooks/useResponsiveTruncation';

import { Chip, Link } from 'components';
import { GitHubIcon } from 'components/icons';

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
  if (!codeLocation) return null;
  const length = useResponsiveTruncation();

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
