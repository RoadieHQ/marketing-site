import React from 'react';
import { Lead, Headline } from 'components';

import Logo from './Logo';
import Attribution from './Attribution';

const Header = ({ plugin }) => (
  <header className="text-center pb-4 mb-4 md:pt-8 md:pb-24 border-b-2 border-gray-100">
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
