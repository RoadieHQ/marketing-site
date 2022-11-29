import React from 'react';
import classnames from 'classnames';

const Chip = ({ label, color = 'orange' }) => {
  const defaultClasses = 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mr-2';

  let colorClasses;
  if (color === 'orange') colorClasses = 'bg-primary-100 text-primary-800';
  if (color === 'green') colorClasses = 'bg-green-200 text-gray-800 border-2 border-green-800';

  return (
    <span className={classnames(defaultClasses, colorClasses)}>
      {label}
    </span>
  );
};

export default Chip;
