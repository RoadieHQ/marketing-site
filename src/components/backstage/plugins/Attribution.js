import React from 'react';
import { TextLink as Link } from 'components';

const Attribution = ({ attribution }) => {
  if (!attribution) return null;

  if (!attribution.href || attribution.href === '') {
    return <div>by {attribution.text}</div>;
  }

  return (
    <div>
      by{' '}
      <Link to={attribution.href} color="primary">
        {attribution.text}
      </Link>
    </div>
  );
};

export default Attribution;
