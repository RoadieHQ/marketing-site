import React from 'react';
import { Link } from 'components';
import { TwitterIcon, GitHubIcon, BackstageIcon, RoadieRIcon } from 'components/icons';

import theme from '../../theme';

const navigation = {
  solutions: [
    { name: 'Product', href: '/#product' },
    { name: 'Solutions', href: '/#solutions' },
  ],

  support: [
    { name: 'Documentation', href: '/docs/getting-started/getting-started-for-admins/' },
    { name: 'Case Studies', href: '/case-studies/' },
    { name: 'Backstage Plugins', href: '/backstage/plugins/' },
  ],

  company: [
    { name: 'About', href: '/about/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Careers', href: 'https://careers.roadie.io' },
  ],

  legal: [
    { name: 'Terms', href: '/legal-notices/terms-of-service/' },
    { name: 'Privacy', href: '/legal-notices/privacy-policy/' },
    { name: 'Cookies', href: '/legal-notices/cookies-policy/' },
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
    icon: BackstageIcon,
  }],
};

const NavItem = ({ name, href }) => (
  <li key={name}>
    <Link
      to={href}
      id={`sitewide-footer-${name.toLowerCase()}`}
      className="text-base text-gray-500 hover:text-gray-900"
    >
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

const TitledLinkList = ({ title, linkListKey = title.toLowerCase() }) => (
  <>
    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{title}</h3>
    <ul className="mt-4 space-y-4">
      {navigation[linkListKey].map((item) => (
        <NavItem {...item } key={item.name} />
      ))}
    </ul>
  </>
);

const CopyrightNotice = () => (
  <p className="text-base text-gray-400 xl:text-center">
    &copy; {new Date().getFullYear()} Larder Software Limited. All rights reserved.
  </p>
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
            <RoadieRIcon fill={theme.COLORS_GRAY_500} stroke={theme.COLORS_GRAY_500} />

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
                <TitledLinkList title="Solutions" />
              </div>

              <div className="mt-12 md:mt-0">
                <TitledLinkList title="Support" />
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <TitledLinkList title="Company" />
              </div>

              <div className="mt-12 md:mt-0">
                <TitledLinkList title="Legal" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <CopyrightNotice />
        </div>
      </div>
    </footer>
  );
};

export default SitewideFooter;
