import React, { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import { Title, Chip, Button, SidebarTableOfContents } from 'components';
import { GitHubChip } from 'components/backstage/plugins';
import RoadieDocsChip from 'components/backstage/RoadieDocsChip';
import { PAGE_PATHS } from '../../../contactFormConstants';
import NpmDetailsList from '../../backstage/plugins/Sidebar/NpmDetailsList';
import MaintainersList from '../../backstage/plugins/Sidebar/MaintainersList';
import parsePackageData from '../../backstage/plugins/Sidebar/parsePackageData';
import fetchPackageDataByName from '../../backstage/plugins/Sidebar/fetchPackageDataByName';
import scaffolderActionPackageForStats from '../../../packageData/scaffolderActionPackageForStats.mjs';
import Category from './Category';

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

const Info = ({ action }) => {
  const { availableOnRoadie, supportsDryRun } = action;

  // Only show section if there's something to display
  if (!availableOnRoadie && !supportsDryRun) return null;

  return (
    <div className="p-6 bg-gray-100 rounded-lg mb-6">
      <div className="mb-4">
        <Title>Info</Title>
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

const Sidebar = ({ action, pageSections }) => {
  const { packageName } = scaffolderActionPackageForStats(action);
  const [packageData, setPackageData] = useState({});
  const [packageDataLoadingState, setPackageDataLoadingState] = useState('unloaded');

  useEffect(() => {
    if (!packageName) {
      setPackageDataLoadingState('error');
      return;
    }

    (async () => {
      setPackageDataLoadingState('loading');
      const { status, data } = await fetchPackageDataByName({
        packageName,
      });
      setPackageDataLoadingState(status);
      setPackageData(parsePackageData(data));
    })();
  }, [packageName]);

  return (
    <>
      <SidebarTableOfContents content={action} pageSections={pageSections} />
      <NpmDetailsList
        packageData={packageData}
        packageDataLoadingState={packageDataLoadingState}
        title="Package details"
      />
      <Links action={action} />
      <Category action={action} />
      <Info action={action} />
      <MaintainersList packageData={packageData} packageDataLoadingState={packageDataLoadingState} />

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
