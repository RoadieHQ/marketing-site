import React from 'react';
import Link from 'components/TextLink';

const Attribution = ({ attribution }) => {
  if (!attribution) return null;

  if (!attribution.href || attribution.href === '') {
    return <div>Created by {attribution.text}</div>;
  }

  return (
    <div className="text-gray-500 dark:text-gray-300">
      Created by{' '}
      <Link to={attribution.href} color="primary">
        {attribution.text}
      </Link>
    </div>
  );
};

export default Attribution;
