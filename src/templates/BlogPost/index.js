import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';

import SEO from 'components/seo';
import SitewideHeader from 'components/SitewideHeader';
import LayoutControl from 'components/LayoutControl';
import PostHeader from './Header';

const useStyles = createUseStyles((theme) => ({
  main: {
    fontFamily: 'Merriweather, Georgia, serif',
    fontFeatureSettings: ['"kern"', '"liga"', '"clig"', '"calt"'],
    fontKerning: 'normal',
    color: 'hsla(0,0%,0%,0.9)',
    fontSize: '1.1rem',

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
      color: theme.palette.primary.dark,
    },

    '& a:visited': {
      color: theme.palette.primary.dark,
    },
  },
}));

const MAX_WIDTH_BREAKPOINT = 'md';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const classes = useStyles();

  return (
    <div>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <LayoutControl maxWidthBreakpoint={MAX_WIDTH_BREAKPOINT}>
        <SitewideHeader />
      </LayoutControl>

      <LayoutControl maxWidthBreakpoint={MAX_WIDTH_BREAKPOINT}>
        <main className={classes.main}>
          <article>
            <PostHeader post={post} />
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
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
