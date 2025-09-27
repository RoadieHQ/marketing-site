import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Logo = ({ gatsbyImageData, alt, className, minHeight = 200 }) => {
  let image = <img src="https://placehold.jp/140x140.png" alt="Placeholder" />;
  let height = minHeight;

  if (gatsbyImageData) {
    height = Math.max(minHeight, gatsbyImageData.height);
    image = <GatsbyImage image={gatsbyImageData} alt={alt} />;
  }

  return (
    <div
      style={{ height, visibility: gatsbyImageData ? 'visible' : 'hidden' }}
      className={className}
    >
      {image}
    </div>
  );
};

export default Logo;
