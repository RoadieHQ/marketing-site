import React from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { PopoverButton } from '@headlessui/react';

const OpenMenuButton = () => (
  <PopoverButton className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
    <span className="sr-only">Open menu</span>
    <MenuIcon className="h-6 w-6" aria-hidden="true" />
  </PopoverButton>
);

export default OpenMenuButton;
