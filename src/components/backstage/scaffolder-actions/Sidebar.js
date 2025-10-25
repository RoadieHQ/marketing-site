import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import { Title, Chip, Button } from 'components';
import { GitHubChip } from 'components/backstage/plugins';
import RoadieDocsChip from 'components/backstage/RoadieDocsChip';
import { PAGE_PATHS } from '../../../contactFormConstants';

const Links = ({ action }) => {
  const { codeLocation } = action;

  return (
    <div className="p-6 bg-gray-100 rounded-lg mb-6">
      <div className="mb-4">
        <Title>Links</Title>
      </div>

      {codeLocation && (
        <div className="mb-3">
          <GitHubChip codeLocation={codeLocation} />
        </div>
      )}
    </div>
  );
};

const Availability = ({ action }) => {
  const { availableOnRoadie, supportsDryRun } = action;

  // Only show section if there's something to display
  if (!availableOnRoadie && !supportsDryRun) return null;

  return (
    <div className="p-6 bg-gray-100 rounded-lg mb-6">
      <div className="mb-4">
        <Title>Availability</Title>
      </div>

      <div className="mb-3">
        <RoadieDocsChip availableOnRoadie={availableOnRoadie} />
      </div>

      {supportsDryRun && (
        <div className="mb-3">
          <Chip
            label="Dry Run"
            icon={<CheckIcon className="h-[1rem] w-[1rem] inline mr-1" />}
            color="green"
          />
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ action }) => {
  return (
    <>
      <Links action={action} />
      <Availability action={action} />

      <div className="p-6 bg-gray-700 rounded-lg sticky top-10">
        <p className="text-white text-base mb-3">
          Want a Backstage based developer portal that works out-of-the-box?
        </p>

        <Button
          link={true}
          color="primary"
          fullWidth={true}
          size="small"
          to={PAGE_PATHS.requestDemo}
          text="Get a demo"
        />
      </div>
    </>
  );
};

export default Sidebar;
