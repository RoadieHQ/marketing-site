import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Logo = ({ sharpImage, minHeight = 200 }) => {
  const height = Math.max(minHeight, sharpImage.gatsbyImageData.height);
  return (
    <div className="flex justify-center items-center" style={{ height }}>
      <GatsbyImage image={sharpImage.gatsbyImageData} />
    </div>
  );
};

export default Logo;
