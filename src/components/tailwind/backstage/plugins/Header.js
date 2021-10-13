import React from 'react';
import { Lead, Headline } from 'components/tailwind';

import Logo from './Logo';
import Attribution from './Attribution';

const Header = ({ plugin }) => (
  <header className="text-center pt-32 pb-72">
    <Logo
      sharpImage={plugin.frontmatter.logoImage.childImageSharp}
      alt={`${plugin.frontmatter.heading} logo`}
    />
    <Headline>{plugin.frontmatter.heading}</Headline>
    <Lead>{plugin.frontmatter.lead}</Lead>
    <Attribution attribution={plugin.frontmatter.attribution} />
  </header>
);

export default Header;
