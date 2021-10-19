import React from 'react';

const TopBanner = ({ children }) => (
  <div className="relative bg-gray-900">
    <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div className="pr-16 text-center sm:px-16">
        {children}
      </div>
    </div>
  </div>
);

export default TopBanner;
