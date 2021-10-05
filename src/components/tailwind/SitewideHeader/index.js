import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CodeIcon,
  BookOpenIcon,
  ChatIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  MenuIcon,
  XIcon,
  SparklesIcon,
  DesktopComputerIcon,
  NewspaperIcon,
  BriefcaseIcon,
} from '@heroicons/react/outline'
import { Link } from 'components';
import { ChevronDownIcon } from '@heroicons/react/solid'
import classnames from 'classnames';

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

const mobileNavLinks = [{
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

const LogoImg = (props) => (
  <img
    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    alt="Workflow"
    {...props}
  />
);

const Logo = () => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <Link to="/tailwind/">
      <span className="sr-only">Workflow</span>
      <LogoImg className="h-8 w-auto sm:h-10" />
    </Link>
  </div>
);

const DropdownNavItem = ({ item }) => (
  <Link
    key={item.name}
    to={item.to}
    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
  >
    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
    <div className="ml-4">
      <p className="text-base font-medium text-gray-900">{item.name}</p>
      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
    </div>
  </Link>
);

const MobileDropdownNavItem = ({ item }) => (
  <Link
    key={item.name}
    to={item.to}
    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
  >
    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
  </Link>
);

const RequestDemoButton = () => (
  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
    <Link
      to="/tailwind/request-demo/"
      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
    >
      Request a demo
    </Link>
  </div>
);

const MobileFreeTrialButton = () => (
  <Link
    to="/tailwind/free-trial/"
    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
  >
    Free trial
  </Link>
);

const TopNavItem = ({ to, text }) => (
  <Link to={to} className="text-base font-medium text-gray-500 hover:text-gray-900">
    {text}
  </Link>
);

const CloseMenuButton = () => (
  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
    <span className="sr-only">Close menu</span>
    <XIcon className="h-6 w-6" aria-hidden="true" />
  </Popover.Button>
);

const OpenMenuButton = () => (
  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
    <span className="sr-only">Open menu</span>
    <MenuIcon className="h-6 w-6" aria-hidden="true" />
  </Popover.Button>
);

const SitewideHeader = () => {
  return (
    <Popover className="relative bg-white z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

          <Logo />

          <div className="-mr-2 -my-2 md:hidden">
            <OpenMenuButton />
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <TopNavItem to="/tailwind/#product" text="Product" />
            <TopNavItem to="/tailwind/#solutions" text="Solutions" />
            <TopNavItem to="/tailwind/backstage-weekly/" text="Backstage Weekly" />

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={
                      classnames(
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                        { 'text-gray-900': open, 'text-gray-500': !open },
                      )
                    }
                  >
                    <span>Learn</span>
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
                          {learn.map((item) => (
                            <DropdownNavItem item={item} key={item.name} />
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <RequestDemoButton />
        </div>
      </div>

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
                  <LogoImg className="h-8 w-auto" />
                </div>

                <div className="-mr-2">
                  <CloseMenuButton />
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {mobileNavLinks.map((item) => (
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
    </Popover>
  );
};

export default SitewideHeader;
