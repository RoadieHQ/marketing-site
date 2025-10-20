import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  CodeIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  PlusCircleIcon,
  NewspaperIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  LockClosedIcon,
} from '@heroicons/react/outline';

import MobileFreeTrialButton from './MobileFreeTrialButton';
import MobileDropdownNavItem from './MobileDropdownNavItem';
import DrawerMenuHeader from './DrawerMenuHeader';

const subItems = [
  {
    name: 'Roadie’s Catalog: software, teams & resources',
    to: '/product/catalog/',
    icon: NewspaperIcon,
  },
  {
    name: 'Roadie’s Scaffolder: create and expand',
    to: '/product/scaffolder/',
    icon: PlusCircleIcon,
  },
  {
    name: 'Tech Docs: centralized yet distributed',
    to: '/product/documentation/',
    icon: BookOpenIcon,
  },
  {
    name: 'Tech Insights: Scorecards for Backstage',
    to: '/product/tech-insights/',
    icon: CheckCircleIcon,
  },
  {
    name: 'Access Control: fine-grained control of your catalog',
    to: '/product/access-control/',
    icon: LockClosedIcon,
  },
  {
    name: 'Backstage Plugins Directory',
    to: '/backstage/plugins/',
    icon: CodeIcon,
  },
  {
    name: 'Backstage Weekly Newsletter',
    to: '/backstage-weekly/',
    icon: NewspaperIcon,
  },
  {
    name: 'Blog',
    to: '/blog/',
    icon: BookOpenIcon,
  },
  {
    name: 'Case Studies',
    to: '/case-studies/',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Documentation',
    to: '/docs/',
    icon: AcademicCapIcon,
  },
  {
    name: 'Careers',
    to: 'https://careers.roadie.io',
    icon: BriefcaseIcon,
  },
];

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
    <Popover.Panel
      focus
      className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20"
    >
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <DrawerMenuHeader />

          <div className="mt-6">
            <nav className="grid gap-y-8">
              {subItems.map((item) => (
                <MobileDropdownNavItem item={item} key={item.name} />
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
    </Popover.Panel>
  </Transition>
);

export default DrawerMenu;
