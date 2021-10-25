import React from 'react';
import { Helmet } from 'react-helmet';

/*
 * inter.css loads a font face which is typically used with Tailwind. We might change this
 * default font later, but we should stick with the defaults while we are learning to use
 * Tailwind UI components. It's ok that this is loaded in the head like this. It should only
 * impact page load speeds on hidden pages.
 *
 * tailwind.css contains the global resets and CSS classes that Tailwind needs to function.
 * We will load this more efficiently before we go to production with tailwind. For now, this
 * is a good way to load Tailwind styles on Tailwind pages, but not on non-Tailwind pages.
 *
 * The noindex meta tag tells search engines not to include this page in their results. If they
 * did we would have duplicate pages showing up in search results.
 *
 */

const TailwindHeadContent = () => (
  <Helmet>
    <meta name="robots" content="noindex" />
  </Helmet>
);

export default TailwindHeadContent;
