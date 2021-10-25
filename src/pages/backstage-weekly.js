import React from 'react';
import { graphql } from 'gatsby';

import { SEO, Link, SitewideHeader, SitewideFooter } from 'components';
import { ListHeader, TitleAndDescription, PubDate, HeadRssLink } from 'components/article';

const Issue = ({ post }) => (
  <div>
    <p className="text-sm text-gray-500">
      <PubDate post={post} />
    </p>

    <TitleAndDescription post={post} />

    <div className="mt-3">
      <Link
        to={post.fields.slug}
        className="text-base font-semibold text-primary-600 hover:text-primary-500"
      >
        Read this issue
      </Link>
    </div>
  </div>
);

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO
        title={`Backstage Weekly Newsletter | ${siteTitle}`}
        description={`
          Get the latest Backstage news in your inbox. Keep up to date with the latest
          releases and changes in this service catalog from Spotify.
        `}
      />
      <HeadRssLink />

      <SitewideHeader />

      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <ListHeader
            title="Backstage Weekly"
            description="Get the latest news, deep dives into Backstage features, and a roundup of recent open-source action."
            subscribeToNewsletter={true}
            siteMetadata={data.site.siteMetadata}
          />

          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map(({ node }) => (
              <Issue key={node.fields.slug} post={node} />
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
      filter: {
        fileAbsolutePath: { regex: "/.+/blog/.+/" }
        frontmatter: { tags: { in: ["newsletter"] } }
      }
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
