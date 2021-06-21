import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';

import { SEO, ContentHeader, StickyFooter } from 'components';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/actions/SubscribeToNewsletter';

const useStyles = createUseStyles((theme) => ({
  main: {
    ...theme.preMadeStyles.content,

    '& .gatsby-resp-image-wrapper': {
      // This is a complete hack that I (David) am putting in place because I need to publish
      // the newsletter and I don't have time to fix this properly.
      //
      // The Gatsby Remark images plugin is adding a box-shadow to all images it renders by
      // default. See gatsby-config.js to see how this happens. In most cases, this looks
      // great. However, the Lunar team supplied me with images which already have a box shadow
      // on them. It looks terrible when they are wrapped in a second shadow.
      //
      // My hack is to force box shadow off for all case-studies. Later I can come up with
      // a more nuanced approach.
      boxShadow: 'none !important',
    },
  },
}));

const MAX_WIDTH_BREAKPOINT = 'md';

const CaseStudyTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const classes = useStyles();
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

      <SubscribeToNewsletterSuccessModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={data.site.siteMetadata}
        email={email}
      />

      <StickyFooter maxWidthBreakpoint={MAX_WIDTH_BREAKPOINT} location={location}>
        <main>
          <article>
            <ContentHeader frontmatter={post.frontmatter} />
            <section className={classes.main} dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </main>

        <SubscribeToNewsletterCTA
          setModalOpen={setModalOpen}
          email={email}
          setEmail={setEmail}
        />
      </StickyFooter>
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
        author {
          name
        }
      }
    }
  }
`;
