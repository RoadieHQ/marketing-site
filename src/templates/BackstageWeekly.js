import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import format from 'date-fns/format';

import { SEO, Headline, SitewideHeader, SitewideFooter } from 'components';
import HeadRssLink from 'components/article/HeadRssLink';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/CallToAction/SubscribeToNewsletter';

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

  const { author, title, publishDate, lead, issueNumber } = issue;

  const FORMAT_TOKEN = 'MMMM do, yyyy';
  const dateTimestamp = Date.parse(publishDate);

  let formattedDate = format(dateTimestamp, FORMAT_TOKEN);

  return (
    <>
      <SEO
        title={`${title} | ${siteTitle}`}
        description={lead.childMarkdownRemark.rawMarkdownBody}
      />

      <HeadRssLink />

      <SitewideHeader borderBottom={false} />

      <SubscribeToNewsletterSuccessModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={data.site.siteMetadata}
        email={email}
      />

      <article className="relative">
        <header className="bg-white mx-auto max-w-7xl mb-5 px-4 py-10 xl:rounded-lg lg:flex lg:px-0 lg:mb-10 items-center">
          <div className="lg:w-1/2 px-4 lg:px-10">
            <Link
              to="/backstage-weekly/"
              className="block uppercase mb-8 text-xl font-highlight text-orange-600 font-bold"
            >
              Backstage Weekly
            </Link>
            <Headline size="medium" className="mb-10">
              Backstage Weekly {issueNumber} - {title}
            </Headline>
            <strong>{author && author.name && <>By {author.name}</>}</strong>
            {` • `}
            {formattedDate}
          </div>
        </header>

        <section
          className="prose prose-primary max-w-none max-w-lg mx-auto lg:max-w-3xl mb-24 p-2"
          dangerouslySetInnerHTML={{ __html: issue.body.childMarkdownRemark.html }}
        />
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
    }
  }
`;
