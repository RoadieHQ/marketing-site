import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  TextLink as Link,
  InterstitialTitle,
  CodeBlock,
  SEO,
  ResponsiveSpacer,
  SitewideHeader,
  SitewideFooter,
  TailwindHeadContent,
} from 'components/tailwind';
import { EditOnGitHubLink, Header } from 'components/tailwind/backstage/plugins';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/tailwind/CallToAction/SubscribeToNewsletter';

const PluginTemplate = ({ data }) => {
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
      <TailwindHeadContent />

      <SubscribeToNewsletterSuccessModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={data.site.siteMetadata}
        email={email}
      />

      <SitewideHeader />

      <div className="pt-4 pb-8 px-4 lg:pt-24 lg:pb-28">
        <div className="relative max-w-lg mx-auto lg:max-w-3xl">

          <Header plugin={plugin} />

          <ResponsiveSpacer>
            <InterstitialTitle text="Getting started is simple" />

            <div className="prose prose-primary max-w-none">
              <p>
                Don&apos;t want to spend your time installing and upgrading Backstage plugins?{' '}
                <Link to="/tailwind/free-trial/" color="primary">Get managed Backstage</Link> from Roadie.
              </p>
            </div>
          </ResponsiveSpacer>

          <ResponsiveSpacer>
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
          </ResponsiveSpacer>

          <ResponsiveSpacer>
            <div className="prose prose-primary">
              <p>
                Found a mistake? <EditOnGitHubLink siteMetadata={siteMetadata} plugin={plugin} />.
              </p>
            </div>
          </ResponsiveSpacer>

          <ResponsiveSpacer>
            <InterstitialTitle text="How it looks" />

            <div>
              <GatsbyImage
                image={plugin.frontmatter.coverImage.childImageSharp.gatsbyImageData}
                alt={plugin.frontmatter.coverImageAlt}
                className="max-w-full max-h-full shadow-small"
              />
            </div>
          </ResponsiveSpacer>

          {plugin.notes && plugin.notes !== '' && (
            <ResponsiveSpacer>
              <div>
                <InterstitialTitle text="Things to know" />
                <div
                  className="prose prose-primary max-w-none"
                  dangerouslySetInnerHTML={{ __html: plugin.notes }}
                />
              </div>
            </ResponsiveSpacer>
          )}
        </div>
      </div>

      <div className="pt-4 pb-8 px-4 md:mb-24">
        <SubscribeToNewsletterCTA
          setModalOpen={setModalOpen}
          email={email}
          setEmail={setEmail}
        />
      </div>

      <SitewideFooter />
    </>
  );
};

export default PluginTemplate;

export const pageQuery = graphql`
  query TailwindPluginBySlug($slug: String!) {
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
