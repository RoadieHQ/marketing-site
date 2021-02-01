import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';

import { SEO, InterstitialTitle, Link } from 'components';
import StickyFooter from 'components/layouts/StickyFooter';
import PostHeader from 'components/blog/PostHeader';
import FormSubmissionModal from 'components/actions/FormSubmissionModal';
import CallToAction from 'components/actions/CallToAction';
import { FORM_NAMES } from '../contactFormConstants';

const useStyles = createUseStyles((theme) => ({
  main: theme.preMadeStyles.content,

  callToActionWrapper: {
    paddingTop: 40,
    paddingBottom: 40,
    textAlign: 'center',
  },

  callToActionParagraph: {
    marginBottom: 24,
    marginTop: 0,
  },
}));

const MAX_WIDTH_BREAKPOINT = 'md';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const classes = useStyles();
  const { title: siteTitle } = data.site.siteMetadata;

  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SEO
        title={`${post.frontmatter.title} | ${siteTitle}`}
        description={post.frontmatter.description || post.excerpt}
      />
      <FormSubmissionModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        titleText="You're subscribed!"
        bodyText="You should receive the first edition within a week."
        siteMetadata={data.site.siteMetadata}
        followOn="TWITTER"
      />

      <StickyFooter maxWidthBreakpoint={MAX_WIDTH_BREAKPOINT} location={location}>
        <main>
          <article>
            <PostHeader post={post} />
            <section className={classes.main} dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </main>

        <div className={classes.callToActionWrapper}>
          <InterstitialTitle text="Become a Backstage expert" />

          <p className={classes.callToActionParagraph}>
            To get the latest news, deep dives into Backstage features, and a roundup of recent
            open-source action, sign up for Roadie&apos;s Backstage Weekly.{' '}
            <Link to="/backstage-weekly/">See recent editions.</Link>
          </p>

          <CallToAction
            setModalOpen={setModalOpen}
            buttonText="Subscribe"
            netlifyFormName={FORM_NAMES.subscribeToNewsletter}
            followOn="TWITTER"
          />
        </div>
      </StickyFooter>
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
      }
    }
  }
`;
