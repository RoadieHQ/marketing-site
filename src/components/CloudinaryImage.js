import React from 'react';
import has from 'lodash/has';

const CloudinaryImage = ({
  cloudinaryAsset,
  alt,
  height,
  width,
  ...rest
}) => {
  if (has(cloudinaryAsset, 'fixed')) {
    return (
      <img
        src={cloudinaryAsset.fixed.src}
        alt={alt}
        height={height || cloudinaryAsset.fixed.height}
        width={width || cloudinaryAsset.fixed.width}
        {...rest}
      />
    );
  } else if (has(cloudinaryAsset, 'fluid')) {
    return (
      <img
        src={cloudinaryAsset.fluid.src}
        alt={alt}
        sizes={cloudinaryAsset.fluid.sizes}
        srcSet={cloudinaryAsset.fluid.srcSet}
        {...rest}
      />
    );
  } else {
    throw new Error('');
  }
};

export default CloudinaryImage;
