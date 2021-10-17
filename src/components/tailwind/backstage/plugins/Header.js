import React from 'react';
import { Lead, Headline } from 'components/tailwind';

import Logo from './Logo';
import Attribution from './Attribution';

const Header = ({ plugin }) => (
  <header className="text-center pt-4 pb-24">
    <Logo sharpImage={plugin.frontmatter.logoImage.childImageSharp} />
    <div className="mb-4">
      <Headline>{plugin.frontmatter.heading}</Headline>
    </div>
    <div className="mb-4">
      <Lead>{plugin.frontmatter.lead}</Lead>
    </div>
    <Attribution attribution={plugin.frontmatter.attribution} />
  </header>
);

export default Header;
