import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import format from 'date-fns/format';
import isEmpty from 'lodash/isEmpty';

import { Seo, Headline, SitewideHeader, SitewideFooter } from 'components';
import HeadRssLink from 'components/article/HeadRssLink';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/CallToAction/SubscribeToNewsletter';

import mapContentfulBlogPostToMarkdownRemarkBlogPost from '../mapContentfulBlogPostToMarkdownRemarkBlogPost';
import Tags from '../components/Tags';

const BlogPostTemplate = ({ data }) => {
  const { node: post } = mapContentfulBlogPostToMarkdownRemarkBlogPost({
    node: data.markdownRemark,
  });
  const { title: siteTitle } = data.site.siteMetadata;

  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
    setEmail('');
  };

  const coverImage = getImage(post.coverImage);
  const { author, title, date, tags, lastValidated } = post.frontmatter;

  const FORMAT_TOKEN = 'MMMM do, yyyy';
  const dateTimestamp = Date.parse(date);

  let formattedDate = format(dateTimestamp, FORMAT_TOKEN);
  const lastValidatedTimestamp = Date.parse(lastValidated);
  if (lastValidated && lastValidatedTimestamp) {
    const formattedLastvalidated = format(lastValidatedTimestamp, FORMAT_TOKEN);
    formattedDate = `${formattedDate} — last validated on ${formattedLastvalidated}`;
  }

  return (
    <>
      <Seo
        title={`${post.frontmatter.title} | ${siteTitle}`}
        description={post.frontmatter.description || post.excerpt}
        headerImage={getSrc(post.coverImage)}
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
              to="/blog"
              className="block uppercase mb-8 text-xl font-highlight text-orange-600 font-bold"
            >
              Roadie’s Blog
            </Link>
            <Headline size="medium" className="mb-10">
              {title}
            </Headline>
            <strong>{author && author.name && <>By {author.name}</>}</strong>
            {` • `}
            {formattedDate}
            {!isEmpty(tags) && (
              <div className="mt-4">
                <Tags tags={tags} />
              </div>
            )}
          </div>
          <div className="lg:w-1/2 mt-5 lg:mt-0">
            {coverImage && (
              <GatsbyImage
                image={coverImage}
                alt={post.coverImage.title}
                className="rounded-lg lg:rounded-tr-none lg:rounded-br-none"
              />
            )}
          </div>
        </header>

        <section
          className="prose prose-primary max-w-none max-w-lg mx-auto lg:max-w-3xl mb-24 p-2"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      <div className="relative max-w-lg mx-auto lg:max-w-xl mb-10 p-2">
        <SubscribeToNewsletterCTA setModalOpen={setModalOpen} email={email} setEmail={setEmail} />
      </div>

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
          linkedin
        }
      }
    }

    markdownRemark: contentfulBlogPost(slug: { eq: $slug }) {
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
      coverImage {
        gatsbyImageData(height: 500)
        title
      }
    }
  }
`;
