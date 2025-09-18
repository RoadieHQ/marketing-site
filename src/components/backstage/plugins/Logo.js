import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Logo = ({ sharpImage, alt, minHeight = 200 }) => {
  let image = <img src="https://placehold.jp/140x140.png" alt="Placeholder" />;
  let height = minHeight;

  if (sharpImage) {
    height = Math.max(minHeight, sharpImage.gatsbyImageData.height);
    image = <GatsbyImage image={sharpImage.gatsbyImageData} alt={alt} />;
  }

  return (
    <div
      className="flex justify-center items-center"
      style={{ height, visibility: sharpImage ? 'visible' : 'hidden' }} >
      {image}
    </div>
  );
};

export default Logo;
