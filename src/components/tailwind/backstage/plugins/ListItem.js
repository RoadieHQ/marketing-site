import React from 'react';
import { Link, Title } from 'components/tailwind';
import Tags from './Tags';
import Logo from './Logo';
import Attribution from './Attribution';

const ListItem = ({ fields: { slug }, frontmatter: { logoImage, humanName, attribution, tags } }) => {
  const sharpImage = logoImage.childImageSharp;
  return (
    <div className="border-2 p-4 text-center" style={{ height: 350 }}>
      <Link to={`/tailwind${slug}`} className="underline-none capitalize">
        <Logo sharpImage={sharpImage} />
        <div className="pb-4">
          <Title>{humanName}</Title>
        </div>
      </Link>

      <Attribution attribution={attribution} />
      <Tags tags={tags}/>
    </div>
  );
};

export default ListItem;
