import React from 'react';
import { Link } from 'components';
import { TwitterIcon, GitHubIcon, DiscordIcon, BackstageIcon, RoadieRacksIcon } from 'components/icons';
import camelCase from 'lodash/camelCase';

const navigation = {
  product: [
    { name: 'Catalog', href: '/product/catalog' },
    { name: 'Scaffolder', href: '/product/scaffolder' },
    { name: 'Documentation', href: '/product/documentation' },
    { name: 'Tech Insights', href: '/product/tech-insights' },
    { name: 'Pricing', href: '/pricing' },
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
        <div className="Grid columns-1 bp1-columns-2 bp2-columns-4 gap-5 bp2-gap-9">
          <div className='Flex column jc-between gap-5 bp2-gap-0'>
            <div className='Flex column gap-5'>
              <RoadieRacksIcon fill="currentColor" />

              <div className="Flex row gap-2">
                {navigation.social.map((item) => (
                  <SocialItem item={item} key={item.name} />
                ))}
              </div>
              
              <div className="Flex row ai-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_398_66)">
                  <circle cx="16" cy="16" r="15" fill="#E2F0FF" stroke="#1678D2" strokeWidth="2"/>
                  <rect x="2" y="15" width="28" height="2" fill="#1678D2"/>
                  <path d="M9.34764 24.146L10.0686 23.341C10.4606 23.845 11.0136 24.111 11.5526 24.111C12.0356 24.111 12.3786 23.915 12.3786 23.537C12.3786 23.138 11.9516 23.082 11.1886 22.914C10.4466 22.753 9.63464 22.508 9.63464 21.5C9.63464 20.513 10.4886 19.897 11.5596 19.897C12.4276 19.897 13.1136 20.268 13.4846 20.737L12.7776 21.507C12.4696 21.115 12.0566 20.863 11.5246 20.863C11.0836 20.863 10.7756 21.059 10.7756 21.381C10.7756 21.731 11.1186 21.801 11.7626 21.941C12.5536 22.109 13.5336 22.312 13.5336 23.418C13.5336 24.468 12.6166 25.077 11.5036 25.077C10.6706 25.077 9.76064 24.72 9.34764 24.146ZM13.8174 22.487C13.8174 20.968 14.8184 19.897 16.2254 19.897C17.6394 19.897 18.6334 20.968 18.6334 22.487C18.6334 24.006 17.6394 25.077 16.2254 25.077C14.8184 25.077 13.8174 24.006 13.8174 22.487ZM17.4644 22.487C17.4644 21.521 16.9534 20.912 16.2254 20.912C15.4974 20.912 14.9934 21.521 14.9934 22.487C14.9934 23.453 15.4974 24.062 16.2254 24.062C16.9534 24.062 17.4644 23.453 17.4644 22.487ZM20.1886 22.487C20.1886 23.446 20.6856 24.062 21.3856 24.062C21.9036 24.062 22.2746 23.733 22.3936 23.201L23.4926 23.565C23.1846 24.482 22.4706 25.077 21.3926 25.077C20.0136 25.077 19.0196 24.006 19.0196 22.487C19.0196 20.968 20.0136 19.897 21.3926 19.897C22.4706 19.897 23.1846 20.492 23.4926 21.409L22.3936 21.773C22.2746 21.241 21.9036 20.912 21.3856 20.912C20.6856 20.912 20.1886 21.528 20.1886 22.487Z" fill="#0062BC"/>
                  <path d="M7.93802 6.974H9.27502L11.123 12H9.94002L9.57602 10.992H7.60202L7.23802 12H6.08302L7.93802 6.974ZM8.58202 8.269L7.95202 10.026H9.21902L8.58202 8.269ZM12.7428 6.974V12H11.5738V6.974H12.7428ZM14.4806 9.487C14.4806 10.446 14.9776 11.062 15.6776 11.062C16.1956 11.062 16.5666 10.733 16.6856 10.201L17.7846 10.565C17.4766 11.482 16.7626 12.077 15.6846 12.077C14.3056 12.077 13.3116 11.006 13.3116 9.487C13.3116 7.968 14.3056 6.897 15.6846 6.897C16.7626 6.897 17.4766 7.492 17.7846 8.409L16.6856 8.773C16.5666 8.241 16.1956 7.912 15.6776 7.912C14.9776 7.912 14.4806 8.528 14.4806 9.487ZM19.4284 10.25V12H18.2594V6.974H20.3804C21.5634 6.974 22.2984 7.534 22.2984 8.612C22.2984 9.683 21.5634 10.25 20.3804 10.25H19.4284ZM19.4284 9.27H20.3174C20.8704 9.27 21.1504 9.025 21.1504 8.612C21.1504 8.199 20.8704 7.961 20.3174 7.961H19.4284V9.27ZM23.7222 6.974H25.0592L26.9072 12H25.7242L25.3602 10.992H23.3862L23.0222 12H21.8672L23.7222 6.974ZM24.3662 8.269L23.7362 10.026H25.0032L24.3662 8.269Z" fill="#0062BC"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_398_66">
                  <rect width="32" height="32" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                <span className="Text size-3 lowContrast">SOC2 Type 2 compliant</span>
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
