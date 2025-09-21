import React from 'react';
import { Link, Title } from 'components';

import Logo from './Logo';

const ListItemHeader = ({ slug, logoImage, humanName }) => {
  const gatsbyImageData = logoImage && logoImage.gatsbyImageData;

  return (
    <Link to={slug} className="underline-none capitalize">
      <div className="pb-4">
        <Title>{humanName}</Title>
        <Logo gatsbyImageData={gatsbyImageData} alt={`${humanName} logo`} />
      </div>
    </Link>
  );
};

export default ListItemHeader;
