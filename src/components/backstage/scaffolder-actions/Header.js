import React, { useState } from 'react';
import { ClipboardCopyIcon, CheckIcon } from '@heroicons/react/outline';
import { Headline, Link } from 'components';

const Header = ({ action }) => {
  const [copied, setCopied] = useState(false);
  const packageName = action.containedInPackage?.npmPackageName;

  const handleCopy = async () => {
    if (!packageName) return;

    try {
      await navigator.clipboard.writeText(packageName);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      <div className="px-4 xl:px-0 mb-10">
        <Link to="/backstage/scaffolder-actions/" className="font-bold text-blueroadie">
          <span className="text-orange-500">←</span> Backstage Scaffolder Actions
        </Link>
      </div>

      <header className="px-4 xl:px-0 mb-10">
        <Headline size="small">{action.humanName || action.actionId}</Headline>

        <div className="text-base text-gray-600 mt-2">
          <code className="bg-gray-100 px-2 py-1 rounded">{action.actionId}</code>
        </div>

        {packageName && (
          <div className="group flex items-center gap-2 mt-2 min-w-0">
            <p className="text-base text-gray-600 truncate">{packageName}</p>
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
        )}
      </header>
    </div>
  );
};

export default Header;
