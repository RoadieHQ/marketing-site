import React from 'react';
import { Link, Title } from 'components';

import Logo from './Logo';

const ListItemHeader = ({ slug, logoImage, humanName }) => {
  return (
    <Link to={`/backstage/plugins/${slug}/`} className="underline-none capitalize">
      <Logo gatsbyImageData={logoImage.gatsbyImageData} alt={`${humanName} logo`} />
      <div className="pb-4">
        <Title>{humanName}</Title>
      </div>
    </Link>
  );
};

export default ListItemHeader;
