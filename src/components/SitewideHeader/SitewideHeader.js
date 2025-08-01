import React from 'react';
import { Popover } from '@headlessui/react';
import classnames from 'classnames';
import {
  CodeIcon,
  BookOpenIcon,
  ChatIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  PlayIcon,
  NewspaperIcon,
  PlusCircleIcon,
  CheckCircleIcon,
  LockClosedIcon,
} from '@heroicons/react/outline';
import { Button } from 'components';
import { PAGE_PATHS } from '../../contactFormConstants';

import Logo from '../Logo';
import TopNavItem from './TopNavItem';
import OpenMenuButton from './OpenMenuButton';
import TopNavDropdownItem from './TopNavDropdownItem';
import DrawerMenu from './DrawerMenu';
import TopBanner from 'components/TopBanner';
import McpServers from '../TopBanner/McpServers';

const features = [
  {
    name: 'Catalog: Software, teams & resources',
    description: 'All your tech assets on a single glass pane.',
    to: '/product/catalog/',
    icon: NewspaperIcon,
  },
  {
    name: 'Scaffolder: Create and expand',
    description: 'Accelerate your development initatives.',
    to: '/product/scaffolder/',
    icon: PlusCircleIcon,
  },
  {
    name: 'Docs: Centralized yet distributed',
    description: 'Find everyone’s docs in the same place.',
    to: '/product/documentation/',
    icon: BookOpenIcon,
  },
  {
    name: 'Access Control: Secure and transparent',
    description: 'Role-based access control based on fine-grained permissions.',
    to: '/product/access-control/',
    icon: LockClosedIcon,
  },
  {
    name: 'Tech Insights: Scorecards for Backstage',
    description: 'Measure and improve software quality.',
    to: '/product/tech-insights/',
    icon: CheckCircleIcon,
  },
];

const learn = [
  {
    name: 'Backstage Bites',
    description: 'Short videos to teach Backstage concepts.',
    to: '/backstage-bites/',
    icon: PlayIcon,
  },
  {
    name: 'Backstage Plugins',
    description: 'Browse our Backstage plugin marketplace.',
    to: '/backstage/plugins/',
    icon: CodeIcon,
  },
  {
    name: 'Backstage Weekly',
    description: 'Read our weekly Backstage newsletter.',
    to: '/backstage-weekly/',
    icon: NewspaperIcon,
  },
  {
    name: 'Blog',
    description: 'Read our posts on Backstage and Roadie.',
    to: '/blog/',
    icon: BookOpenIcon,
  },
  {
    name: 'Case Studies',
    description: 'How organisations succeed with Backstage',
    to: '/case-studies/',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Chat with us on Discord',
    description: 'Get support or provide feedback.',
    to: 'https://discord.gg/W3qEMhmx4f',
    icon: ChatIcon,
  },
  {
    name: 'Documentation',
    description: 'Set up your Roadie Backstage experience.',
    to: '/docs/',
    icon: AcademicCapIcon,
  },
];

const SitewideHeader = ({
  maxWidth = '7xl',
  borderBottom = true,
  ctaTo = PAGE_PATHS.requestDemo,
  ctaText = 'Get a Demo',
}) => (
  <>
    <Popover as={React.Fragment}>
      <>
        <TopBanner>
          <McpServers />
        </TopBanner>
        <header
          className={classnames(
            ` max-w-${maxWidth} mx-auto px-2 py-6 sm:px-6 xl:py-8 flex justify-between items-center  md:justify-start md:space-x-10`,
            {
              'border-b-2 border-gray-100': borderBottom,
            }
          )}
        >
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Logo />
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <OpenMenuButton />
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <TopNavDropdownItem text="Product" subItems={features} />
            <TopNavItem to="/backstage-comparison/" text="Roadie vs Backstage" />
            <TopNavItem to="/pricing/" text="Pricing" />
            <TopNavDropdownItem text="Resources" subItems={learn} />
          </Popover.Group>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button link={true} color="primary" size="small" to={ctaTo} text={ctaText} />
          </div>
        </header>

        <DrawerMenu />
      </>
    </Popover>
  </>
);

export default SitewideHeader;
