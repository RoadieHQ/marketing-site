import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ to, children, ...rest }) => {
  if (to.startsWith('/')) {
    return (
      <GatsbyLink to={to} {...rest}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};

export default Link;
