import React, { Fragment } from 'react';
import { Popover, Transition, PopoverButton, PopoverPanel } from '@headlessui/react';
import classnames from 'classnames';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from 'components';

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

const TopNavDropdownItem = ({ text, subItems }) => {
  // Check if subItems is in the new format (array of objects with 'category' and 'items')
  const hasCategories = subItems.length > 0 && subItems[0].category !== undefined;

  // Determine appropriate styling based on layout
  const numCategories = hasCategories ? subItems.length : 1;
  const maxWidthClass = numCategories > 1 ? 'max-w-3xl' : 'max-w-sm';

  // Map number of categories to grid columns class
  const gridColsClass = hasCategories ? (
    numCategories === 2 ? 'grid-cols-2' :
    numCategories === 3 ? 'grid-cols-3' :
    numCategories === 4 ? 'grid-cols-4' :
    'grid-cols-2' // default to 2 columns for 5+ categories
  ) : '';

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <PopoverButton
            className={classnames(
              'group bg-white rounded-md inline-flex items-center font-bold tracking-wide hover:text-blueroadie focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
              { 'text-gray-900': !open, 'text-gray-500': open }
            )}
          >
            <span>{text}</span>
            <ChevronDownIcon
              className={classnames('ml-2 h-5 w-5 group-hover:text-gray-500 text-blueroadie')}
              aria-hidden="true"
            />
          </PopoverButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className={`absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen ${maxWidthClass} sm:px-0`}>
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                {hasCategories ? (
                  <div className={`relative grid ${gridColsClass} gap-4 bg-white px-2 py-4 sm:p-8`}>
                    {subItems.map((categoryGroup) => (
                      <div key={categoryGroup.category}>
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                          {categoryGroup.category}
                        </h3>
                        <div className="space-y-3">
                          {categoryGroup.items.map((item) => (
                            <DropdownNavItem item={item} key={item.name} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {subItems.map((item) => (
                      <DropdownNavItem item={item} key={item.name} />
                    ))}
                  </div>
                )}
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default TopNavDropdownItem;
