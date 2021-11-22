import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import BlogIndex from '../blog';

const convertContentfulContentModelToLocal = ({ node }) => ({
  node: {
    excerpt: node.body.childMarkdownRemark.excerpt,
    timeToRead: node.body.childMarkdownRemark.timeToRead,

    fields: {
      slug: node.slug,
    },

    frontmatter: {
      date: node.date,
      title: node.title,
      description: node.description.childMarkdownRemark.rawMarkdownBody,
      lastValidated: node.lastValidated,
      tags: node.tags,

      author: {
        name: node.author.name,
        avatar: {
          childImageSharp: {
            gatsbyImageData: node.author.avatar.gatsbyImageData,
          },
        },
      },
    },
  },
});

const ContentfulBlogIndex = ({ data }) => {
  const rawPosts = data.allContentfulBlogPost.edges;
  const posts = rawPosts.map(convertContentfulContentModelToLocal);
  const translatedData = {
    allMarkdownRemark: {
      edges: posts,
    },
    site: data.site,
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>

      <BlogIndex data={translatedData} />
    </>
  );
};

export default ContentfulBlogIndex;

export const pageQuery = graphql`
  query ContentfulBlog {
    allContentfulBlogPost {
      edges {
        node {
          slug
          title
          date
          lastValidated
          tags

          description {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }

          author {
            avatar {
              gatsbyImageData(layout: FIXED, width: 40)
            }
            name
          }

          body {
            childMarkdownRemark {
              timeToRead
              excerpt
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
