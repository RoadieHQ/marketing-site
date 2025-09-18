import React, { useState, useEffect } from 'react';
import { Title } from 'components';
import map from 'lodash/map';
import get from 'lodash/get';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {
  EditOnGitHubLink,
  NpmChip,
  GitHubChip,
  RoadieDocsChip,
  GravatarImage,
} from 'components/backstage/plugins';

const DetailsListItem = ({ label, value, title }) => {
  return (
    <li className="border-b border-gray-200 py-2 flex place-content-between" title={title}>
      <span>{label}</span> <strong>{value}</strong>
    </li>
  );
};

const Mainatainer = ({ name, email }) => {
  return (
    <li>
      <GravatarImage
        email={email}
        name={name}
        alt={`The Gravatar avatar of ${name}`}
        title={`Name: ${name}. Email: ${email}`}
      />
    </li>
  );
};

const Sidebar = ({ plugin, npmData, siteMetadata }) => {
  const latestVersionPublished = get(npmData.time, npmData.latestVersion);
  console.log('npmData', npmData);

  return (
    <div>
      <div className="mb-10">
        <div className="mb-3">
          <RoadieDocsChip
            availableOnRoadie={plugin.frontmatter.availableOnRoadie} 
            roadieDocsPath={plugin.frontmatter.roadieDocsPath}
          />
        </div>

        <div className="mb-3">
          <GitHubChip codeLocation={plugin.frontmatter.codeLocation} />
        </div>
        <NpmChip npmjsPackage={npmData.name} />
      </div>

      <div className="mb-10">
        <div className="mb-4">
          <Title>Plugin details</Title>
        </div>

        <div>
          <ul className="mb-3">
            <DetailsListItem label="Version" value={npmData.latestVersion} />
            <DetailsListItem
              label="Last published"
              value={`${formatDistanceToNow(Date.parse(latestVersionPublished))} ago`}
              title={latestVersionPublished}
            />
            <DetailsListItem
              label="First published"
              value={`${formatDistanceToNow(Date.parse(npmData.time.created))} ago`}
              title={npmData.time.created}
            />
            <DetailsListItem label="Number of versions" value={npmData.numberOfVersions} />
            <DetailsListItem label="License" value={npmData.license} />
          </ul>

          <span className="flex place-content-between text-gray-400" title={npmData.roadieLastUpdated}>
            <span className="italic">Last synced with NPM:</span>
            <span>{`${formatDistanceToNow(Date.parse(npmData.roadieLastUpdated))} ago`}</span>
          </span>
        </div>
      </div>

      <div className="mb-10">
        <div className="mb-4">
          <Title>Maintainers</Title>
        </div>

        <div>
          <ul className="grid grid-cols-4 gap-3 pb-1">
            {map(npmData.maintainers, ({ name, email }) => (
              <Mainatainer name={name} email={email} key={email} />
            ))}
          </ul>
            <p className="italic text-gray-400">
              {(npmData.numberOfMaintainers > npmData.maintainers.length) && (
                `...along with ${npmData.numberOfMaintainers - npmData.maintainers.length} others. `
              )}
              Maintainer images come from Gravatar.
            </p>
        </div>
      </div>

      <div>
        <p className="prose prose-primary my-10">
          Found a mistake on this page?{' '}
          <EditOnGitHubLink
            siteMetadata={siteMetadata}
            plugin={plugin}
            text="Open a pull request"
          />.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
