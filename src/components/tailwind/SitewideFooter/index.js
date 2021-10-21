import React from 'react';
import { Link } from 'components';

import BackstageLogo from './BackstageLogo';
import { LogoVector } from 'components/tailwind/Logo';

const TwitterIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const GitHubIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const navigation = {
  solutions: [
    { name: 'Product', href: '/tailwind/#product' },
    { name: 'Solutions', href: '/tailwind/#solutions' },
  ],

  support: [
    { name: 'Documentation', href: '/tailwind/docs/' },
    { name: 'Case Studies', href: '/tailwind/case-studies/' },
    { name: 'Backstage Plugins', href: '/tailwind/backstage/plugins/' },
  ],

  company: [
    { name: 'Blog', href: '/tailwind/blog/' },
    { name: 'Careers', href: 'https://careers.roadie.io' },
  ],

  legal: [
    { name: 'Terms', href: '/tailwind/legal-notices/terms-of-service/' },
    { name: 'Privacy', href: '/tailwind/legal-notices/privacy-policy/' },
    { name: 'Cookies', href: '/tailwind/legal-notices/cookies-policy/' },
  ],

  social: [{
    name: 'Twitter',
    href: 'https://twitter.com/roadiehq',
    icon: TwitterIcon,
  }, {
    name: 'GitHub',
    href: 'https://github.com/RoadieHQ',
    icon: GitHubIcon,
  }, {
    name: 'Backstage',
    href: 'https://backstage.io',
    icon: BackstageLogo,
  }],
};

const NavItem = ({ name, href }) => (
  <li key={name}>
    <Link to={href} className="text-base text-gray-500 hover:text-gray-900">
      {name}
    </Link>
  </li>
);

const SocialItem = ({ item }) => (
  <Link key={item.name} to={item.href} className="text-gray-400 hover:text-gray-500">
    <span className="sr-only">{item.name}</span>
    <item.icon className="h-6 w-6" aria-hidden="true" />
  </Link>
);

const SitewideFooter = ({ maxWidth = '7xl' }) => {
  return (
    <footer className="bg-white border-t-2 border-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className={`max-w-${maxWidth} mx-auto py-12 px-2 sm:px-6 lg:py-16 lg:px-8`}>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            {/* This color is text-gray-500 */}
            <LogoVector fill="rgb(107, 144, 128)" />

            <p className="text-gray-500 text-base">
              SaaS Backstage for scale-ups.
            </p>

            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <SocialItem item={item} key={item.name} />
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <NavItem {...item } key={item.name} />
                  ))}
                </ul>
              </div>

              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <NavItem {...item } key={item.name} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <NavItem {...item } key={item.name} />
                  ))}
                </ul>
              </div>

              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <NavItem {...item } key={item.name} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Larder Software Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SitewideFooter;
