import React from 'react';
import { graphql } from 'gatsby';

import LayoutControl from 'components/LayoutControl';
import SEO from 'components/seo';
import SitewideHeader from 'components/SitewideHeader';
import PostSummary from 'components/blog/PostSummary';

const MAX_WIDTH_BREAKPOINT = 'md';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <SEO title="All posts" />

      <LayoutControl maxWidthBreakpoint={MAX_WIDTH_BREAKPOINT}>
        <SitewideHeader location={location} />
      </LayoutControl>

      <LayoutControl maxWidthBreakpoint={MAX_WIDTH_BREAKPOINT}>
        {posts.map(({ node }) => (
          <PostSummary key={node.fields.slug} post={node} />
        ))}
      </LayoutControl>
    </div>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
          }
        }
      }
    }
  }
`;
