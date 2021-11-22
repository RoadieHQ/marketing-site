import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import BlogPostTemplate from '../BlogPost';

const convertContentfulContentModelToLocal = ({
  data: {
    contentfulBlogPost: post,
  },
}) => ({
  excerpt: post.body.childMarkdownRemark.excerpt,
  html: post.body.childMarkdownRemark.html,

  frontmatter: {
    title: post.title,
    date: post.date,
    description: post.description.childMarkdownRemark.rawMarkdownBody,
    lastValidated: post.lastValidated,
    tags: post.tags,
    author: {
      name: post.author.name,
    },
  },
});

const ContentfulBlogPostTemplate = ({ data }) => {
  const translatedData = {
    markdownRemark: convertContentfulContentModelToLocal({ data }),
    site: data.site,
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>

      <BlogPostTemplate data={translatedData} />
    </>
  );
};

export default ContentfulBlogPostTemplate;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }

    contentfulBlogPost(slug: { eq: $slug }) {
      date
      title
      tags
      lastValidated

      description {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }

      author {
        name
      }

      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 160)
        }
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
        lastValidated
        tags
        author {
          name
        }
      }
    }
  }
`;
