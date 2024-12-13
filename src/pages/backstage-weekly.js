import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { SEO, Page, Headline, Lead } from 'components';
import { TitleAndDescription, PubDate } from 'components/article';
import {
  NetlifyFormCallToAction,
  SubscribeToNewsletterSuccessModal,
} from 'components/CallToAction';

import { FORM_NAMES } from '../contactFormConstants';
import mapContentfulBlogPostToMarkdownRemarkBlogPost from '../mapContentfulBlogPostToMarkdownRemarkBlogPost';
import CoverImage from '../../content/assets/blog/list-cover-image-1.png';

const ImageIssue = ({ post }) => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0 relative">
      <img
        className="h-48 w-full object-cover"
        src={CoverImage}
        alt="Nightclub scene with spotlights and crowd"
      />
      <div className="absolute bottom-0 right-px text-white text-8xl">
        {post.frontmatter.issueNumber}
      </div>
    </div>

    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <TitleAndDescription post={post} />
      </div>

      <div className="mt-6 flex items-center">
        <PubDate post={post} />
      </div>
    </div>
  </div>
);

const extractNewsletterDetailsFromPost = ({ node: { frontmatter, ...rest } }) => {
  const mainTitle = frontmatter.title.replace(/Backstage Weekly \d\d\d? - /, '');
  const matchedIssueNumber = frontmatter.title.match(/Backstage Weekly (\d\d\d?)/);
  const issueNumber = matchedIssueNumber && matchedIssueNumber[1];

  return {
    node: {
      frontmatter: {
        ...frontmatter,
        title: mainTitle,
        issueNumber,
      },
      ...rest,
    },
  };
};

const BackstageWeekly = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges.map(mapContentfulBlogPostToMarkdownRemarkBlogPost);
  const siteTitle = data.site.siteMetadata.title;
  const postsWithExtractedInfo = posts.map(extractNewsletterDetailsFromPost);
  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
    setEmail('');
  };

  return (
    <>
      <SEO
        title={`Backstage Weekly Newsletter | ${siteTitle}`}
        description={`
          Get the latest Backstage news in your inbox. Keep up to date with the latest
          releases and changes in this service catalog from Spotify.
        `}
      />

      <SubscribeToNewsletterSuccessModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={data.site.siteMetadata}
        email={email}
      />

      <Page titleDivide={false} headerBorderBottom={false}>
        <div className="m-auto lg:max-w-2xl mb-44">
          <div className="mb-4">
            <Headline el="h2">Backstage Weekly</Headline>
          </div>
          <div className="mb-4">
            <Lead>
              Get the latest news, deep dives into Backstage features, and a roundup of recent
              open-source action.
            </Lead>
          </div>

          <NetlifyFormCallToAction
            setModalOpen={(open) => {
              setModalOpen(open);
            }}
            buttonText="Join 1,500+ Backstage enthusiasts"
            netlifyFormName={FORM_NAMES.subscribeToNewsletter}
            email={email}
            setEmail={setEmail}
          />
        </div>

        <div>
          <Headline el="h3" size="small">
            Previous issues
          </Headline>
        </div>

        <div className="pt-10 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {postsWithExtractedInfo.map(({ node }) => (
            <ImageIssue key={node.fields.slug} post={node} />
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
      sort: { fields: date, order: DESC }
      filter: { tags: { eq: "newsletter" } }
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
      }
    }
  }
`;
