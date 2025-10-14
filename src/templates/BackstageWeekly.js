import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';

import { SEO, Headline, SitewideHeader, SitewideFooter, Title } from 'components';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/CallToAction/SubscribeToNewsletter';
import { PubDate } from 'components/article';

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

  const { author, title, lead, publishDate, issueNumber, body, backstageChangelog, ecosystemChangelog } = issue;

  return (
    <>
      <SEO
        title={`${title} | ${siteTitle}`}
        description={lead.childMarkdownRemark.rawMarkdownBody}
      />

      <SitewideHeader borderBottom={false} />

      <SubscribeToNewsletterSuccessModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={data.site.siteMetadata}
        email={email}
      />

      <article className="relative">
        <div className="mx-auto max-w-3xl px-2">
          <header className="mb-5 py-6 border-solid border-b-2">
            <div className="mb-10">
              <Link to="/backstage-weekly/" className="font-bold text-blueroadie">
                <span className="text-orange-500">←</span> More Backstage Weekly issues
              </Link>
            </div>

            <div className="mb-6">
              <Headline size="medium">
                Backstage Weekly {issueNumber} - {title}
              </Headline>
            </div>

            {lead && (
              <div
                className="prose prose-primary max-w-none mb-2"
                dangerouslySetInnerHTML={{ __html: lead.childMarkdownRemark.rawMarkdownBody }}

              />
            )}
            <strong>{author?.name && <>By {author.name}</>}</strong>
            {` • `}
            <PubDate date={publishDate} />
          </header>

          {body && (
            <div className="mb-12 pb-12 border-solid border-b-2">
              <section
                className="prose prose-primary max-w-none"
                dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
              />
            </div>
          )}

          {backstageChangelog && (
            <div className="mb-12 pb-12 border-solid border-b-2">
              <div className="mb-4">
                <Title>What{"'"}s happening in Backstage core</Title>
              </div>
              <section
                className="prose prose-primary max-w-none mb-24"
                dangerouslySetInnerHTML={{ __html: backstageChangelog.childMarkdownRemark.html }}
              />
            </div>
          )}

          {ecosystemChangelog && (
            <div className="mb-12 pb-12 border-solid border-b-2">
              <div className="mb-4">
                <Title>What{"'"}s happening in the plugin ecosystem</Title>
              </div>
              <section
                className="prose prose-primary max-w-none mb-24"
                dangerouslySetInnerHTML={{ __html: backstageChangelog.childMarkdownRemark.html }}
              />
            </div>
          )}
        </div>
      </article>

      <div className="relative max-w-lg mx-auto lg:max-w-xl mb-10 p-2">
        <SubscribeToNewsletterCTA setModalOpen={setModalOpen} email={email} setEmail={setEmail} />
      </div>

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
