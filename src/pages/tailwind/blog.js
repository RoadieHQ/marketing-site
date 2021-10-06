import React from 'react';
import { graphql } from 'gatsby';

import { SEO } from 'components';
import HeadRssLink from 'components/blog/HeadRssLink';
import ThreeColWithBadges from 'components/tailwind/blog/ThreeColWithBadges';
import SitewideHeader from 'components/tailwind/SitewideHeader';
import TailwindHeadContent from 'components/tailwind/HeadContent';
import SitewideFooter from 'components/tailwind/SitewideFooter';

const BlogIndex = ({ data }) => {
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
      <TailwindHeadContent />
      <SitewideHeader />
      <ThreeColWithBadges posts={posts.map(({ node }) => node)} />
      <SitewideFooter />
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
