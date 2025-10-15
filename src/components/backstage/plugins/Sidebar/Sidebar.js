import React, { useState, useEffect } from 'react';
import { Title, Chip, Button, SidebarTableOfContents } from 'components';
import { NpmChip, GitHubChip, RoadieDocsChip } from 'components/backstage/plugins';

import { PAGE_PATHS } from '../../../../contactFormConstants';
import MaintainersList from './MaintainersList';
import NpmDetailsList from './NpmDetailsList';
import parseNpmData from './parseNpmData';
import fetchNpmDataByName from './fetchNpmDataByName';

const Links = ({ plugin }) => {
  const { availableOnRoadie, roadieDocsPath, npmPackageName, codeLocation } = plugin;
  return (
    <div className="p-6 bg-gray-100 rounded-lg mb-6">
      <div className="mb-4">
        <Title>Links</Title>
      </div>

      <div className="mb-3">
        <RoadieDocsChip availableOnRoadie={availableOnRoadie} roadieDocsPath={roadieDocsPath} />
      </div>

      <div className="mb-3">
        <GitHubChip codeLocation={codeLocation} />
      </div>
      <NpmChip npmjsPackage={npmPackageName} />
    </div>
  );
};

const Category = ({ plugin }) => {
  const { category } = plugin;
  if (!category) return null;
  return (
    <div className="p-6 bg-gray-100 rounded-lg mb-6">
      <div className="mb-4">
        <Title>Category</Title>
      </div>
      <Chip label={category.name} title={category.description} />
    </div>
  );
};

const Sidebar = ({ plugin, pageSections }) => {
  const { npmPackageName } = plugin;
  const [npmData, setNpmData] = useState({});
  const [npmDataLoadingState, setNpmDataLoadingState] = useState('unloaded');

  useEffect(() => {
    (async () => {
      setNpmDataLoadingState('loading');
      const { status, data } = await fetchNpmDataByName({
        packageName: npmPackageName,
      });
      setNpmDataLoadingState(status);
      setNpmData(parseNpmData(data));
    })();
  }, [npmPackageName]);

  return (
    <>
      <SidebarTableOfContents content={plugin} pageSections={pageSections} />
      <NpmDetailsList npmData={npmData} npmDataLoadingState={npmDataLoadingState} />
      <Links plugin={plugin} />
      <Category plugin={plugin} />
      <MaintainersList npmData={npmData} npmDataLoadingState={npmDataLoadingState} />

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
