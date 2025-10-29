import React, { useState } from 'react';
import { ClipboardCopyIcon, CheckIcon } from '@heroicons/react/outline';

const CopyToClipboardButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center p-1 rounded hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 flex-shrink-0 ${
        copied ? 'opacity-100' : 'opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100'
      }`}
      title={copied ? 'Copied!' : 'Copy package name'}
    >
      {copied ? (
        <CheckIcon className="h-5 w-5 text-green-600" />
      ) : (
        <ClipboardCopyIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
      )}
    </button>
  );
};

export default CopyToClipboardButton;
