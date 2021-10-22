import React from 'react';

const SimpleCenteredTitle = ({ title, subTitle }) => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          {title}
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          {subTitle}
        </p>
      </div>
    </div>
  </div>
);

export default SimpleCenteredTitle;
