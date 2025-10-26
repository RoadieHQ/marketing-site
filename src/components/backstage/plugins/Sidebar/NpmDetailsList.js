import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Title } from 'components';
import ContentLoader from 'react-content-loader';

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
      <ContentLoader
        speed={2}
        width={400}
        height={240}
        viewBox="0 0 400 240"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="3" ry="3" width="150" height="24" />
        <rect x="220" y="0" rx="3" ry="3" width="100" height="24" />
        <rect x="0" y="40" rx="3" ry="3" width="150" height="24" />
        <rect x="220" y="40" rx="3" ry="3" width="100" height="24" />
        <rect x="0" y="80" rx="3" ry="3" width="150" height="24" />
        <rect x="220" y="80" rx="3" ry="3" width="100" height="24" />
        <rect x="0" y="120" rx="3" ry="3" width="150" height="24" />
        <rect x="220" y="120" rx="3" ry="3" width="100" height="24" />
        <rect x="0" y="160" rx="3" ry="3" width="150" height="24" />
        <rect x="220" y="160" rx="3" ry="3" width="100" height="24" />
        <rect x="0" y="200" rx="3" ry="3" width="150" height="24" />
        <rect x="220" y="200" rx="3" ry="3" width="100" height="24" />
        <rect x="0" y="240" rx="3" ry="3" width="150" height="24" />
        <rect x="220" y="240" rx="3" ry="3" width="100" height="24" />
      </ContentLoader>
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
