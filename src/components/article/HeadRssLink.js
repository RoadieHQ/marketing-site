import React from 'react';
import { Helmet } from 'react-helmet';

const HeadRssLink = () => (
  <Helmet>
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Subscribe to the Roadie blog"
      href="/blog/rss.xml"
    />
  </Helmet>
);

export default HeadRssLink;
