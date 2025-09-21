import React from 'react';
import { Link } from 'components';
import { GitHubIcon, BackstageIcon, LinkedinIcon } from 'components/icons';
import camelCase from 'lodash/camelCase';

// import soc2Seal from '../../../content/assets/logos/soc2/aicpa.jpg';

// import theme from '../../theme';

const navigation = {
  product: [
    { name: 'Catalog', href: '/product/catalog' },
    { name: 'Scaffolder', href: '/product/scaffolder' },
    { name: 'TechDocs', href: '/product/documentation' },
    { name: 'Tech Insights', href: '/product/tech-insights' },
    { name: 'Access Control', href: '/product/access-control' },
  ],

  support: [
    { name: 'Documentation', href: '/docs/' },
    { name: 'Case Studies', href: '/case-studies/' },
    { name: 'Backstage Plugins', href: '/backstage/plugins/' },
    { name: 'FAQs', href: '/faqs/' },
    { name: 'Changelog', href: '/changelog/' },
    { name: 'Backstage Bites', href: '/backstage-bites/' },
    { name: 'Backstage Weekly', href: '/backstage-weekly/' },
  ],

  company: [
    { name: 'About', href: '/about/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Careers', href: 'https://careers.roadie.io' },
  ],

  legalSecurity: [
    { name: 'Terms', href: '/legal-notices/terms-of-service/' },
    { name: 'Privacy', href: '/legal-notices/privacy-notice/' },
    { name: 'Cookies', href: '/legal-notices/cookies-policy/' },
  ],

  social: [{
    name: 'Linkedin',
    href: 'https://www.linkedin.com/company/43197350',
    icon: LinkedinIcon,
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

const TitledLinkList = ({ title, linkListKey = camelCase(title) }) => (
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
    <footer className="border-t-2 border-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className={`max-w-${maxWidth} mx-auto py-12 px-2 sm:px-6 lg:py-16 lg:px-8`}>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4 xl:col-span-1">
            {/*
            <RoadieRacksIcon fill={theme.COLORS_GRAY_500} />
            */}

            <p className="text-gray-500 text-base">
              SaaS Backstage
            </p>

            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <SocialItem item={item} key={item.name} />
              ))}
            </div>

            <div className="flex items-center">
              {/*
              <img
                src={soc2Seal}
                className="mr-2 h-8 w-8"
                alt="AICPA seal. Blue circle with the name AICPA inside."
              />
              */}
              <p className="text-base text-gray-500">Roadie has gained SOC2 Type 2 compliance</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <TitledLinkList title="Product" />
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
                <TitledLinkList title="Legal & Security" />
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
