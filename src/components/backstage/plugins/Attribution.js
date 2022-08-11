import React from 'react';
import Link from 'components/TextLink';

const Attribution = ({ attribution }) => {
  if (!attribution) return null;

  if (!attribution.href || attribution.href === '') {
    return (
      <div className="text-base">
        <p>Created by {attribution.text}</p>
      </div>
    );
  }

  return (
    <div className="text-base">
      <p>
        Created by{' '}
        <Link to={attribution.href} color="primary">
          {attribution.text}
        </Link>
      </p>
    </div>
  );
};

export default Attribution;
