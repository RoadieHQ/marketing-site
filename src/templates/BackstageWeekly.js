import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { SEO, SitewideHeader, SitewideFooter } from 'components';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/CallToAction/SubscribeToNewsletter';
import { Header, Body, Sidebar } from 'components/backstage-weekly';

const BackstageWeeklyTemplate = ({ data }) => {
  const {
    issue,
    site: {
      siteMetadata: {
        title: siteTitle,
      },
    },
  } = data;

  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
    setEmail('');
  };

  const { title, lead } = issue;

  return (
    <>
      <SEO
        title={`${title} | ${siteTitle}`}
        description={lead.childMarkdownRemark.rawMarkdownBody}
      />

      <SubscribeToNewsletterSuccessModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={data.site.siteMetadata}
        email={email}
      />

      <div className="mb-4">
        <SitewideHeader />
      </div>

      <div className="mb-12">
        <Header issue={issue} />
      </div>

      <main className="pb-8 px-4 lg:pb-28">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-3 md:gap-12 lg:gap-20">
            <article className="col-span-3 md:col-span-2">
              <Body issue={issue} />
              <SubscribeToNewsletterCTA
                setModalOpen={setModalOpen}
                email={email}
                setEmail={setEmail}
              />
            </article>

            <aside className="hidden md:block md:col-span-1">
              <Sidebar
                issue={issue}
                email={email}
                setEmail={setEmail}
                setModalOpen={setModalOpen}
              />
            </aside>
          </div>
        </div>
      </main>

      <SitewideFooter />
    </>
  );
};

export default BackstageWeeklyTemplate;

export const pageQuery = graphql`
  query BackstageWeeklyBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social {
          twitter
          linkedin
        }
      }
    }

    issue: contentfulBackstageWeekly(slug: { eq: $slug }) {
      title
      publishDate
      lead {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      issueNumber
      author {
        name
        avatar {
          gatsbyImageData(layout: FIXED, height: 40, placeholder: DOMINANT_COLOR)
        }
      }
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      backstageChangelog {
        childMarkdownRemark {
          html
        }
      }
      ecosystemChangelog {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
