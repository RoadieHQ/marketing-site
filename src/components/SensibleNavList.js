import React from 'react';

import { ChevronRightIcon } from '@heroicons/react/solid';
import { TextLink as Link, Lead } from 'components';
import { BookOpenIcon, ChatIcon, ShieldCheckIcon, AcademicCapIcon } from '@heroicons/react/outline';

const LINKS = [
  {
    title: 'Documentation',
    description: 'Set up your Roadie Backstage experience.',
    to: '/docs/',
    icon: AcademicCapIcon,
  },
  {
    title: 'Blog',
    description: 'Read our posts on Backstage and Roadie.',
    to: '/blog/',
    icon: BookOpenIcon,
  },
  {
    title: 'Case Studies',
    description: 'How organisations succeed with Backstage',
    to: '/case-studies/',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Chat with us on Discord',
    description: 'Get support or provide feedback.',
    to: 'https://discord.gg/W3qEMhmx4f',
    icon: ChatIcon,
  },
];

const NavigationListItem = ({ link }) => (
  <li className="relative py-6 flex items-start space-x-4">
    <div className="flex-shrink-0">
      <span className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50">
        <link.icon className="h-6 w-6 text-indigo-700" aria-hidden="true" />
      </span>
    </div>

    <div className="min-w-0 flex-1">
      <h3 className="text-base font-medium text-gray-900">
        <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
          <Link to={link.to} color="primary">
            <span className="absolute inset-0" aria-hidden="true" />
            {link.title}
          </Link>
        </span>
      </h3>

      <p className="text-base text-gray-500">{link.description}</p>
    </div>

    <div className="flex-shrink-0 self-center">
      <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
    </div>
  </li>
);

const SensibleNavList = ({ lead = `Let's go somewhere sensible`, links = LINKS }) => (
  <div>
    <div className="mb-2 text-center">
      <Lead>{lead}</Lead>
    </div>

    <ul className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
      {links.map((link, linkIdx) => (
        <NavigationListItem link={link} key={linkIdx} />
      ))}
    </ul>
  </div>
);

export default SensibleNavList;
