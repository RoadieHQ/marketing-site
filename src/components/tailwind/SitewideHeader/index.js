import React from 'react'
import { Popover } from '@headlessui/react'
import {
  CodeIcon,
  BookOpenIcon,
  ChatIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
} from '@heroicons/react/outline'
import TopBanner from 'components/tailwind/TopBanner';
import Unconference from 'components/tailwind/TopBanner/Unconference';

import Logo from '../Logo';
import TopNavItem from './TopNavItem';
import RequestDemoButton from './RequestDemoButton';
import OpenMenuButton from './OpenMenuButton';
import TopNavDropdownItem from './TopNavDropdownItem';
import DrawerMenu from './DrawerMenu';

const learn = [{
  name: 'Backstage Plugins',
  description: 'Browse our Backstage plugin marketplace.',
  to: '/tailwind/backstage/plugins/',
  icon: CodeIcon,
}, {
  name: 'Blog',
  description: 'Read our posts on Backstage and Roadie.',
  to: '/tailwind/blog/',
  icon: BookOpenIcon,
}, {
  name: 'Case Studies',
  description: "How organisations succeed with Backstage",
  to: '/tailwind/case-studies/',
  icon: ShieldCheckIcon
}, {
  name: 'Documentation',
  description: "Set up your Roadie Backstage experience.",
  to: '/tailwind/docs/',
  icon: AcademicCapIcon,
}, {
  name: 'Chat with us on Discord',
  description: 'Get support or provide feedback.',
  to: 'https://discord.gg/W3qEMhmx4f',
  icon: ChatIcon,
}];

const SitewideHeader = ({ maxWidth = '7xl' }) => {
  return (
    <>
      <TopBanner>
        <Unconference />
      </TopBanner>

      <Popover className="relative bg-white z-20">
        <div className={`max-w-${maxWidth} mx-auto px-2 sm:px-6`}>
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

            <Logo />

            <div className="-mr-2 -my-2 md:hidden">
              <OpenMenuButton />
            </div>

            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <TopNavItem to="/tailwind/#product" text="Product" />
              <TopNavItem to="/tailwind/#solutions" text="Solutions" />
              <TopNavItem to="/tailwind/backstage-weekly/" text="Backstage Weekly" />
              <TopNavDropdownItem text="Learn" subItems={learn} />
            </Popover.Group>

            <RequestDemoButton />
          </div>
        </div>

        <DrawerMenu />
      </Popover>
    </>
  );
};

export default SitewideHeader;
