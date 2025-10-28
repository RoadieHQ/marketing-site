import React from 'react';
import { Headline, Link, CopyToClipboardButton } from 'components';
import { useBackLinkWithSearchParams } from 'hooks/useSearchParamsStorage';

const Header = ({ action }) => {
  const backLink = useBackLinkWithSearchParams('actionsPageSearchParams', '/backstage/scaffolder-actions/');
  const packageName = action.containedInPackage?.npmPackageName;

  return (
    <div className="mx-auto max-w-7xl">
      <div className="px-4 xl:px-0 mb-10">
        <Link to={backLink} className="font-bold text-blueroadie">
          <span className="text-orange-500">←</span> Backstage Scaffolder Actions
        </Link>
      </div>

      <header className="px-4 xl:px-0">
        <Headline size="small">{action.humanName || action.actionId}</Headline>

        <div className="text-base text-gray-600 mt-2">
          <strong className="block md:inline-block">Action ID: </strong>
          <code className="bg-gray-100 px-2 py-1 rounded">{action.actionId}</code>
        </div>

        {packageName && (
          <div className="group md:flex items-center gap-2 mt-2 min-w-0">
            <strong>NPM Package: </strong>
            <div className="flex items-center">
              <p className="text-base text-gray-600 truncate">{packageName}</p>
              <CopyToClipboardButton textToCopy={packageName} />
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
