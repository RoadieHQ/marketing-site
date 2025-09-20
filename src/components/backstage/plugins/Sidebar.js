import React from 'react';
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
    <li
      className="border-b border-gray-200 py-2 flex place-content-between"
      title={title}
    >
      <span>{label}</span> <strong>{value}</strong>
    </li>
  );
};

const Mainatainer = ({ name, email }) => {
  return (
    <li>
      <GravatarImage
        email={email}
        alt={`The Gravatar avatar of ${name}`}
        title={`Name: ${name}. Email: ${email}`}
      />
    </li>
  );
};

const Sidebar = ({ plugin, npmData = {}, siteMetadata }) => {
  // The component needs to be resilient to npmData = {}. This is the state
  // we will find ourselves in if the Netlify Blob storage returns an error.
  const latestVersionPublishedTime = get(npmData, `time['${npmData.latestVersion}']`);
  const firstPublishedTime = get(npmData, 'time.created');
  const lastSyncedTime = npmData.roadieLastUpdated;

  let latestVersionPublishedAgo, firstPublishedAgo, lastSyncedAgo;
  if (latestVersionPublishedTime) {
    latestVersionPublishedAgo = `${formatDistanceToNow(Date.parse(latestVersionPublishedTime))} ago`;
  }
  if (firstPublishedTime) {
    firstPublishedAgo = `${formatDistanceToNow(Date.parse(npmData.time.created))} ago`;
  }
  if (lastSyncedTime) {
    lastSyncedAgo = `${formatDistanceToNow(Date.parse(lastSyncedTime))} ago`;
  }

  let maintainersHelpText = `Maintainer images come from Gravatar.`;
  if (npmData.maintainers && npmData.numberOfMaintainers > npmData.maintainers.length) {
    const extraMaintainers = npmData.numberOfMaintainers - npmData.maintainers.length;
    maintainersHelpText += `...along with ${extraMaintainers} others. `
  }

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
        <NpmChip npmjsPackage={plugin.frontmatter.npmjsPackage} />
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
              value={latestVersionPublishedAgo}
              title={latestVersionPublishedTime}
            />
            <DetailsListItem
              label="First published"
              value={firstPublishedAgo}
              title={firstPublishedTime}
            />
            <DetailsListItem label="Number of versions" value={npmData.numberOfVersions} />
            <DetailsListItem label="License" value={npmData.license} />
          </ul>

          <span className="flex place-content-between text-gray-400" title={npmData.roadieLastUpdated}>
            <span className="italic">Last synced with NPM:</span>
            <span>{lastSyncedAgo}</span>
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
              {maintainersHelpText}
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
