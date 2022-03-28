import React from 'react';
import { Popover } from '@headlessui/react';
import classnames from 'classnames';

import { AlgoliaAutocomplete } from 'components/AlgoliaAutocomplete';
import { Button, Link } from 'components';
import { DOCS_LAYOUTS } from 'components/doc';

import OpenMenuButton from './OpenMenuButton';
import DocsDrawerMenu from './DocsDrawerMenu';
import Logo from '../Logo';

const Tab = ({ startPath, tabLabel: label, isActive }) => {
  const chipClassName = classnames('bg-primary-600 h-1 right-0 left-0 bottom-0', {
    'absolute': isActive,
    'hidden': !isActive,
  });

  return (
    <div className="flex">
      <Link to={startPath}>
        <div className="pb-2 relative mr-8">
          <span className={classnames('text-base text-center', { 'text-primary-600': isActive })}>
            {label}
          </span>
          <span className={chipClassName} />
        </div>
      </Link>
    </div>
  );
};

const DocsHeader = ({ location }) => (
  <Popover className="relative bg-white z-20">
    <div className="max-w-full mx-auto px-2 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 md:border-b-0 py-4 md:justify-start md:space-x-10">

        <div className="flex items-center">
          <span>
            <Logo />
          </span>

          <span className="text-2xl text-bold">
            Docs
          </span>

          <span className="ml-8">
            <AlgoliaAutocomplete placeholder="Search docs..." className="w-36 md:w-96" />
          </span>
        </div>

        <div className="-mr-2 -my-2 md:hidden">
          <OpenMenuButton />
        </div>

        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Button link={true} color="primary" to="/free-trial/" text="Try it free" size="small" />
        </div>
      </div>

      <nav className="hidden border-b-2 border-gray-100 md:flex">
        {DOCS_LAYOUTS.map((props) => (
          <Tab
            location={location}
            {...props}
            key={props.startPath}
            isActive={location.pathname.match(props.isActiveMatch)}
          />
        ))}
      </nav>
    </div>

    <DocsDrawerMenu />
  </Popover>
);

export default DocsHeader;
