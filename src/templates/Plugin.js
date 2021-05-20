import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Prism from 'prismjs';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import {
  Lead,
  Headline,
  StickyFooter,
  InterstitialTitle,
  CodeBlock,
  SEO,
} from 'components';
import CallToAction from 'components/actions/NetlifyFormCallToAction';
import { Logo, Attribution, EditOnGitHubLink } from 'components/backstage/plugins';
import FormSubmissionModal from 'components/actions/FormSubmissionModal';

import { FORM_NAMES } from '../contactFormConstants';

const useStyles = createUseStyles((theme) => ({
  coverImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },

  callToActionWrapper: {
    paddingTop: 40,
    paddingBottom: 40,
  },

  notes: theme.preMadeStyles.content,
}));

const useHeaderStyles = createUseStyles(() => ({
  root: {
    textAlign: 'center',
    paddingBottom: 90,
    paddingTop: 40,
  },
}));

const Header = ({ plugin }) => {
  const classes = useHeaderStyles();

  return (
    <header className={classes.root}>
      <Logo sharpImage={plugin.frontmatter.logoImage.childImageSharp} />
      <Headline>{plugin.frontmatter.heading}</Headline>
      <Lead>{plugin.frontmatter.lead}</Lead>
      <Attribution attribution={plugin.frontmatter.attribution} />
    </header>
  );
};

const PluginTemplate = ({ data, location }) => {
  const classes = useStyles();
  const { plugin, site: { siteMetadata } } = data;

  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
    setEmail('');
  };

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <SEO title={plugin.frontmatter.seo.title} description={plugin.frontmatter.seo.description} />
      <FormSubmissionModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        bodyText={
          <>
            <p>We publish most Mondays so you&apos;ll receive your first edition soon.</p>
            <p>
              In the meantime, we&apos;d love to hear why you&apos;re excited about Backstage.
              Please fill out this short survey...
            </p>
          </>
        }
        siteMetadata={siteMetadata}
        followOn="NEEDS_ANALYSIS_SURVEY"
        email={email}
      />

      <StickyFooter location={location} maxWidthBreakpoint="md">
        <Header plugin={plugin} />

        <InterstitialTitle text="Getting started is simple" />

        {plugin.frontmatter.gettingStarted.map((section, index) =>
          section.title && section.title !== '' ? (
            <InterstitialTitle text={section.title} key={`key-${index}`} />
          ) : (
            <CodeBlock
              language={section.language}
              code={section.code}
              intro={section.intro}
              key={`key-${index}`}
            />
          )
        )}

        <p>
          Found a mistake? <EditOnGitHubLink siteMetadata={siteMetadata} plugin={plugin} />.
        </p>

        <InterstitialTitle text="How it looks" />

        <div>
          <Img
            fluid={plugin.frontmatter.coverImage.childImageSharp.fluid}
            alt={plugin.frontmatter.coverImageAlt}
            className={classes.coverImage}
          />
        </div>

        {plugin.notes && plugin.notes !== '' && (
          <div>
            <InterstitialTitle text="Things to know" />
            <div className={classes.notes} dangerouslySetInnerHTML={{ __html: plugin.notes }} />
          </div>
        )}

        <div className={classes.callToActionWrapper}>
          <InterstitialTitle text="Become a Backstage expert" />

          <p className={classes.callToActionParagraph}>
            To get the latest news, deep dives into Backstage features, and a roundup of recent
            open-source action, sign up for Roadie&apos;s Backstage Weekly.{' '}
            <a href="/backstage-weekly/">See recent editions.</a>
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

export default PluginTemplate;

export const pageQuery = graphql`
  query PluginBySlug($slug: String!) {
    site {
      siteMetadata {
        social {
          twitter
        }
      }
    }

    plugin: markdownRemark(fields: { slug: { eq: $slug } }) {
      notes: html
      fileAbsolutePath

      frontmatter {
        humanName
        lead
        heading

        attribution {
          href
          text
        }

        logoImage {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        coverImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        coverImageAlt

        seo {
          title
          description
        }

        gettingStarted {
          intro
          code
          language
        }
      }
    }
  }
`;
