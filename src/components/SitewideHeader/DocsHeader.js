import React from 'react';
import { Popover } from '@headlessui/react';

import Logo from '../Logo';
import OpenMenuButton from './OpenMenuButton';
import DrawerMenu from './DrawerMenu';
import { Button } from 'components';

const DocsHeader = () => (
  <Popover className="relative bg-white z-20">
    <div className="max-w-full mx-auto px-2 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

        <Logo />

        <div className="-mr-2 -my-2 md:hidden">
          <OpenMenuButton />
        </div>

        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Button link={true} color="primary" to="/free-trial/" text="Try it free" />
        </div>
      </div>
    </div>

    <DrawerMenu />
  </Popover>
);

export default DocsHeader;
