import React from 'react';
import { graphql } from 'gatsby';
import { SEO, StickyFooter } from 'components';
import PostSummary from 'components/blog/PostSummary';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  summaryWrapper: {
    marginBottom: '4em',
  },
}));


const MAX_WIDTH_BREAKPOINT = 'md';

const BlogIndex = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();

  return (
    <>
      <SEO
        title={`All ${tag} blog posts | ${siteTitle}`}
        description={`
          Blog posts relating to the Backstage service catalog which are tagged with ${tag}.
        `}
      />

      <StickyFooter maxWidthBreakpoint={MAX_WIDTH_BREAKPOINT} location={location}>
        {posts.map(({ node }) => (
          <div className={classes.summaryWrapper} key={node.fields.slug}>
            <PostSummary post={node} />
          </div>
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
        social {
          twitter
        }
      }
    }
  }
`;
