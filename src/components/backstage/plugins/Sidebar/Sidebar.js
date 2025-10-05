import React, { useState, useEffect } from 'react';
import { Title, Chip } from 'components';
import { NpmChip, GitHubChip, RoadieDocsChip } from 'components/backstage/plugins';

import MaintainersList from './MaintainersList';
import TableOfContents from './TableOfContents';
import NpmDetailsList from './NpmDetailsList';
import parseNpmData from './parseNpmData';
import fetchNpmDataByName from './fetchNpmDataByName';

const Sidebar = ({ plugin, pageSections }) => {
  const { availableOnRoadie, roadieDocsPath, npmPackageName, codeLocation, category } = plugin;

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
    <div>
      <div className="mb-10 pt-2">
        <TableOfContents plugin={plugin} pageSections={pageSections} />
      </div>

      <div className="mb-10">
        <NpmDetailsList npmData={npmData} npmDataLoadingState={npmDataLoadingState} />
      </div>

      {category && (
        <div className="mb-10">
          <div className="mb-4">
            <Title>Category</Title>
          </div>
          <Chip label={category.name} title={category.description} />
        </div>
      )}

      <div className="mb-10">
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


      <div className="mb-10">
        <MaintainersList npmData={npmData} npmDataLoadingState={npmDataLoadingState} />
      </div>
    </div>
  );
};

export default Sidebar;
