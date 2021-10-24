import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  TextLink as Link,
  Title,
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

      <main className="pt-4 pb-8 px-4 lg:pt-8 lg:pb-28">
        <div className="relative max-w-lg mx-auto lg:max-w-3xl">

          <Header plugin={plugin} />

          <ResponsiveSpacer>
            <div className="text-center pb-3">
              <Title text="Getting started is simple" />
            </div>

            <div className="prose prose-primary max-w-none">
              <p>
                Don&apos;t want to spend your time installing and upgrading Backstage plugins?{' '}
                <Link to="/tailwind/free-trial/" color="primary">Get managed Backstage</Link> from Roadie.
              </p>
            </div>
          </ResponsiveSpacer>

          <ResponsiveSpacer>
            <div className="text-center pb-3">
              <Title text="Installation steps" />
            </div>

            {plugin.frontmatter.gettingStarted.map((section, index) =>
              section.title && section.title !== '' ? (
                <div className="text-center pb-3">
                  <Title text={section.title} key={`key-${index}`} />
                </div>
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
            <div className="text-center pb-3">
              <Title text="How it looks" />
            </div>

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
                <div className="text-center pb-3">
                  <Title text="Things to know" />
                </div>

                <div
                  className="prose prose-primary max-w-none"
                  dangerouslySetInnerHTML={{ __html: plugin.notes }}
                />
              </div>
            </ResponsiveSpacer>
          )}
        </div>

        <div className="relative max-w-lg mx-auto lg:max-w-3xl mt-24">
          <SubscribeToNewsletterCTA
            setModalOpen={setModalOpen}
            email={email}
            setEmail={setEmail}
          />
        </div>
      </main>

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
