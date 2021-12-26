import React from 'react';
import { Lead, Headline } from 'components';

import Logo from './Logo';
import Attribution from './Attribution';

const Header = ({
  plugin: {
    frontmatter: {
      humanName,
      logoImage,
      heading,
      lead,
      attribution,
      invertLogoInDarkMode,
    },
  },
}) => (
  <header className="text-center pb-4 mb-4 md:pt-8 md:pb-24 border-b-2 border-gray-100">
    <Logo
      sharpImage={logoImage.childImageSharp}
      alt={`${humanName} logo`}
      invertLogoInDarkMode={invertLogoInDarkMode}
    />
    <div className="mb-4">
      <Headline>{heading}</Headline>
    </div>
    <div className="mb-4">
      <Lead>{lead}</Lead>
    </div>
    <Attribution attribution={attribution} />
  </header>
);

export default Header;
