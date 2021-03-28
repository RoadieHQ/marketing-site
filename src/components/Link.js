import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Link = ({ to, children, ...rest }) => {
  if (to.startsWith('/') || to.startsWith('#')) {
    return (
      <GatsbyLink to={to} {...rest}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <OutboundLink href={to} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </OutboundLink>
  );
};

export default Link;
