import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from "gatsby-plugin-google-gtag";

const isRelativeTo = (to) => to.startsWith('/') || to.startsWith('#');

const forceTrailingSlashOntoTo = (to) => {
  // While building, Gatsby renders components on the server where window is not available.
  // https://github.com/gatsbyjs/gatsby/issues/309#issuecomment-223360361
  if (typeof window === 'undefined') return to;
  let internalUrl = new URL(to, window.location.origin);
  if (!internalUrl.pathname.endsWith('/')) {
    internalUrl.pathname = `${internalUrl.pathname}/`;
  }
  return internalUrl.toString().replace(window.location.origin, '');
};

/*
 * Most of the logic in this file has one aim: ensure that internal links always end with a
 * slash.
 *
 * We do this because the site is deployed on netlify.com and netlify always rewrites inbound
 * URLs so that they have a slash at the end of them. You can see this by yourself by trying:
 *
 *    curl https://roadie.io/blog
 *
 * The first response will be a 301 redirect to https://roadie.io/blog/
 *
 * Internal links happen as if the application is a single page app and don't hit the Netlify
 * router. Thus, if we link internally using the href '/blog', Netlify never gets the chance to
 * rewrite the URL to add the trailing slash.
 *
 * Google analytics treats both /blog and /blog/ as two separate pages. This can cause stats
 * problems and SEO penalties.
 *
 * Resources:
 *   1. https://blog.maximeheckel.com/posts/seo-mistakes-i-have-made-and-how-i-fixed-them
 *   2. https://github.com/gatsbyjs/gatsby/discussions/27889
 *   3. https://www.gatsbyjs.com/plugins/gatsby-plugin-force-trailing-slashes/?=Link
 */

const Link = ({
  to,
  children,
  activeClassName,
  activeStyle,
  partiallyActive,
  forceOpenInSameTab = false,
  ...rest
}) => {
  if (isRelativeTo(to)) {
    let internalTo = to;

    // We have to leave URLs which start with a hash alone, otherwise in-page links like
    // #my-section could be rewritten as /#my-section. This would incorrectly send the reader
    // to the homepage.
    if (internalTo.startsWith('/')) {
      internalTo = forceTrailingSlashOntoTo(internalTo);
    }

    return (
      <GatsbyLink
        to={internalTo}
        activeClassName={activeClassName}
        activeStyle={activeStyle}
        partiallyActive={partiallyActive}
        {...rest}
      >
        {children}
      </GatsbyLink>
    );
  }

  if (forceOpenInSameTab) {
    return (
      <OutboundLink href={to} {...rest}>
        {children}
      </OutboundLink>
    );
  }

  return (
    <OutboundLink href={to} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </OutboundLink>
  );
};

export default Link;
