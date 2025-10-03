import React from 'react';
import classnames from 'classnames';

const Chip = ({ label, icon, color = 'primary' }) => {
  const defaultClasses = 'px-3 py-1 rounded-full text-sm font-medium mr-2 whitespace-nowrap';

  let colorClasses;
  if (color === 'primary') colorClasses = 'border border-primary-800';
  if (color === 'green') colorClasses = 'border border-green-800';
  if (color === 'npm-red') colorClasses = 'border border-npm-red';
  if (color === 'black') colorClasses = 'border border-black';

  return (
    <span className={classnames(defaultClasses, colorClasses)}>
      {icon}
      <span>{label}</span>
    </span>
  );
};

export default Chip;
