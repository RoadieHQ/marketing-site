import React from 'react';

const Chip = ({ label }) => (
  <span
    className="bg-primary-100 text-primary-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mr-2"
  >
    {label}
  </span>
);

export default Chip;
