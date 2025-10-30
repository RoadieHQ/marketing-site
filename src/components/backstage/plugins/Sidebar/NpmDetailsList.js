import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Title } from 'components';

const DetailsListItem = ({ label, value, ...props }) => {
  return (
    <li
      className="border-b border-gray-200 py-2 flex justify-between"
      id={`npm-detail-${kebabCase(label)}`}
      {...props}
    >
      <span>{label}</span> <strong>{value}</strong>
    </li>
  );
};

const DownloadCountListItem = ({ packageData }) => {
  const { downloadCount, downloadCountPeriod } = packageData;
  if (downloadCountPeriod === 'THIS_YEAR') {
    return <DetailsListItem label="Downloads this year" value={downloadCount} />;
  }
  return <DetailsListItem label="Downloads in last month" value={downloadCount} />;
};

const FirstPublishedListItem = ({ packageData }) => {
  const { firstPublishedAgo, firstPublishedTime } = packageData;
  if (!firstPublishedTime) {
    return <DetailsListItem label="First published" value="Unknown" />;
  }

  return (
    <DetailsListItem
      label="First published"
      value={firstPublishedAgo}
      title={firstPublishedTime}
    />
  );
}

const NpmDetailsList = ({ packageData, packageDataLoadingState, title = 'Package details' }) => {
  if (packageDataLoadingState === 'error') return null;
  const {
    latestVersion,
    latestVersionPublishedAgo,
    latestVersionPublishedTime,
    numberOfVersions,
    license,
    lastSyncedTime,
    lastSyncedAgo,
  } = packageData;
  let inner;
  

  if (packageDataLoadingState === 'loaded') {
    inner = (
      <div>
        <ul className="mb-3">
          <DetailsListItem label="Version" value={latestVersion} />
          <DownloadCountListItem packageData={packageData} />
          <DetailsListItem
            label="Last published"
            value={latestVersionPublishedAgo}
            title={latestVersionPublishedTime}
          />
          <DetailsListItem label="Number of versions" value={numberOfVersions} />
          <FirstPublishedListItem packageData={packageData} />
          <DetailsListItem label="License" value={license} />
        </ul>

        <div
          className="flex justify-between text-gray-400"
          title={lastSyncedTime}
        >
          <span className="italic">Last synced:</span>
          <span>{lastSyncedAgo}</span>
        </div>
      </div>
    );
  } else {
    inner = (
      <div>
        <ul className="mb-3">
          {['Version', 'Downloads', 'Last published', 'Number of versions', 'First published', 'License'].map(label => (
            <li key={label} className="border-b border-gray-200 py-2 flex justify-between">
              <span className="text-gray-400">{label}</span>
              <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
            </li>
          ))}
        </ul>

        <div className="flex justify-between text-gray-400">
          <span className="italic">Last synced:</span>
          <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 rounded-lg mb-6">
      <div className="mb-4">
        <Title>{title}</Title>
      </div>

      {inner}
    </div>
  );
};

export default NpmDetailsList;
