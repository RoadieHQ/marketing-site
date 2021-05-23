import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Prism from 'prismjs';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { StickyFooter, InterstitialTitle, CodeBlock, SEO } from 'components';
import { EditOnGitHubLink, Header } from 'components/backstage/plugins';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/actions/SubscribeToNewsletter';

const useStyles = createUseStyles((theme) => ({
  coverImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },

  notes: theme.preMadeStyles.content,
}));

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
      <SubscribeToNewsletterSuccessModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={data.site.siteMetadata}
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

        <SubscribeToNewsletterCTA
          setModalOpen={setModalOpen}
          email={email}
          setEmail={setEmail}
        />
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
