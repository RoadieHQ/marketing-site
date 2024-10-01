import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

import roadieLogo from '../../content/assets/logos/roadie/roadie-racks-og-image.png';

const SEO = ({ title, description = '', lang = 'en', headerImage = '', meta = [] }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              twitter
              linkedin
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const twitterHandle = get(site, 'siteMetadata.social.twitter', 'roadiehq');
  const ogImageUrl = headerImage || `${site.siteMetadata.siteUrl}${roadieLogo}`;
  const ogImageAlt =
    'The Roadie logo. A cube in isometric projection with 3 fins cut into the right face. The word Roadie is below.';

  // Construct the canonical URL dynamically based on the siteUrl and current page's path
  const canonicalUrl =
    typeof window !== 'undefined'
      ? `${site.siteMetadata.siteUrl}${window.location.pathname}`
      : site.siteMetadata.siteUrl; // Fallback to siteUrl during server-side rendering

  const defaultMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: ogImageUrl,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:site`,
      content: twitterHandle,
    },
    {
      name: `twitter:image`,
      content: ogImageUrl,
    },
    {
      name: `twitter:image:alt`,
      content: ogImageAlt,
    },
    {
      name: `twitter:creator`,
      content: twitterHandle,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={defaultMeta.concat(meta)}
    >
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
