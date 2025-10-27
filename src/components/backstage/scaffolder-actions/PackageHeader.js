import React, { useState } from 'react';
import { ClipboardCopyIcon, CheckIcon, InboxInIcon, ChartBarIcon } from '@heroicons/react/outline';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import ContentLoader from 'react-content-loader';

import Logo from '../plugins/Logo';

const PackageDataDisplay = ({ packageData, packageDataLoadingState }) => {
  if (packageDataLoadingState === 'error') return null;

  if (packageDataLoadingState === 'loaded') {
    const { latestVersionPublishedTime, lastMonthDownloads } = packageData;

    return (
      <div className="flex text-xs text-gray-500 gap-4">
        {latestVersionPublishedTime && (
          <div title={new Date(latestVersionPublishedTime).toISOString()} className="flex items-center">
            <InboxInIcon className="inline-block w-4 mr-1" />
            <span>Updated {formatDistanceToNowStrict(new Date(latestVersionPublishedTime))} ago</span>
          </div>
        )}

        {lastMonthDownloads && (
          <div className="flex items-center">
            <ChartBarIcon className="inline-block w-4 mr-1" />
            <span>{lastMonthDownloads.toLocaleString()} monthly downloads</span>
          </div>
        )}
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
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(packageName);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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

        <h3 className="text-lg font-bold text-gray-600 truncate">{packageName}</h3>

        <button
          onClick={handleCopy}
          className={`inline-flex items-center p-1 rounded hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 flex-shrink-0 ${
            copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          title={copied ? 'Copied!' : 'Copy package name'}
        >
          {copied ? (
            <CheckIcon className="h-5 w-5 text-green-600" />
          ) : (
            <ClipboardCopyIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
          )}
        </button>
      </div>

      <PackageDataDisplay packageData={packageData} packageDataLoadingState={packageDataLoadingState} />
    </div>
  );
};

export default PackageHeader;
