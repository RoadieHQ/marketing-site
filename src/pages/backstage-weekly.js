import React from 'react';
import { graphql } from 'gatsby';

import { SEO, Link, Page } from 'components';
import { ListHeader, TitleAndDescription, PubDate, HeadRssLink } from 'components/article';

import mapContentfulBlogPostToMarkdownRemarkBlogPost from '../mapContentfulBlogPostToMarkdownRemarkBlogPost';

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

const BackstageWeekly = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges
    .map(mapContentfulBlogPostToMarkdownRemarkBlogPost);
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

      <Page titleDivide={true}>
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
      </Page>
    </>
  );
};

export default BackstageWeekly;

export const pageQuery = graphql`
  query BackstageWeekly {
    allContentfulBlogPost(
      sort: {fields: date, order: DESC}
      filter: {
        tags: { eq: "newsletter" }
      }
    ) {
      edges {
        node {
          description {
            childMarkdownRemark {
              rawMarkdownBody
            }
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
