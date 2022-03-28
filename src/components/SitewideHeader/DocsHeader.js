import React from 'react';
import { Popover } from '@headlessui/react';
import classnames from 'classnames';

import { AlgoliaAutocomplete } from 'components/AlgoliaAutocomplete';
import { Button, Link } from 'components';

import Logo from '../Logo';

const Tab = ({ to, text }) => {
  const isActive = location.pathname === to;
  return (
    <div className="flex">
      <Link to={to}>
        <div className="pb-2 relative mr-8">
          <span className={classnames('text-base text-center', { 'text-primary-600': isActive })}>
            {text}
          </span>
          <span className={classnames('bg-primary-600 h-1 right-0 left-0 bottom-0', { 'absolute': isActive, 'hidden': !isActive })} />
        </div>
      </Link>
    </div>
  );
};

const DocsHeader = ({ location }) => (
  <Popover className="relative bg-white z-20">
    <div className="max-w-full mx-auto px-2 sm:px-6">
      <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">

        <div className="flex items-center">
          <span>
            <Logo />
          </span>

          <span className="text-2xl text-bold">
            Docs
          </span>

          <span className="ml-8">
            <AlgoliaAutocomplete placeholder="Search" className="w-36 md:w-96" />
          </span>
        </div>

        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Button link={true} color="primary" to="/free-trial/" text="Try it free" size="small" />
        </div>
      </div>

      <nav className="border-b-2 border-gray-100 flex">
        <Tab
          to="/docs/getting-started/install-github-app/"
          text="Getting started"
          isFirst={true}
          location={location}
        />

        <Tab to="/docs/plugins/argocd/" text="Plugins" location={location} />
        <Tab to="/docs/plugins/github-app-permissions/" text="Details" location={location} />
      </nav>
    </div>
  </Popover>
);

export default DocsHeader;
