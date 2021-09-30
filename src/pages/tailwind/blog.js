import React from 'react';
import { graphql } from 'gatsby';

import { SEO, StickyFooter, PageMargins } from 'components';
import PostSummary from 'components/blog/PostSummary';
import HeadRssLink from 'components/blog/HeadRssLink';
import ThreeColWithBadges from 'components/tailwind/blog/ThreeColWithBadges';
import SitewideHeader from 'components/tailwind/SitewideHeader';
import { Helmet } from 'react-helmet';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO
        title={`All blog posts | ${siteTitle}`}
        description={`
          Backstage content. Everything from technical how-tos to recaps of community sessions and 
          general engineering effectiveness content.
        `}
      />

      <HeadRssLink />
      <Helmet>
        <link rel="stylesheet" href="/stylesheets/tailwind.css" />
      </Helmet>
      <SitewideHeader />
      <ThreeColWithBadges posts={posts.map(({ node }) => node)} />
    </>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/.+/blog/.+/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }

          frontmatter {
            date
            title
            description
            lastValidated
            tags
            author {
              name
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`;
