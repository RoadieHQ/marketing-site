import React, { Fragment } from 'react';
import { Transition, PopoverPanel } from '@headlessui/react';
import {
  CodeIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  PlusCircleIcon,
  NewspaperIcon,
  CheckCircleIcon,
  LockClosedIcon,
} from '@heroicons/react/outline';

import MobileFreeTrialButton from './MobileFreeTrialButton';
import MobileDropdownNavItem from './MobileDropdownNavItem';
import DrawerMenuHeader from './DrawerMenuHeader';

const subItems = [{
  category: 'Product',
  items: [{
    name: 'Roadie’s Catalog: software, teams & resources',
    to: '/product/catalog/',
    icon: NewspaperIcon,
  }, {
    name: 'Roadie’s Scaffolder: create and expand',
    to: '/product/scaffolder/',
    icon: PlusCircleIcon,
  }, {
    name: 'Tech Docs: centralized yet distributed',
    to: '/product/documentation/',
    icon: BookOpenIcon,
  }, {
    name: 'Tech Insights: Scorecards for Backstage',
    to: '/product/tech-insights/',
    icon: CheckCircleIcon,
  }, {
    name: 'Access Control: fine-grained control of your catalog',
    to: '/product/access-control/',
    icon: LockClosedIcon,
  }],
}, {
  category: 'Roadie',
  items: [{
    name: 'Blog',
    to: '/blog/',
    icon: BookOpenIcon,
  }, {
    name: 'Case Studies',
    to: '/case-studies/',
    icon: ShieldCheckIcon,
  }, {
    name: 'Documentation',
    to: '/docs/',
    icon: AcademicCapIcon,
  }],
}, {
  category: 'Backstage',
  items: [{
    name: 'Backstage Weekly Newsletter',
    to: '/backstage-weekly/',
    icon: NewspaperIcon,
  }, {
    name: 'Backstage Plugins Directory',
    to: '/backstage/plugins/',
    icon: CodeIcon,
  }, {
    name: 'Backstage Scaffolder Actions',
    to: '/backstage/scaffolder-actions/',
    icon: CodeIcon,
  }],
}];

const DrawerMenu = () => (
  <Transition
    as={Fragment}
    enter="duration-200 ease-out"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="duration-100 ease-in"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <PopoverPanel
      focus
      className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20"
    >
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <DrawerMenuHeader />

          <div className="mt-6">
            <nav className="space-y-6">
              {subItems.map((categoryGroup) => (
                <div key={categoryGroup.category}>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                    {categoryGroup.category}
                  </h3>
                  <div className="grid gap-y-6">
                    {categoryGroup.items.map((item) => (
                      <MobileDropdownNavItem item={item} key={item.name} />
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="py-6 px-5 space-y-6">
          <div>
            <MobileFreeTrialButton />
          </div>
        </div>
      </div>
    </PopoverPanel>
  </Transition>
);

export default DrawerMenu;
