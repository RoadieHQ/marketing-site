import React from 'react';
import { graphql } from 'gatsby';

import { SEO, SitewideHeader, SitewideFooter, TailwindHeadContent } from 'components/tailwind';
import HeadRssLink from 'components/blog/HeadRssLink';
import PostSummary from 'components/tailwind/blog/PostSummary';

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;

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
      <TailwindHeadContent />
      <SitewideHeader />

      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Blog
            </h2>
          </div>

          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map(({ node }) => (
              <PostSummary key={node.fields.slug} post={node} />
            ))}
          </div>
        </div>
      </div>

      <SitewideFooter />
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
          timeToRead

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
              avatar {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, width: 40)
                }
              }
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
