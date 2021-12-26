import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import classnames from 'classnames';

const Logo = ({
  sharpImage,
  alt,
  invertLogoInDarkMode = false,
  minHeight = 200,
}) => {
  const height = Math.max(minHeight, sharpImage.gatsbyImageData.height);
  return (
    <div className="flex justify-center items-center" style={{ height }}>
      <GatsbyImage
        image={sharpImage.gatsbyImageData}
        alt={alt}
        className={classnames({ 'dark:invert': invertLogoInDarkMode })}
      />
    </div>
  );
};

export default Logo;
