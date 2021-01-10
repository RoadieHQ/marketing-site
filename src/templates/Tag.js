import React from 'react';
import { graphql } from 'gatsby';
import { SEO, StickyFooter } from 'components';
import PostSummary from 'components/blog/PostSummary';

const MAX_WIDTH_BREAKPOINT = 'md';

const BlogIndex = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={`All ${tag} blog posts | ${siteTitle}`} />

      <StickyFooter maxWidthBreakpoint={MAX_WIDTH_BREAKPOINT} location={location}>
        {posts.map(({ node }) => (
          <PostSummary key={node.fields.slug} post={node} />
        ))}
      </StickyFooter>
    </>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query Tag($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/.+/blog/.+/" }, frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }

          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }

    site {
      siteMetadata {
        title
        newsletterUrl
        social {
          twitter
        }
      }
    }
  }
`;
