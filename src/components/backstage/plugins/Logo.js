import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Logo = ({ sharpImage, alt, minHeight = 200 }) => {
  const height = Math.max(minHeight, sharpImage.gatsbyImageData.height);
  return (
    <div className="flex justify-center items-center" style={{ height }}>
      <GatsbyImage image={sharpImage.gatsbyImageData} alt={alt} />
    </div>
  );
};

export default Logo;
