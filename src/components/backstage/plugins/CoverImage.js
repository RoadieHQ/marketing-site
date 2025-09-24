import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const CoverImage = ({ plugin, className = 'max-w-full max-h-full shadow-small' }) => {
  if (!plugin.coverImage) return null;
  return (
    <GatsbyImage
      image={plugin.coverImage.gatsbyImageData}
      alt={plugin.coverImage.description}
      className={className}
    />
  );
};

export default CoverImage;
