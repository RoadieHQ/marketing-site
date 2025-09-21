import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const CoverImage = ({ plugin, className = 'max-w-full max-h-full shadow-small' }) => {
  if (!plugin.frontmatter.coverImage) return null;
  return (
    <GatsbyImage
      image={plugin.frontmatter.coverImage.gatsbyImageData}
      alt={plugin.frontmatter.coverImageAlt}
      className={className}
    />
  );
};

export default CoverImage;
