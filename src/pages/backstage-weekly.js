import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';

import { Lead, SEO, StickyFooter, InterstitialTitle } from 'components';
import PostSummary from 'components/blog/PostSummary';
import FormSubmissionModal from 'components/actions/FormSubmissionModal';
import CallToAction from 'components/actions/NetlifyFormCallToAction';
import HeadRssLink from 'components/blog/HeadRssLink';
import { FORM_NAMES } from '../contactFormConstants';
import roadieRLogo from '../../content/assets/roadie-r-764x764.png';

const useStyles = createUseStyles(() => ({
  logo: {
    height: 100,
  },

  callToActionWrapper: {
    paddingTop: 40,
    paddingBottom: 180,
    textAlign: 'center',
  },

  callToActionParagraph: {
    marginBottom: 40,
    marginTop: 0,
  },
}));

const MAX_WIDTH_BREAKPOINT = 'md';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
    setEmail('');
  };

  return (
    <>
      <SEO
        title={`Backstage Weekly Newsletter | ${siteTitle}`}
        description={`
          Get the latest Backstage news in your inbox. Keep up to date with the latest
          releases and changes in this service catalog from Spotify.
        `}
      />

      <HeadRssLink />

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
        <div className={classes.callToActionWrapper}>
          <img alt="The Roadie logo" src={roadieRLogo} className={classes.logo} />
          <InterstitialTitle text="Roadie's Backstage Weekly Newsletter" />

          <p className={classes.callToActionParagraph}>
            Get the latest news, deep dives into Backstage features, and a roundup of recent
            open-source action. Track the project without having to watch the GitHub repo.
          </p>

          {/* I feel this is ok, since subscribing to the newsletter is one of a very
              small number of actions the user can take on this particular page */}
          {/* eslint-disable jsx-a11y/no-autofocus */}
          <CallToAction
            setModalOpen={setModalOpen}
            buttonText="Subscribe"
            netlifyFormName={FORM_NAMES.subscribeToNewsletter}
            autoFocus={true}
            email={email}
            setEmail={setEmail}
          />
          {/* eslint-enable jsx-a11y/no-autofocus */}
        </div>

        <Lead>Previous editions</Lead>
        {posts.map(({ node }) => (
          <PostSummary key={node.fields.slug} post={node} />
        ))}
      </StickyFooter>
    </>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/.+/blog/.+/" }
        frontmatter: { tags: { in: ["newsletter"] } }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }

          frontmatter {
            date
            title
            description
            tags
          }
        }
      }
    }

    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }
  }
`;
