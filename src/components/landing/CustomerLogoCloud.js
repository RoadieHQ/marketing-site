import React from 'react';

/* eslint-disable jsx-a11y/alt-text */
const LogoItem = ({ src, ...rest }) => (
  <div className="col-span-1 flex justify-center">
    <picture>
      <source srcSet={src.webp} type="image/webp" />
      <source srcSet={src.png} type="image/png" />
      <img src={src.png} {...rest} className="h-8 sm:h-10" />
    </picture>
  </div>
);
/* eslint-enable jsx-a11y/alt-text */

const CustomerLogoCloud = ({ logos }) => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12 text-gray-600">
        <p>Improving engineering effectiveness at top companies</p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {logos.map((logo) => (
          <LogoItem {...logo} key={logo.src} />
        ))}
      </div>
    </div>
  </div>
);

export default CustomerLogoCloud;
