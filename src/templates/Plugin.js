import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Prism from 'prismjs';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash/get';

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
import Logo from 'components/backstage/plugins/Logo';
import FormSubmissionModal from 'components/actions/FormSubmissionModal';

import { FORM_NAMES } from '../contactFormConstants';
import theme from '../theme';

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
    paddingBottom: 40,
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
}));

const Header = ({ plugin }) => {
  const headerBackgroundColor = get(plugin, 'style.primaryColor', theme.palette.primary.light);
  const headerColor = get(plugin, 'style.contrastingColor', theme.palette.text.primary);
  const classes = useHeaderStyles();

  return (
    <header
      className={classes.root}
      style={{
        backgroundColor: headerBackgroundColor,
        color: headerColor,
      }}
    >
      <Logo sharpImage={plugin.childrenLogoImage[0].childImageSharp} />
      <Headline color={headerColor}>{plugin.heading}</Headline>
      <Lead text={plugin.lead} color={headerColor} />
    </header>
  );
};

const PluginTemplate = ({ data, location }) => {
  const classes = useStyles();
  const { plugin, notes, site } = data;
  const { title: siteTitle, newsletterUrl } = site.siteMetadata;

  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <SEO title={`${plugin.seo.title} | ${siteTitle}`} description={plugin.seo.description} />
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

          {plugin.gettingStarted.map(({ language, code, intro }, index) => (
            <CodeBlock language={language} code={code} intro={intro} key={`key-${index}`} />
          ))}

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
        title
        newsletterUrl
        social {
          twitter
        }
      }
    }

    plugin: yaml(name: { eq: $name }) {
      heading
      lead

      seo {
        title
        description
      }

      coverImage {
        alt
      }

      childrenLogoImage {
        childImageSharp {
          fixed(width: 200, grayscale: true) {
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
        language
        code
        intro
      }

      style {
        primaryColor
        contrastingColor
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
