import React from 'react'
import { Popover } from '@headlessui/react'
import {
  CodeIcon,
  BookOpenIcon,
  ChatIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  PlayIcon,
} from '@heroicons/react/outline';

import Logo from '../Logo';
import TopNavItem from './TopNavItem';
import RequestDemoButton from './RequestDemoButton';
import OpenMenuButton from './OpenMenuButton';
import TopNavDropdownItem from './TopNavDropdownItem';
import DrawerMenu from './DrawerMenu';

const learn = [{
  name: 'Backstage Bites',
  description: 'Short videos to teach Backstage concepts.',
  to: '/backstage-bites/',
  icon: PlayIcon,
}, {
  name: 'Backstage Plugins',
  description: 'Browse our Backstage plugin marketplace.',
  to: '/backstage/plugins/',
  icon: CodeIcon,
}, {
  name: 'Blog',
  description: 'Read our posts on Backstage and Roadie.',
  to: '/blog/',
  icon: BookOpenIcon,
}, {
  name: 'Case Studies',
  description: "How organisations succeed with Backstage",
  to: '/case-studies/',
  icon: ShieldCheckIcon
}, {
  name: 'Documentation',
  description: "Set up your Roadie Backstage experience.",
  to: '/docs/getting-started/getting-started-for-admins/',
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
      <Popover className="relative bg-white z-20">
        <div className={`max-w-${maxWidth} mx-auto px-2 sm:px-6`}>
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

            <Logo />

            <div className="-mr-2 -my-2 md:hidden">
              <OpenMenuButton />
            </div>

            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <TopNavItem to="/#product" text="Product" />
              <TopNavItem to="/#solutions" text="Solutions" />
              <TopNavItem to="/pricing/" text="Pricing" />
              <TopNavItem to="/backstage-weekly/" text="Backstage Weekly" />
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
