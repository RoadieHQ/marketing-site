import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';

import { SEO, InterstitialTitle, Link, ContentHeader, StickyFooter } from 'components';
import FormSubmissionModal from 'components/actions/FormSubmissionModal';
import CallToAction from 'components/actions/NetlifyFormCallToAction';
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

      <FormSubmissionModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        titleText="You're subscribed!"
        bodyText={
          <>
            <p>We publish most Mondays so you&apos;ll receive your first edition soon.</p>
            <p>
              In the meantime, we&apos;d love to hear why you&apos;re excited about Backstage.
              Please fill out this short survey...
            </p>
          </>
        }
        siteMetadata={data.site.siteMetadata}
        followOn="NEEDS_ANALYSIS_SURVEY"
        email={email}
      />

      <StickyFooter maxWidthBreakpoint={MAX_WIDTH_BREAKPOINT} location={location}>
        <main>
          <article>
            <ContentHeader frontmatter={post.frontmatter} />
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
            email={email}
            setEmail={setEmail}
          />
        </div>
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
