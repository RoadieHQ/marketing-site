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
} from '@heroicons/react/outline';
import { Button } from 'components';

import Logo from '../Logo';
import TopNavItem from './TopNavItem';
import OpenMenuButton from './OpenMenuButton';
import TopNavDropdownItem from './TopNavDropdownItem';
import DrawerMenu from './DrawerMenu';
import TopBanner from 'components/TopBanner';
import WhitepaperVs from '../TopBanner/Whitepaper';

const features = [
  {
    name: 'Catalog: software, teams & resources',
    description: 'All your tech assets on a single glass pane.',
    to: '/product/catalog/',
    icon: NewspaperIcon,
  },
  {
    name: 'Scaffolder: create and expand',
    description: 'Accelerate your development initatives.',
    to: '/product/scaffolder/',
    icon: PlusCircleIcon,
  },
  {
    name: 'Docs: centralized yet distributed',
    description: 'Find everyone’s docs in the same place.',
    to: '/product/documentation/',
    icon: BookOpenIcon,
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
    name: 'Documentation',
    description: 'Set up your Roadie Backstage experience.',
    to: '/docs/',
    icon: AcademicCapIcon,
  },
  {
    name: 'Chat with us on Discord',
    description: 'Get support or provide feedback.',
    to: 'https://discord.gg/W3qEMhmx4f',
    icon: ChatIcon,
  },
];

const SitewideHeader = ({
  ctaTo = '/request-demo/',
  ctaText = 'Get a Demo',
}) => (
  <>
    <Popover as={React.Fragment}>
      <>
        <TopBanner>
          <WhitepaperVs />
        </TopBanner>
        <header
          className={classnames(
            ` fml-wtf`,
          )}
        >
          <div className='Flex row'>
            <div className="">
              <Logo />
            </div>

            <div className='Container'>
              <div className="-mr-2 -my-2 md:hidden">
                <OpenMenuButton />
              </div>

              <Popover.Group as="nav" className="Flex row ai-center gap-6">
                <TopNavDropdownItem text="Product" subItems={features} />
                <TopNavDropdownItem text="Resources" subItems={learn} />
                <TopNavItem to="/case-studies/" text="Customers" />
                <TopNavItem to="/pricing/" text="Pricing" />
                <TopNavItem to="/backstage-weekly/" text="Backstage Weekly" />
              </Popover.Group>
            </div>

            <div className="">
              <Button className="Button size-1 accent" link={true} color="primary" size="small" to={ctaTo} text={ctaText} />
            </div>
          </div>
        </header>

        <DrawerMenu />
      </>
    </Popover>
  </>
);

export default SitewideHeader;
