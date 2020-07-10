import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import SitewideHeader from '../components/SitewideHeader';
import LayoutControl from '../components/LayoutControl';

const PostHeader = ({ post }) => {
  return (
    <header>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
    </header>
  );
};

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <LayoutControl maxWidthBreakpoint="sm">
        <SitewideHeader />
      </LayoutControl>

      <LayoutControl maxWidthBreakpoint="sm">
        <main>
          <article>
            <PostHeader post={post} />
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr />
          </article>
        </main>
      </LayoutControl>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
