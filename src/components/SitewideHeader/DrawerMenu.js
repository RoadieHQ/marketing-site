import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
import {
  CodeIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  SparklesIcon,
  DesktopComputerIcon,
  NewspaperIcon,
  BriefcaseIcon,
} from '@heroicons/react/outline'
import { RoadieIcon } from 'components/icons';

import CloseMenuButton from './CloseMenuButton';
import MobileFreeTrialButton from './MobileFreeTrialButton';
import MobileDropdownNavItem from './MobileDropdownNavItem';

const subItems = [{
  name: 'Product',
  to: '/tailwind/#product',
  icon: SparklesIcon,
}, {
  name: 'Solutions',
  to: '/tailwind/#solutions',
  icon: DesktopComputerIcon,
}, {
  name: 'Backstage Plugins',
  to: '/tailwind/backstage/plugins/',
  icon: CodeIcon,
}, {
  name: 'Backstage Weekly',
  to: '/tailwind/backstage-weekly/',
  icon: NewspaperIcon,
}, {
  name: 'Blog',
  to: '/tailwind/blog/',
  icon: BookOpenIcon,
}, {
  name: 'Case Studies',
  to: '/tailwind/case-studies/',
  icon: ShieldCheckIcon
}, {
  name: 'Documentation',
  to: '/tailwind/docs/',
  icon: AcademicCapIcon,
}, {
  name: 'Careers',
  to: 'https://careers.roadie.io',
  icon: BriefcaseIcon,
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
    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">

          <div className="flex items-center justify-between">
            <div>
              <RoadieIcon />
            </div>

            <div className="-mr-2">
              <CloseMenuButton />
            </div>
          </div>

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
