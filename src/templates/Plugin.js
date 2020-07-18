import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Prism from 'prismjs';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash/get';
import classnames from 'classnames';

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
import CallToAction from 'components/home/CallToAction';
import Logo from 'components/backstage/plugins/Logo';
import FormSubmissionModal from 'components/home/FormSubmissionModal';

import theme from '../theme';
import { postInnerStyles } from './BlogPost';

const useStyles = createUseStyles((localTheme) => ({
  header: {
    textAlign: 'center',
    paddingBottom: 40,
    paddingTop: 40,
  },

  coverImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },

  callToActionWrapper: {
    paddingTop: 40,
    paddingBottom: 40,
  },

  notes: postInnerStyles(localTheme),
}));

const PluginTemplate = ({ data, location }) => {
  const classes = useStyles();
  const { plugin, notes } = data;

  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const headerBackgroundColor = get(plugin, 'style.primaryColor', theme.palette.primary.light);
  const headerColor = get(plugin, 'style.contrastingColor', theme.palette.text.primary);

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <SEO title={plugin.seo.title} description={plugin.seo.description} />
      <FormSubmissionModal modalOpen={modalOpen} handleCloseModal={handleCloseModal} />

      <LayoutControl>
        <SitewideHeader location={location} />
      </LayoutControl>

      <header
        className={classes.header}
        style={{
          backgroundColor: headerBackgroundColor,
          color: headerColor,
        }}
      >
        <Logo sharpImage={plugin.childrenLogoImage[0].childImageSharp} />
        <Headline color={headerColor}>{plugin.heading}</Headline>
        <Lead text={plugin.lead} color={headerColor} />
      </header>

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
            <div
              className={classnames('typography-content', classes.notes)}
              dangerouslySetInnerHTML={{ __html: notes.html }}
            />
          </div>
        )}

        <div className={classes.callToActionWrapper}>
          <InterstitialTitle text="Backstage without the headaches" />
          <CallToAction setModalOpen={setModalOpen} />
        </div>
      </LayoutControl>

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
      }
    }

    plugin: pluginsDescriptionsYaml(name: { eq: $name }) {
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
          fixed(width: 200) {
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
