import React from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  SitewideHeader,
  SitewideFooter,
  Headline,
} from 'components';
import { PostSummary } from 'components/article';

import mapContentfulBlogPostToMarkdownRemarkBlogPost from '../mapContentfulBlogPostToMarkdownRemarkBlogPost';

const BlogTag = ({ pageContext, data }) => {
  const { tag } = pageContext;

  const posts = data.allContentfulBlogPost.edges
    .map(mapContentfulBlogPostToMarkdownRemarkBlogPost);
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO
        title={`All ${tag} blog posts | ${siteTitle}`}
        description={`
          Blog posts relating to the Backstage service catalog which are tagged with ${tag}.
        `}
      />

      <SitewideHeader />

      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <Headline>
            Blog posts tagged with: &quot;{tag}&quot;
          </Headline>


          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map(({ node }) => (
              <PostSummary post={node} key={node.fields.slug} />
            ))}
          </div>
        </div>
      </div>

      <SitewideFooter />
    </>
  );
};

export default BlogTag;

export const pageQuery = graphql`
  query Tag($tag: String!) {
    allContentfulBlogPost(
      sort: {date: DESC}
      filter: {tags: {eq: $tag}}
    ) {
      edges {
        node {
          description {
            childMarkdownRemark {
              rawMarkdownBody
            }
            description
          }
          date
          author {
            name
            avatar {
              gatsbyImageData(layout: FIXED, width: 40)
            }
          }
          slug
          tags
          title
          lastValidated
          body {
            childMarkdownRemark {
              timeToRead
            }
          }

          coverImage {
            gatsbyImageData(height: 192)
            title
          }
        }
      }
    }

    site {
      siteMetadata {
        title
        social {
          twitter
          linkedin
        }
      }
    }
  }
`;
