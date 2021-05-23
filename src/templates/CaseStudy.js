import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';

import { SEO, ContentHeader, StickyFooter } from 'components';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/actions/SubscribeToNewsletter';

const useStyles = createUseStyles((theme) => ({
  main: theme.preMadeStyles.content,
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
