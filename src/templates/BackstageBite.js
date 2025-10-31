import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';

import { Seo, SitewideHeader, SitewideFooter, Headline, Lead, TextLink as Link } from 'components';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/CallToAction/SubscribeToNewsletter';

const BackstageBiteTemplate = ({ data: { site, video } }) => {
  const { title: siteTitle } = site.siteMetadata;

  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
    setEmail('');
  };

  return (
    <>
      <Seo
        title={`${video.title} | ${siteTitle}`}
        description={video.shortDescription.childMarkdownRemark.rawMarkdownBody}
      />

      <SitewideHeader />

      <SubscribeToNewsletterSuccessModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={site.siteMetadata}
        email={email}
      />

      <main className="pt-4 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-28">
        <div className="relative max-w-lg mx-auto lg:max-w-4xl mb-24">
          <div className="mb-8">
            <div className="mb-1">
              <Link to="/backstage-bites/" color="primary">
                <ArrowCircleLeftIcon className="mr-1 h-6 w-6 inline" />
                <span className="align-middle">Back to videos</span>
              </Link>
            </div>

            <Headline size="small" className="mb-1 mt-0">
              {video.title}
            </Headline>

            <Lead>{video.shortDescription.childMarkdownRemark.rawMarkdownBody}</Lead>
          </div>

          <div className="relative mb-8" style={{ padding: '80.06% 0 0 0' }}>
            <iframe
              src={`https://player.vimeo.com/video/${video.sourceId}?h=36db3ee6af&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              title="Component Overview Page"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold">Video description</h3>
          </div>
          <section
            className="prose prose-primary max-w-none prose-lg"
            dangerouslySetInnerHTML={{ __html: video.longDescription.childMarkdownRemark.html }}
          />
        </div>

        <div className="relative max-w-lg mx-auto lg:max-w-xl">
          <SubscribeToNewsletterCTA setModalOpen={setModalOpen} email={email} setEmail={setEmail} />
        </div>
      </main>

      <script src="https://player.vimeo.com/api/player.js"></script>
      <SitewideFooter />
    </>
  );
};

export default BackstageBiteTemplate;

export const pageQuery = graphql`
  query BackstageBiteBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social {
          twitter
          linkedin
        }
      }
    }

    video: contentfulVideo(slug: { eq: $slug }) {
      title
      shortDescription {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      longDescription {
        childMarkdownRemark {
          html
        }
      }
      sourceId
      slug
    }
  }
`;
