import React from 'react';

import { Chip, Link } from 'components';
import { GitHubIcon } from 'components/icons';

const GitHubChip = ({ codeLocation }) => {
  if (!codeLocation) return null;

  const { pathname } = new URL(codeLocation);
  const segments = pathname.split('/').filter(Boolean);
  const label = segments[1] || 'GitHub';

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
