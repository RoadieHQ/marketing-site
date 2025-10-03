import React from 'react';
import classnames from 'classnames';

const TabInner = ({ label, isActive }) => {
  const chipClassName = classnames('bg-primary-600 h-1 right-0 left-0 bottom-0', {
    absolute: isActive,
    hidden: !isActive,
  });

  return (
    <div className="pb-2 relative mr-8">
      <span className={classnames('text-base text-center', { 'text-primary-600': isActive })}>
        {label}
      </span>
      <span className={chipClassName} />
    </div>
  );
};

export default TabInner;
