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
    <div className="px-4 xl:px-0 mb-10">
      <Link to="/backstage/plugins/" className="font-bold text-blueroadie">
        <span className="text-orange-500">←</span> Backstage Plugins Guides
      </Link>
    </div>

    <header className="px-4 xl:px-0 flex items-center mb-10">
      <div className="bg-gray-100 mr-8">
        <Logo
          minHeight={80}
          sharpImage={logoImage.childImageSharp}
          alt={`${humanName} logo`}
        />
      </div>

      <div>
        <div className="mb-1">
          <Headline size="small">{heading}</Headline>
        </div>
        <Attribution attribution={attribution} />
      </div>
    </header>
  </div>
);

export default Header;
