import React from 'react';
import Link from 'components/TextLink';
import classnames from 'classnames';

const Attribution = ({ attribution, className }) => {
  if (!attribution) return null;

  if (!attribution.href || attribution.href === '') {
    return <p className={classnames('text-base', className)}>Created by {attribution.text}</p>;
  }

  return (
    <p className={classnames('text-base', className)}>
      Created by{' '}
      <Link to={attribution.href} color="primary">
        {attribution.text}
      </Link>
    </p>
  );
};

export default Attribution;
