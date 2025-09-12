import React from 'react';
import { Lead, Headline, Link, Chip } from 'components';

import Logo from './Logo';
import Attribution from './Attribution';
import { NpmIcon, RoadieRacksIcon, GitHubIcon } from 'components/icons';

const RoadieDocsChip = ({ availableOnRoadie, roadieDocsPath }) => {
  if (!availableOnRoadie) return null;

  const chip = (
    <Chip
      label="Available on Roadie"
      icon={<RoadieRacksIcon className="h-[1rem] w-[1rem] inline mr-1" />}
    />
  );

  if (!roadieDocsPath) return chip;
  return (
    <Link to={`/docs${roadieDocsPath}`} className="inline-block">
      {chip}
    </Link>
  );
};

const NpmChip = ({ npmjsPackage }) => {
  if (!npmjsPackage) return null;

  return (
    <Link to={`https://npmjs.com/package/${npmjsPackage}`} className="inline-block">
      <Chip
        label={npmjsPackage}
        color="npm-red"
        icon={<NpmIcon className="h-[1.5rem] w-[1.5rem] inline mr-1" />}
      />
    </Link>
  );
};

const GitHubChip = ({ codeLocation }) => {
  if (!codeLocation) return null;

  const label = URL.parse(codeLocation).pathname.split('/')[2];

  return (
    <Link to={codeLocation} className="inline-block">
      <Chip
        label={label}
        color="black"
        icon={<GitHubIcon className="h-[1.2rem] w-[1.2rem] inline mr-1" />}
      />
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
      availableOnRoadie,
      roadieDocsPath,
      npmjsPackage,
      codeLocation,
    },
  },
}) => (
  <>
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Link to="/backstage/plugins/" className="font-bold text-blueroadie">
        <span className="text-orange-500">←</span> Backstage Plugins Guides
      </Link>
    </div>

    <header className="bg-white mx-auto max-w-7xl px-4 py-5 text-center lg:text-left xl:rounded-lg lg:flex lg:px-0 lg:mb-10 items-center">
      <div className="lg:w-1/4 mt-5 lg:mt-0">
        <Logo sharpImage={logoImage.childImageSharp} alt={`${humanName} logo`} />
      </div>

      <div>
        <Headline className="mb-4">{heading}</Headline>
        <Lead className="mb-4 text-blueroadie">{lead}</Lead>
        <Attribution attribution={attribution} className="mb-4" />

        <RoadieDocsChip availableOnRoadie={availableOnRoadie} roadieDocsPath={roadieDocsPath} />
        <NpmChip npmjsPackage={npmjsPackage} />
        <GitHubChip codeLocation={codeLocation} />
      </div>
    </header>
  </>
);

export default Header;
