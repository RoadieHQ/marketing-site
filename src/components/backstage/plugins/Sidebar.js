import React, { useState, useEffect } from 'react';
import { Title, Link } from 'components';
import map from 'lodash/map';
import kebabCase from 'lodash/kebabCase';
import get from 'lodash/get';
import pick from 'lodash/pick';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import ContentLoader from 'react-content-loader';
import { NpmChip, GitHubChip, RoadieDocsChip, GravatarImage } from 'components/backstage/plugins';

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

const Maintainer = ({ name, email }) => {
  return (
    <li title={`Name: ${name}. Email: ${email}`}>
      <GravatarImage email={email} name={name} />
    </li>
  );
};

const MaintainersList = ({ npmData, npmDataLoadingState }) => {
  if (npmDataLoadingState === 'error') return null;
  let inner;

  if (npmDataLoadingState === 'loaded') {
    inner = (
      <>
        <ul className="grid grid-cols-4 gap-3 pb-1">
          {map(npmData.maintainers, ({ name, email }) => (
            <Maintainer name={name} email={email} key={email} />
          ))}
        </ul>
        <p className="italic text-gray-400">{npmData.maintainersHelpText}</p>
      </>
    );
  } else {
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
  }

  return (
    <>
      <div className="mb-4">
        <Title>Maintainers</Title>
      </div>

      <div>{inner}</div>
    </>
  );
};

async function fetchNpmDataByName({ packageName }) {
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
    console.warn(
      `Unparsable JSON returned from Netlify function. It's likely not available in this environment.`
    );
    return {
      status: 'error',
      data: {},
    };
  }
}

const NpmDetailsList = ({ npmData, npmDataLoadingState }) => {
  if (npmDataLoadingState === 'error') return null;
  let inner;

  if (npmDataLoadingState === 'loaded') {
    inner = (
      <div>
        <ul className="mb-3">
          <DetailsListItem label="Version" value={npmData.latestVersion} />
          <DetailsListItem label="Downloads in last month" value={npmData.lastMonthDownloads} />
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
          <DetailsListItem label="Number of versions" value={npmData.numberOfVersions} />
          <DetailsListItem label="License" value={npmData.license} />
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
  } else {
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
        <rect x="0" y="240" rx="3" ry="3" width="150" height="24" />
        <rect x="220" y="240" rx="3" ry="3" width="150" height="24" />
      </ContentLoader>
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
    latestVersionPublishedAgo = `${formatDistanceToNowStrict(
      Date.parse(latestVersionPublishedTime)
    )} ago`;
  }
  if (firstPublishedTime) {
    firstPublishedAgo = `${formatDistanceToNowStrict(Date.parse(npmData.time.created))} ago`;
  }
  if (lastSyncedTime) {
    lastSyncedAgo = `${formatDistanceToNowStrict(Date.parse(lastSyncedTime))} ago`;
  }

  let maintainersHelpText = `Maintainer images come from Gravatar.`;
  if (npmData.maintainers && npmData.numberOfMaintainers > npmData.maintainers.length) {
    const extraMaintainers = npmData.numberOfMaintainers - npmData.maintainers.length;
    maintainersHelpText += `...along with ${extraMaintainers} others. `;
  }

  const numberOfVersions = npmData.numberOfVersions?.toLocaleString();
  const lastMonthDownloads = npmData.lastMonthDownloads?.toLocaleString();

  return {
    ...pick(npmData, ['latestVersion', 'license', 'maintainers']),
    latestVersionPublishedTime,
    lastSyncedTime,
    latestVersionPublishedAgo,
    firstPublishedAgo,
    lastSyncedAgo,
    lastMonthDownloads,
    numberOfVersions,
    maintainersHelpText,
  };
};

const TableOfContents = ({ plugin, pageSections }) => {
  const listItems = Object.keys(pageSections).map((sectionName) => {
    const { key, fragment, label } = pageSections[sectionName];

    if (!plugin[key]) return null;

    return (
      <li key={key} className="list-disc underline">
        <Link to={`#${fragment}`}>{label}</Link>
      </li>
    );
  });

  return (
    <>
      <div className="mb-4">
        <Title>Table of Contents</Title>
      </div>

      <ul className="pl-6">{listItems}</ul>
    </>
  );
};

const Sidebar = ({ plugin, pageSections }) => {
  const { availableOnRoadie, roadieDocsPath, npmPackageName, codeLocation } = plugin;

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
        <NpmDetailsList npmData={npmData} npmDataLoadingState={npmDataLoadingState} />
      </div>

      <div className="mb-10">
        <MaintainersList npmData={npmData} npmDataLoadingState={npmDataLoadingState} />
      </div>
    </div>
  );
};

export default Sidebar;
