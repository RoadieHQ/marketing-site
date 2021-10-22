import React from 'react';
import Link from 'components/tailwind/TextLink';
import Chip from '@material-ui/core/Chip';

const Attribution = ({ attribution }) => {
  if (!attribution) return null;

  if (!attribution.href || attribution.href === '') {
    return <div>Created by {attribution.text}</div>;
  }

  return (
    <div>
      Created by{' '}
      <Link to={attribution.href} color="primary">
        {attribution.text}
      </Link>
      <div>
        {attribution.tags?.map((t, i) => {
          return <Chip
            size="small"
            key={i}
            label={t}
          />
        })}
      </div>
    </div>
  );
};

export default Attribution;
