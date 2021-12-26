import React, { useState } from 'react';
import { graphql } from 'gatsby';
import pick from 'lodash/pick';

import {
  SEO,
  ContentHeader,
  SitewideHeader,
  SitewideFooter,
} from 'components';
import HeadRssLink from 'components/article/HeadRssLink';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/CallToAction/SubscribeToNewsletter';

const mapContentfulBlogPostToMarkdownRemarkBlogPost = ({ node }) => ({
  frontmatter: {
    ...pick(node, ['title', 'tags', 'date', 'lastValidated']),

    author: {
      name: node.author.name,
    },
  },

  html: node.body.childMarkdownRemark.html,

  fields: {
    slug: node.slug,
  },
});

const BlogPostTemplate = ({ data }) => {
  const post = mapContentfulBlogPostToMarkdownRemarkBlogPost({
    node: data.markdownRemark,
  });
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
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }

    markdownRemark: contentfulBlogPost(slug: {eq: $slug}) {
      title
      date
      author {
        name
      }
      slug
      tags
      title
      lastValidated
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
