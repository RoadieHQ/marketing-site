import React from 'react';

import { Chip, Link } from 'components';
import { RoadieRacksIcon } from 'components/icons';

export const fullRoadieDocsPath = ({ roadieDocsPath }) => `/docs${roadieDocsPath}`;

const RoadieDocsChip = ({ availableOnRoadie, roadieDocsPath }) => {
  if (!availableOnRoadie) return null;

  const chip = (
    <Chip
      label="Available on Roadie"
      icon={<RoadieRacksIcon className="h-[1rem] w-[1rem] inline mr-1" />}
    />
  );

  if (!roadieDocsPath) return chip;
  return (
    <Link to={fullRoadieDocsPath(roadieDocsPath)} className="inline-block">
      {chip}
    </Link>
  );
};

export default RoadieDocsChip;
