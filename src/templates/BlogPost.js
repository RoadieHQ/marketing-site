import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import { SEO } from 'components';
import StickyFooter from 'components/layouts/StickyFooter';
import PostHeader from 'components/blog/PostHeader';

export const postInnerStyles = (theme) => ({
  '& p': {
    marginBottom: '1.75rem',
    lineHeight: '1.75rem',
  },

  '& ol': {
    marginBottom: '1.75rem',
    listStylePosition: 'outside',
    listStyleImage: 'none',
    paddingLeft: 0,
  },

  '& li': {
    marginBottom: 'calc(1.75rem / 2)',
    display: 'list-item',
    textAlign: '-webkit-match-parent',
    paddingLeft: 0,
    lineHeight: '1.75rem',
  },

  '& code': {
    fontSize: '0.875rem',
  },

  '& a': {
    color: theme.palette.primary.main,
  },

  '& a:visited': {
    color: theme.palette.primary.main,
  },
});

const useStyles = createUseStyles((theme) => ({
  main: postInnerStyles(theme),
}));

const MAX_WIDTH_BREAKPOINT = 'md';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const classes = useStyles();

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <StickyFooter maxWidthBreakpoint={MAX_WIDTH_BREAKPOINT} location={location}>
        <main className={classnames('typography-content', classes.main)}>
          <article>
            <PostHeader post={post} />
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </main>
      </StickyFooter>
    </>
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
