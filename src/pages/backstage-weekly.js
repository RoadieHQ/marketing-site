import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { SEO, Page, Headline, Lead, Link } from 'components';
import {
  NetlifyFormCallToAction,
  SubscribeToNewsletterSuccessModal,
} from 'components/CallToAction';
import { PubDate } from 'components/article';

import { FORM_NAMES } from '../contactFormConstants';
import CoverImage from '../../content/assets/blog/list-cover-image-1.png';

const ImageIssue = ({ issue }) => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0 relative">
      <img
        className="h-48 w-full object-cover"
        src={CoverImage}
        alt="Nightclub scene with spotlights and crowd"
      />
      <div className="absolute bottom-0 right-px text-white text-8xl">
        {issue.issueNumber}
      </div>
    </div>

    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <Link to={`/backstage-weekly${issue.slug}`} className="block mt-4">
          <p className="text-xl font-semibold text-gray-900">{issue.title}</p>
          <p className="mt-3 text-base text-gray-500">
            {issue.lead?.childMarkdownRemark?.rawMarkdownBody}
          </p>
        </Link>
      </div>

      <div className="mt-6 flex items-center">
        <PubDate date={issue.publishDate} />
      </div>
    </div>
  </div>
);

const BackstageWeekly = ({ data }) => {
  const {
    issues: {
      edges: issues,
    },
    site: {
      siteMetadata: {
        title: siteTitle,
      },
    }
  } = data;
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
            buttonText="Join 4,000+ Backstage enthusiasts"
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

        <div className="pt-10 mx-auto grid gap-5 md:grid-cols-2 lg:gap-12 lg:grid-cols-3 lg:max-w-none">
          {issues.map(({ node }) => (
            <ImageIssue key={node.slug} issue={node} />
          ))}
        </div>
      </Page>
    </>
  );
};

export default BackstageWeekly;

export const pageQuery = graphql`
  query BackstageWeekly {
    issues: allContentfulBackstageWeekly(sort: { publishDate: DESC }) {
      edges {
        node {
          lead {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          issueNumber
          publishDate
          slug
          title
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
