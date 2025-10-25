import React from 'react';

const PackageHeader = ({ packageName }) => {
  return (
    <div className="col-span-full pt-2 mt-4">
      <h3 className="text-lg font-bold text-gray-600">{packageName}</h3>
    </div>
  );
};

export default PackageHeader;
