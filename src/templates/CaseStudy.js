import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { SEO, ContentHeader, SitewideHeader, SitewideFooter } from 'components';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/CallToAction/SubscribeToNewsletter';

const CaseStudyTemplate = ({ data: { site, caseStudy } }) => {
  const { title: siteTitle } = site.siteMetadata;

  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
    setEmail('');
  };

  return (
    <>
      <SEO title={`${caseStudy.title} | ${siteTitle}`} description={caseStudy.description} />

      <SitewideHeader />

      <SubscribeToNewsletterSuccessModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={site.siteMetadata}
        email={email}
      />

      <main className="pt-4 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-28">
        <article className="relative max-w-lg mx-auto lg:max-w-2xl mb-24">
          <div className="mb-8">
            <ContentHeader
              frontmatter={{
                title: caseStudy.title,
                date: caseStudy.date,
                author: caseStudy.author,
              }}
            />
          </div>

          <section
            className="prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: caseStudy.body.childMarkdownRemark.html }}
          />
        </article>

        <div className="relative max-w-lg mx-auto lg:max-w-2xl">
          <SubscribeToNewsletterCTA setModalOpen={setModalOpen} email={email} setEmail={setEmail} />
        </div>
      </main>

      <div className="pt-4 pb-8 px-4 md:mb-24"></div>

      <SitewideFooter />
    </>
  );
};

export default CaseStudyTemplate;

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social {
          twitter
          linkedin
        }
      }
    }

    caseStudy: contentfulCaseStudy(slug: { eq: $slug }) {
      body {
        childMarkdownRemark {
          html
        }
      }

      date
      author {
        name
        avatar {
          gatsbyImageData(layout: FIXED, width: 40)
        }
      }
      title
    }
  }
`;
