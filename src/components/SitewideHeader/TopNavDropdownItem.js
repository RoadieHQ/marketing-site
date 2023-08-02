import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Link } from 'components';
import { CaretDownIcon } from 'components/icons';

const DropdownNavItem = ({ item }) => (
  <Link
    key={item.name}
    to={item.to}
    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
  >
    <item.icon className="flex-shrink-0 h-6 w-6 text-primary-600" aria-hidden="true" />
    <div className="ml-4">
      <p className="text-base font-bold tracking-wide text-gray-900">{item.name}</p>
      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
    </div>
  </Link>
);

const TopNavDropdownItem = ({ text, subItems }) => (
  <Popover className="relative">
    <div>
      <Popover.Button className='HoverMenuTrigger'>
        {text}
        <CaretDownIcon />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-sm sm:px-0">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              {subItems.map((item) => (
                <DropdownNavItem item={item} key={item.name} />
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </div>
  </Popover>
);

export default TopNavDropdownItem;
