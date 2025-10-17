import React from 'react';
import { NpmChip, GitHubChip, RoadieDocsChip } from 'components/backstage/plugins';
import { Title } from 'components';
import isEmpty from 'lodash/isEmpty';

const Links = ({ plugin }) => {
  const { 
    availableOnRoadie,
    roadieDocsPath,
    npmPackageName,
    codeLocation,
    packages,
  } = plugin;

  let packageList;
  if (isEmpty(packages)) {
    packageList = (
      <>
        <div className="mb-3">
          <GitHubChip codeLocation={codeLocation} />
        </div>
        <NpmChip npmjsPackage={npmPackageName} />
      </>
    );
  } else if (packages.length === 1) {
    const { codeLocation, npmPackageName } = packages[0];
    packageList = (
      <>
        <div className="mb-3">
          <GitHubChip codeLocation={codeLocation} />
        </div>
        <NpmChip npmjsPackage={npmPackageName} />
      </>
    );
  } else {
    packageList = (
      <ul>
        {packages.map(({ codeLocation, type, npmPackageName }) => {
          return (
            <li key={npmPackageName} className="mb-2 flex items-center">
              <strong className="mr-1">{type}:</strong>
              <GitHubChip codeLocation={codeLocation} label="GitHub" color="none" />
              <NpmChip npmjsPackage={npmPackageName} label="NPM" color="none" />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="p-6 bg-gray-100 rounded-lg mb-6">
      <div className="mb-4">
        <Title>Links</Title>
      </div>

      <div className="mb-4">
        <RoadieDocsChip availableOnRoadie={availableOnRoadie} roadieDocsPath={roadieDocsPath} />
      </div>

      {packageList}
    </div>
  );
};

export default Links;
