import React, { useState } from 'react';
import { graphql } from 'gatsby';

import {
  SEO,
  ContentHeader,
  TailwindHeadContent,
  SitewideHeader,
  SitewideFooter,
} from 'components';
import HeadRssLink from 'components/article/HeadRssLink';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/CallToAction/SubscribeToNewsletter';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const { title: siteTitle } = data.site.siteMetadata;

  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
    setEmail('');
  };

  return (
    <>
      <SEO
        title={`${post.frontmatter.title} | ${siteTitle}`}
        description={post.frontmatter.description || post.excerpt}
      />

      <HeadRssLink />
      <TailwindHeadContent />

      <SitewideHeader />

      <SubscribeToNewsletterSuccessModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={data.site.siteMetadata}
        email={email}
      />

      <main className="pt-4 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-28">
        <article className="relative max-w-lg mx-auto lg:max-w-2xl mb-24">
          <div className="mb-8">
            <ContentHeader frontmatter={post.frontmatter} />
          </div>

          <section
            className="prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        <div className="relative max-w-lg mx-auto lg:max-w-2xl">
          <SubscribeToNewsletterCTA
            setModalOpen={setModalOpen}
            email={email}
            setEmail={setEmail}
          />
        </div>
      </main>

      <SitewideFooter />
    </>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query TailwindBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
        lastValidated
        tags
        author {
          name
        }
      }
    }
  }
`;
