import React, { useState } from 'react';
import { ClipboardCopyIcon, CheckIcon } from '@heroicons/react/outline';

import Logo from '../plugins/Logo';

const PackageHeader = ({ packageName, logoImage }) => {
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
    <div className="col-span-full pt-2 mt-4 group flex items-center gap-2 min-w-0">
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
  );
};

export default PackageHeader;
