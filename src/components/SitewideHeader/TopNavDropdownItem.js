import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
import classnames from 'classnames';
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'components';

const DropdownNavItem = ({ item }) => (
  <Link
    key={item.name}
    to={item.to}
    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
  >
    <item.icon className="flex-shrink-0 h-6 w-6 text-primary-600" aria-hidden="true" />
    <div className="ml-4">
      <p className="text-base font-medium text-gray-900">{item.name}</p>
      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
    </div>
  </Link>
);

const TopNavDropdownItem = ({ text, subItems }) => (
  <Popover className="relative">
    {({ open }) => (
      <>
        <Popover.Button
          className={
            classnames(
              'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
              { 'text-gray-900': open, 'text-gray-500': !open },
            )
          }
        >
          <span>{text}</span>
          <ChevronDownIcon
            className={
              classnames(
                'ml-2 h-5 w-5 group-hover:text-gray-500',
                { 'text-gray-600': open, 'text-gray-400': !open },
              )
            }
            aria-hidden="true"
          />
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
          <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">

              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                {subItems.map((item) => (
                  <DropdownNavItem item={item} key={item.name} />
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);

export default TopNavDropdownItem;
