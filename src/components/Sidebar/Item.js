import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import Link from '../TextLink';
import classnames from 'classnames';

const SidebarItem = ({ text, className, external = false, to, ...rest }) => {
  const linkClasses = classnames(
    'py-1 block pr-8 no-underline outline-none text-gray-700 hover:text-primary-600 visited:text-gray-700',
    className
  );

  // For external links (opening in new tab), use a regular anchor tag
  // GatsbyLink doesn't support target="_blank" for internal navigation
  if (external) {
    return (
      <li>
        <a
          href={to}
          className={linkClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          <span className="inline-flex items-center gap-1">
            {text}
            <ExternalLinkIcon className="h-3 w-3 inline" />
          </span>
        </a>
      </li>
    );
  }

  // For regular internal links, use the Link component for client-side navigation
  return (
    <li>
      <Link
        to={to}
        className={linkClasses}
        activeClassName="bg-gray-200 text-primary-700"
        {...rest}
      >
        <span className="inline-flex items-center gap-1">
          {text}
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;
