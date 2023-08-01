import React from 'react';
import { Link } from 'components';
import { TwitterIcon, GitHubIcon, DiscordIcon, BackstageIcon, RoadieRacksIcon } from 'components/icons';
import camelCase from 'lodash/camelCase';

import soc2Seal from '../../../content/assets/logos/soc2/aicpa.jpg';

import theme from '../../theme';

const navigation = {
  product: [
    { name: 'Catalog', href: '/product/catalog' },
    { name: 'Scaffolder', href: '/product/scaffolder' },
    { name: 'Documentation', href: '/product/documentation' },
    { name: 'Tech Insights', href: '/product/tech-insights' },
  ],

  company: [
    { name: 'About', href: '/about/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Careers', href: 'https://careers.roadie.io' },
  ],

  resources: [
    { name: 'Docs', href: '/docs/' },
    { name: 'Case Studies', href: '/case-studies/' },
    { name: 'Backstage Plugins', href: '/backstage/plugins/' },
    { name: 'Changelog', href: '/changelog/' },
    { name: 'Backstage Bites', href: '/backstage-bites/' },
    { name: 'Terms', href: '/legal-notices/terms-of-service/' },
    { name: 'Privacy', href: '/legal-notices/privacy-notice/' },
    { name: 'Cookies', href: '/legal-notices/cookies-policy/' },
  ],


  social: [{
    name: 'Twitter',
    href: 'https://twitter.com/roadiehq',
    icon: TwitterIcon,
  }, {
    name: 'Discord',
    href: 'https://discord.com/invite/W3qEMhmx4f',
    icon: DiscordIcon,
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
  <li className='ListItem' key={name}>
    <Link
      to={href}
      id={`sitewide-footer-${name.toLowerCase()}`}
      className="Link highContrast"
    >
      <span className='Text size-3 inline'>
        {name}
      </span>
    </Link>
  </li>
);

const SocialItem = ({ item }) => (
  <a href={item.href} className="IconButton size-2 neutral">
    <span className="sr-only">{item.name}</span>
    <item.icon className="" aria-hidden="true" />
  </a>
);

const TitledLinkList = ({ title, linkListKey = camelCase(title) }) => (
  <div className='Flex column gap-3'>  
    <h3 className="Text size-3 weight-2">{title}</h3>
    <ul className="List gap-3">
      {navigation[linkListKey].map((item) => (
        <NavItem {...item } key={item.name} />
      ))}
    </ul>
  </div>
);

const CopyrightNotice = () => (
  <small className="Text size-3 lowContrast">
    &copy; {new Date().getFullYear()} Larder Software Ltd.
  </small>
);

const SitewideFooter = () => {
  return (
    <footer className="Section size-3">
      <div className='Container'>
        <div className="Grid columns-4 gap-9">
          <div className='Flex column jc-between'>
            <div className='Flex column gap-5'>
              <RoadieRacksIcon fill="currentColor" />

              <span className="Text size-3 lowContrast">Roadie has gained SOC2 Type 2 compliance.</span>

              <div className="Flex row gap-2">
                {navigation.social.map((item) => (
                  <SocialItem item={item} key={item.name} />
                ))}
              </div>
            </div>

            <div className="">
              <CopyrightNotice />
            </div>
          </div>

          <div>
            <TitledLinkList title="Product" />
          </div>

          <div>
            <TitledLinkList title="Resources" />
          </div>

          <div>
            <TitledLinkList title="Company" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SitewideFooter;
