import React from 'react';

/* eslint-disable jsx-a11y/alt-text */
const LogoItem = (props) => (
  <div className="col-span-1 flex justify-center">
    <img className="h-10" {...props} />
  </div>
);
/* eslint-enable jsx-a11y/alt-text */

const CustomerLogoCloud = ({ logos }) => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {logos.map((logo) => (
          <LogoItem {...logo} key={logo.src} />
        ))}
      </div>
    </div>
  </div>
);

export default CustomerLogoCloud;
