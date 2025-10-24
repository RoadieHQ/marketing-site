import React from 'react';
import { NpmChip, TerraformChip, GitHubChip, RoadieDocsChip } from 'components/backstage/plugins';
import { Title } from 'components';

const Links = ({ plugin }) => {
  const { availableOnRoadie, roadieDocsPath, packages, } = plugin;
  let packageList = null;

  if (packages.length === 1) {
    const { codeLocation, npmPackageName, registry } = packages[0];
    const RegistryChip = registry === 'terraform' ? TerraformChip : NpmChip;
    const registryChipProps = registry === 'terraform'
      ? { terraformPackage: npmPackageName }
      : { npmjsPackage: npmPackageName };

    packageList = (
      <>
        <div className="mb-3">
          <GitHubChip codeLocation={codeLocation} />
        </div>
        <RegistryChip {...registryChipProps} />
      </>
    );
  } else {
    packageList = (
      <ul>
        {packages.map(({ codeLocation, type, npmPackageName, registry }) => {
          const RegistryChip = registry === 'terraform' ? TerraformChip : NpmChip;
          const registryLabel = registry === 'terraform' ? 'Terraform' : 'NPM';
          const registryChipProps = registry === 'terraform'
            ? { terraformPackage: npmPackageName, label: registryLabel }
            : { npmjsPackage: npmPackageName, label: registryLabel };

          return (
            <li key={npmPackageName} className="mb-2 flex items-center">
              <strong className="mr-1">{type}:</strong>
              <GitHubChip codeLocation={codeLocation} label="GitHub" color="none" />
              <RegistryChip {...registryChipProps} color="none" />
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
