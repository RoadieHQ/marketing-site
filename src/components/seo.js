/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

import roadieLogo from '../../content/assets/logos/roadie/roadie-racks-og-image.png';

const SEO = ({ title, description = '', lang = 'en', meta = [] }) => {
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
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const twitterHandle = get(site, 'siteMetadata.social.twitter', 'roadiehq');
  const ogImageUrl = `${site.siteMetadata.siteUrl}${roadieLogo}`;
  const ogImageAlt = 'The Roadie logo. A cube in isometric projection with 3 fins cut into the right face. The word Roadie is below.';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
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
      ].concat(meta)}
    />
  );
};

export default SEO;
