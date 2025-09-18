import React from 'react';
import { Headline, Link } from 'components';

import Logo from './Logo';
import Attribution from './Attribution';

const Header = ({
  plugin: {
    frontmatter: {
      humanName,
      logoImage,
      heading,
      attribution,
    },
  },
}) => (
  <div className="mx-auto max-w-7xl">
    <div className="mb-10">
      <Link to="/backstage/plugins/" className="font-bold text-blueroadie">
        <span className="text-orange-500">←</span> Backstage Plugins Guides
      </Link>
    </div>

    <header className="px-4 xl:rounded-lg lg:flex lg:px-0 items-center mb-10">
      <div>
        <Logo
          minHeight={80}
          sharpImage={logoImage.childImageSharp}
          alt={`${humanName} logo`}
        />
      </div>

      <div>
        <Headline size="small">{heading}</Headline>
        <Attribution attribution={attribution} className="mb-4" />
      </div>
    </header>
  </div>
);

export default Header;
