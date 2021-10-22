import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Prism from 'prismjs';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  TextLink as Link,
  StickyFooter,
  InterstitialTitle,
  CodeBlock,
  SEO,
  ResponsiveSpacer,
  PageMargins,
} from 'components';
import { EditOnGitHubLink, Header } from 'components/backstage/plugins';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/actions/SubscribeToNewsletter';

const useStyles = createUseStyles((theme) => ({
  coverImage: {
    ...theme.preMadeStyles.content['& .gatsby-resp-image-wrapper'],
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
        <PageMargins>
          <Header plugin={plugin} />

          <ResponsiveSpacer>
            <InterstitialTitle text="Getting started is simple" />

            <div className={classes.notes}>
              <p>
                Don&apos;t want to spend your time installing and upgrading Backstage plugins?{' '}
                <Link to="/free-trial/" color="primary">Get managed Backstage</Link> from Roadie.
              </p>
            </div>

            <InterstitialTitle text="Installation steps" />

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

            <div className={classes.notes}>
              <p>
                Found a mistake? <EditOnGitHubLink siteMetadata={siteMetadata} plugin={plugin} />.
              </p>
            </div>
          </ResponsiveSpacer>
          
          { plugin.frontmatter.coverImage &&
            <ResponsiveSpacer>
              <InterstitialTitle text="How it looks" />

              <div>
                
                  <GatsbyImage
                    image={plugin.frontmatter.coverImage.childImageSharp.gatsbyImageData}
                    alt={plugin.frontmatter.coverImageAlt}
                    className={classes.coverImage}
                  />
              </div>
            </ResponsiveSpacer>
          }

          {plugin.notes && plugin.notes !== '' && (
            <ResponsiveSpacer>
              <div>
                <InterstitialTitle text="Things to know" />
                <div className={classes.notes} dangerouslySetInnerHTML={{ __html: plugin.notes }} />
              </div>
            </ResponsiveSpacer>
          )}

          <SubscribeToNewsletterCTA
            setModalOpen={setModalOpen}
            email={email}
            setEmail={setEmail}
          />
        </PageMargins>
      </StickyFooter>
    </>
  );
};

export default PluginTemplate;

export const pageQuery = graphql`
  query PluginBySlug($slug: String!) {
    site {
      siteMetadata {
        sourceCodeUrl
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

        tags

        attribution {
          href
          text
        }

        logoImage {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 140)
          }
        }

        coverImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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
