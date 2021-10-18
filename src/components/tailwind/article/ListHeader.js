import React from 'react';

const ListHeader = ({ title, description }) => (
  <div>
    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{title}</h2>
    {description && (
      <p className="mt-3 text-xl text-gray-500 sm:mt-4">
        {description}
      </p>
    )}
  </div>
);

export default ListHeader;
