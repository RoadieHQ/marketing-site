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
import Logo from 'components/backstage/plugins/Logo';
import FormSubmissionModal from 'components/actions/FormSubmissionModal';
import TextLink from 'components/SitewideHeader/TextLink';

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

const useAttributionStyles = createUseStyles((theme) => ({
  link: {
    color: theme.palette.primary.main,

    '&:visited': {
      color: theme.palette.primary.main,
    },
  },
}));

const Attribution = ({ attribution }) => {
  const classes = useAttributionStyles();
  if (!attribution) return null;

  if (!attribution.href || attribution.href === '') {
    return <p>by {attribution.text}</p>;
  }

  return (
    <p>
      by <TextLink to={attribution.href} text={attribution.text} className={classes.link} />
    </p>
  );
};

const Header = ({ plugin }) => {
  const classes = useHeaderStyles();

  return (
    <header className={classes.root}>
      <Logo sharpImage={plugin.childrenLogoImage[0].childImageSharp} />
      <Headline>{plugin.heading}</Headline>
      <Lead text={plugin.lead} />
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
