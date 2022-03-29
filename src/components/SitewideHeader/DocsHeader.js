import React from 'react';
import { Popover } from '@headlessui/react';

import { AlgoliaAutocomplete } from 'components/AlgoliaAutocomplete';
import { Button } from 'components';

import Logo from '../Logo';

const DocsHeader = () => (
  <Popover className="relative bg-white z-20">
    <div className="max-w-full mx-auto px-2 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

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
    </div>
  </Popover>
);

export default DocsHeader;
