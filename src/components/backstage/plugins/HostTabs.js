import React from 'react';
import ExternalLinkIcon from '@heroicons/react/outline/ExternalLinkIcon';
import { Link } from 'components';

const HostTabs = ({ docsLink }) => (
  <nav className="mb-8 mx-[-1rem] px-[1rem] flex flex-wrap items-center text-center border-b-2 border-gray-200">
    <span className="inline-block p-4 text-blueroadie font-bold bg-gray-elusivegray border-2 border-gray-200 border-b-elusivegray rounded-t-lg mb-[-2px]">
      Self-hosted Backstage
    </span>
    {docsLink && !docsLink.includes('null') && (
      <Link
        to={docsLink}
        className="inline-block p-2 px-4 ml-4 bg-gray-100 text-blueroadie font-bold rounded-lg hover:bg-gray-100 hover:text-orange-600 flex align-center"
      >
        No-code via Roadie <ExternalLinkIcon className="inline-block w-4 ml-2" />
      </Link>
    )}
  </nav>
);

export default HostTabs;
