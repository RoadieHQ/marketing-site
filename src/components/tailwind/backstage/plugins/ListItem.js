import React from 'react';
import { Link } from 'components';

import Logo from './Logo';
import Attribution from './Attribution';

const ListItem = ({ fields: { slug }, frontmatter: { logoImage, humanName, attribution } }) => {
  const sharpImage = logoImage.childImageSharp;

  return (
    <div className="border-2 p-4" style={{ height: 350 }}>
      <Link to={`/tailwind${slug}`} className="text-center underline-none capitalize">
        <Logo sharpImage={sharpImage} />
        <h2 className="pb-4">{humanName}</h2>
      </Link>

      <div className="text-center">
        <Attribution attribution={attribution} />
      </div>
    </div>
  );
};

export default ListItem;
