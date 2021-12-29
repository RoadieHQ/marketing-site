import React from 'react';
import { CloudinaryImage } from 'components';

const Logo = ({ image, alt, minHeight = 200 }) => {
  const height = Math.max(minHeight, image.fixed.height);
  return (
    <div className="flex justify-center items-center" style={{ height }}>
      <CloudinaryImage
        cloudinaryAsset={image}
        height={height}
        alt={alt}
      />
    </div>
  );
};

export default Logo;
