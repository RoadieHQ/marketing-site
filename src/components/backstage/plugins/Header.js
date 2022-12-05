import React from 'react';
import { Lead, Headline, Link, Chip } from 'components';

import Logo from './Logo';
import Attribution from './Attribution';


const RoadieDocsChip = ({ availableOnRoadie, roadieDocsPath }) => {
  if (!availableOnRoadie) return null;

  const chip = <Chip label="Available on Roadie" color="green" />;
  if (!roadieDocsPath) return chip;
  return (
    <Link to={`/docs/integrations${roadieDocsPath}`} className="inline-block">
      {chip}
    </Link>
  );
};

const Header = ({
  plugin: {
    frontmatter: {
      humanName,
      logoImage,
      heading,
      lead,
      attribution,
      intro,
      availableOnRoadie,
      roadieDocsPath,
    },
  },
}) => (
  <header className="text-center pb-4 mb-4 md:pt-8 md:pb-24 border-b-2 border-gray-100">
    <Logo sharpImage={logoImage.childImageSharp} alt={`${humanName} logo`} />
    <div className="mb-4">
      <Headline>{heading}</Headline>
    </div>
    <div className="mb-4">
      <Lead>{lead}</Lead>
    </div>

    <div className="mb-4">
      <Attribution attribution={attribution} />
    </div>

    {intro &&
      <div className="mb-4 mt-8 text-center">
        <p className="prose prose-primary mr-auto ml-auto">
          {intro}
        </p>
      </div>
    }

    <RoadieDocsChip availableOnRoadie={availableOnRoadie} roadieDocsPath={roadieDocsPath} />
  </header>
);

export default Header;
