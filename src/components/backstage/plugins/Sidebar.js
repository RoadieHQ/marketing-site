import React, { useState, useEffect } from 'react';
import { Title } from 'components';
import map from 'lodash/map';
import kebabCase from 'lodash/kebabCase';
import get from 'lodash/get';
import pick from 'lodash/pick';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ContentLoader from 'react-content-loader';
import {
  EditOnGitHubLink,
  NpmChip,
  GitHubChip,
  RoadieDocsChip,
  GravatarImage,
} from 'components/backstage/plugins';

const DetailsListItem = ({ label, value, ...props }) => {
  return (
    <li
      className="border-b border-gray-200 py-2 flex place-content-between"
      id={`npm-detail-${kebabCase(label)}`}
      {...props}
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
        name={name}
        alt={`The Gravatar avatar of ${name}`}
        title={`Name: ${name}. Email: ${email}`}
      />
    </li>
  );
};

const MaintainersList = ({ npmData, npmDataLoadingState }) => {
  let inner;

  if (npmDataLoadingState === 'loading') {
    inner = (
      <ContentLoader 
        speed={2}
        width={400}
        height={200}
        viewBox="0 0 400 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="35" cy="35" r="35" />
        <circle cx="130" cy="35" r="35" />
        <circle cx="230" cy="35" r="35" />
        <circle cx="330" cy="35" r="35" />
        <circle cx="35" cy="125" r="35" />
      </ContentLoader>
    );
  } else {
    inner = (
      <>
        <ul className="grid grid-cols-4 gap-3 pb-1">
          {map(npmData.maintainers, ({ name, email }) => (
            <Mainatainer name={name} email={email} key={email} />
          ))}
        </ul>
        <p className="italic text-gray-400">
          {npmData.maintainersHelpText}
        </p>
      </>
    );
  }

  return (
    <>
      <div className="mb-4">
        <Title>Maintainers</Title>
      </div>

      <div>
        {inner}
      </div>
    </>
  );
};

async function fetchNpmDataByName ({ packageName }) {
  const funcUrl = '/.netlify/functions/fetchNpmDataByName';
  let response;

  try {
    response = await fetch(`${funcUrl}?packageName=${packageName}`);

    if (!response.ok) {
      return {
        status: 'error',
        data: {},
      };
    }
  } catch (err) {
    console.error(err);
    return {
      status: 'error',
      data: {},
    };
  }

  try {
    const json = await response.json();
    return {
      status: 'loaded',
      data: json.data,
    };
  } catch (err) {
    console.warn(`Unparsable JSON returned from Netlify function. It's likely not available in this environment.`);
    return {
      status: 'error',
      data: {},
    };
  }
}

const NpmDetailsList = ({ npmData, npmDataLoadingState }) => {
  let inner = null;

  if (npmDataLoadingState === 'loading') {
    inner = (
      <ContentLoader 
        speed={2}
        width={400}
        height={240}
        viewBox="0 0 400 240"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="3" ry="3" width="150" height="24" /> 
        <rect x="220" y="0" rx="3" ry="3" width="150" height="24" /> 
        <rect x="0" y="40" rx="3" ry="3" width="150" height="24" /> 
        <rect x="220" y="40" rx="3" ry="3" width="150" height="24" /> 
        <rect x="0" y="80" rx="3" ry="3" width="150" height="24" /> 
        <rect x="220" y="80" rx="3" ry="3" width="150" height="24" /> 
        <rect x="0" y="120" rx="3" ry="3" width="150" height="24" /> 
        <rect x="220" y="120" rx="3" ry="3" width="150" height="24" /> 
        <rect x="0" y="160" rx="3" ry="3" width="150" height="24" /> 
        <rect x="220" y="160" rx="3" ry="3" width="150" height="24" /> 
        <rect x="0" y="200" rx="3" ry="3" width="150" height="24" /> 
        <rect x="220" y="200" rx="3" ry="3" width="150" height="24" /> 
      </ContentLoader>
    );
  } else {

    inner = (
      <div>
        <ul className="mb-3">
          <DetailsListItem
            label="Version"
            value={npmData.latestVersion}
          />
          <DetailsListItem
            label="Last published"
            value={npmData.latestVersionPublishedAgo}
            title={npmData.latestVersionPublishedTime}
          />
          <DetailsListItem
            label="First published"
            value={npmData.firstPublishedAgo}
            title={npmData.firstPublishedTime}
          />
          <DetailsListItem
            label="Number of versions"
            value={npmData.numberOfVersions}
          />
          <DetailsListItem
            label="License"
            value={npmData.license}
          />
        </ul>

        <span
          className="flex place-content-between text-gray-400"
          title={npmData.roadieLastUpdated}
        >
          <span className="italic">Last synced with NPM:</span>
          <span>{npmData.lastSyncedAgo}</span>
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4">
        <Title>Plugin details</Title>
      </div>

      {inner}
    </>
  );
};

const parseNpmData = (npmData) => {
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

  return {
    ...pick(npmData, [
        'latestVersion',
        'numberOfVersions',
        'license',
        'maintainers',
      ]),
    latestVersionPublishedTime,
    lastSyncedTime,
    latestVersionPublishedAgo,
    firstPublishedAgo,
    lastSyncedAgo,
    maintainersHelpText,
  };
};

const Sidebar = ({ plugin, siteMetadata }) => {
  const [npmData, setNpmData] = useState({});
  const [npmDataLoadingState, setNpmDataLoadingState] = useState('unloaded');

  useEffect(() => {
    (async () => {
      setNpmDataLoadingState('loading');
      const { status, data } = await fetchNpmDataByName({
        packageName: plugin.frontmatter.npmjsPackage,
      });
      setNpmDataLoadingState(status);
      setNpmData(parseNpmData(data));
    })();
  }, [plugin.frontmatter.npmjsPackage]);

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
        <NpmDetailsList npmData={npmData} npmDataLoadingState={npmDataLoadingState} />
      </div>

      <div className="mb-10">
        <MaintainersList npmData={npmData} npmDataLoadingState={npmDataLoadingState} />
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
