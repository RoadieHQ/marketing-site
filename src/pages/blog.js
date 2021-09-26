import React from 'react';
import { graphql } from 'gatsby';

import { SEO, StickyFooter, PageMargins } from 'components';
import PostSummary from 'components/blog/PostSummary';
import HeadRssLink from 'components/blog/HeadRssLink';
import ThreeColWithBadges from 'components/tailwind/blog/ThreeColWithBadges';
import SitewideHeader from 'components/tailwind/SitewideHeader';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  header: {
    marginBottom: '3em',
  },

  summaryWrapper: {
    marginBottom: '3em',
  },
}));

const MAX_WIDTH_BREAKPOINT = 'md';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();

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
