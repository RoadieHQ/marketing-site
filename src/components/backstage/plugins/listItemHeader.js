import React from 'react';
import { Link, Title } from 'components';

import Logo from './Logo';

const ListItemHeader = ({ slug, logoImage, humanName }) => {
  const sharpImage = logoImage && logoImage.childImageSharp;

  return (
    <Link to={slug} className="underline-none capitalize">
      <Logo sharpImage={sharpImage} alt={`${humanName} logo`} />
      <div className="pb-4">
        <Title>{humanName}</Title>
      </div>
    </Link>
  );
};

export default ListItemHeader;
