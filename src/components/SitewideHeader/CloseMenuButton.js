import React from 'react';
import { XIcon } from '@heroicons/react/outline';
import { Popover } from '@headlessui/react';

const CloseMenuButton = () => (
  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
    <span className="sr-only">Close menu</span>
    <XIcon className="h-6 w-6" aria-hidden="true" />
  </Popover.Button>
);

export default CloseMenuButton;
