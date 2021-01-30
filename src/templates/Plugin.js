import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Prism from 'prismjs';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import {
  Lead,
  Headline,
  LayoutControl,
  SitewideHeader,
  InterstitialTitle,
  CodeBlock,
  SitewideFooter,
  SEO,
} from 'components';
import CallToAction from 'components/actions/CallToAction';
import { Logo, Attribution } from 'components/backstage/plugins';
import FormSubmissionModal from 'components/actions/FormSubmissionModal';

import { FORM_NAMES } from '../contactFormConstants';

const useStyles = createUseStyles((theme) => ({
  siteWideHeaderWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
  },

  coverImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },

  callToActionWrapper: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },

  notes: theme.preMadeStyles.content,

  contentWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
  },
}));

const useHeaderStyles = createUseStyles(() => ({
  root: {
    textAlign: 'center',
    paddingBottom: 90,
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
}));

const Header = ({ plugin }) => {
  const classes = useHeaderStyles();

  return (
    <header className={classes.root}>
      <Logo sharpImage={plugin.childrenLogoImage[0].childImageSharp} />
      <Headline>{plugin.heading}</Headline>
      <Lead>{plugin.lead}</Lead>
      <Attribution attribution={plugin.attribution} />
    </header>
  );
};

const PluginTemplate = ({ data, location }) => {
  const classes = useStyles();
  const { plugin, notes, site } = data;
  const { newsletterUrl } = site.siteMetadata;

  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <SEO title={plugin.seo.title} description={plugin.seo.description} />
      <FormSubmissionModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={data.site.siteMetadata}
        followOn="TWITTER"
      />

      <div className={classes.siteWideHeaderWrapper}>
        <LayoutControl>
          <SitewideHeader location={location} />
        </LayoutControl>
      </div>

      <Header plugin={plugin} />

      <div className={classes.contentWrapper}>
        <LayoutControl maxWidthBreakpoint="md">
          <InterstitialTitle text="Getting started is simple" />

          {plugin.gettingStarted.map((section, index) => {
            switch (section.type) {
              case 'section':
                return <InterstitialTitle text={section.title} key={`key-${index}`} />;
              default:
                return (
                  <CodeBlock
                    language={section.language}
                    code={section.code}
                    intro={section.intro}
                    key={`key-${index}`}
                  />
                );
            }
          })}

          <InterstitialTitle text="How it looks" />

          <div>
            <Img
              fluid={plugin.childrenCoverImage[0].childImageSharp.fluid}
              alt={plugin.coverImage.alt}
              className={classes.coverImage}
            />
          </div>

          {notes && notes !== '' && (
            <div>
              <InterstitialTitle text="Things to know" />
              <div className={classes.notes} dangerouslySetInnerHTML={{ __html: notes.html }} />
            </div>
          )}

          <div className={classes.callToActionWrapper}>
            <InterstitialTitle text="Become a Backstage expert" />

            <p className={classes.callToActionParagraph}>
              To get the latest news, deep dives into Backstage features, and a roundup of recent
              open-source action, sign up for Roadie&apos;s Backstage Weekly.{' '}
              <a href={newsletterUrl} target="_blank" rel="noopener noreferrer">
                See recent editions.
              </a>
            </p>

            <CallToAction
              setModalOpen={setModalOpen}
              buttonText="Subscribe"
              netlifyFormName={FORM_NAMES.subscribeToNewsletter}
            />
          </div>
        </LayoutControl>
      </div>

      <LayoutControl>
        <SitewideFooter />
      </LayoutControl>
    </>
  );
};

export default PluginTemplate;

export const pageQuery = graphql`
  query PluginDescriptionByName($name: String!) {
    site {
      siteMetadata {
        newsletterUrl
        social {
          twitter
        }
      }
    }

    plugin: yaml(name: { eq: $name }) {
      heading
      lead
      attribution {
        text
        href
      }

      seo {
        title
        description
      }

      coverImage {
        alt
      }

      childrenLogoImage {
        childImageSharp {
          fixed(width: 200, grayscale: false) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      childrenCoverImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      gettingStarted {
        # Title section
        type
        title
        # Code Block section
        language
        code
        intro
      }
    }

    notes: markdownRemark(frontmatter: { name: { eq: $name } }) {
      html
      frontmatter {
        name
      }
    }
  }
`;
