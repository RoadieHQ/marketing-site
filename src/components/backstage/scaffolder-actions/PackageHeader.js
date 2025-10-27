import React from 'react';
import { CalendarIcon, ChartBarIcon } from '@heroicons/react/outline';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import ContentLoader from 'react-content-loader';
import { CopyToClipboardButotn } from 'components';

import Logo from '../plugins/Logo';

const DownloadCount = ({ packageData }) => {
  const { downloadCount, downloadCountPeriod } = packageData;
  if (!downloadCount) return null;
  let textPeriod = 'monthly downloads';
  if (downloadCountPeriod === 'THIS_YEAR') {
    textPeriod = 'downloads this year';
  }
  return (
    <div className="flex">
      <span>
        <ChartBarIcon className="inline-block w-4 mr-1" />
      </span>
      <span>{downloadCount.toLocaleString()} {textPeriod}</span>
    </div>
  );
};

const PackageDataDisplay = ({ packageData, packageDataLoadingState }) => {
  if (packageDataLoadingState === 'error') return null;

  console.log('packageData', packageData);

  if (packageDataLoadingState === 'loaded') {
    const { latestVersionPublishedTime } = packageData;

    return (
      <div className="flex text-xs text-gray-500 gap-4">
        {latestVersionPublishedTime && (
          <div title={new Date(latestVersionPublishedTime).toISOString()} className="flex items-center">
            <CalendarIcon className="inline-block w-4 mr-1" />
            <span>Updated {formatDistanceToNowStrict(new Date(latestVersionPublishedTime))} ago</span>
          </div>
        )}

        <DownloadCount packageData={packageData} />
      </div>
    );
  }

  // Loading state
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={16}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="3" ry="3" width="120" height="16" />
      <rect x="140" y="0" rx="3" ry="3" width="150" height="16" />
    </ContentLoader>
  );
};

const PackageHeader = ({ packageName, logoImage, packageData, packageDataLoadingState }) => {
  return (
    <div className="col-span-full pt-2 mt-4 min-w-0">
      <div className="group flex items-center gap-2 mb-2">
        {logoImage?.gatsbyImageData && (
          <div className="flex-shrink-0">
            <Logo
              gatsbyImageData={logoImage.gatsbyImageData}
              alt={`${packageName} logo`}
              minHeight={80}
              className="flex items-center"
            />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl font-bold text-gray-600 truncate min-w-0 flex-1">{packageName}</h3>
            <div className="flex-shrink-0">
              <CopyToClipboardButotn textToCopy={packageName} />
            </div>
          </div>
          <PackageDataDisplay packageData={packageData} packageDataLoadingState={packageDataLoadingState} />
        </div>
      </div>
    </div>
  );
};

export default PackageHeader;
