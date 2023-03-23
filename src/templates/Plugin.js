import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Button, Title, CodeBlock, SEO, SitewideHeader, SitewideFooter } from 'components';
import { EditOnGitHubLink, Header } from 'components/backstage/plugins';
import {
  SubscribeToNewsletterSuccessModal,
  SubscribeToNewsletterCTA,
} from 'components/CallToAction/SubscribeToNewsletter';
import { ExternalLinkIcon } from '@heroicons/react/outline';

const PluginTemplate = ({ data }) => {
  const {
    plugin,
    site: { siteMetadata },
  } = data;

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

      <SitewideHeader />

      <Header plugin={plugin} />
      <main className="pt-4 pb-8 px-4 lg:pb-28">
        <div className="relative max-w-lg mx-auto lg:max-w-4xl">
          <nav className="invisible lg:visible mb-8 flex flex-wrap text-center border-b-2 border-blueroadie">
            <span className="inline-block py-4 text-blueroadie font-bold">Installation steps:</span>
            <span className="inline-block p-4 ml-8 text-white font-bold bg-blueroadie rounded-t-lg active">
              Self-hosted Backstage
            </span>
            {plugin.frontmatter.roadieDocsPath && (
              <a
                href={`/docs/integrations${plugin.frontmatter.roadieDocsPath}`}
                target="_blank"
                className="inline-block p-4 ml-4 bg-gray-100 text-blueroadie font-bold rounded-t-lg hover:bg-gray-100 hover:text-orange-600 flex align-center"
              >
                No-code via Roadie <ExternalLinkIcon className='inline-block w-4 ml-2' />
              </a>
            )}
          </nav>

          {plugin.frontmatter.gettingStarted && (
            <>
              {plugin.frontmatter.gettingStarted.map((section) => {
                const key = CodeBlock.generateKey(section);

                if (section.title && section.title !== '') {
                  return (
                    <div className="text-center pb-3" key={key}>
                      <Title text={section.title} />
                    </div>
                  );
                }

                return (
                  <CodeBlock
                    language={section.language}
                    code={section.code}
                    intro={section.intro}
                    key={key}
                  />
                );
              })}
            </>
          )}

          <p className="prose prose-primary my-10">
            Found a mistake? <EditOnGitHubLink siteMetadata={siteMetadata} plugin={plugin} />.
          </p>

          <div className="border-4 border-orange-500 font-bold p-8 text-xl rounded-lg mb-10">
            <p className="mb-4">
              Don&apos;t want to spend your time installing and manually upgrading each Backstage
              plugin?
            </p>
            <Button
              link={true}
              color="primary"
              to={'/free-trial/'}
              text={'Get managed Backstage'}
            />
          </div>

          {plugin.frontmatter.coverImage && (
            <>
              <Title text="How it looks" className="mb-10 border-b-2" />

              <div>
                <GatsbyImage
                  image={plugin.frontmatter.coverImage.childImageSharp.gatsbyImageData}
                  alt={plugin.frontmatter.coverImageAlt}
                  className="max-w-full max-h-full shadow-small"
                />
              </div>
            </>
          )}

          {plugin.notes && plugin.notes !== '' && (
            <>
              <Title text="Things to know" className="mb-10 mt-20 border-b-2" />

              <div
                className="prose-xl prose-primary max-w-none"
                dangerouslySetInnerHTML={{ __html: plugin.notes }}
              />
            </>
          )}
        </div>

        <div className="relative max-w-lg mx-auto lg:max-w-xl mt-24">
          <SubscribeToNewsletterCTA setModalOpen={setModalOpen} email={email} setEmail={setEmail} />
        </div>
      </main>

      <SitewideFooter />
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
        intro
        availableOnRoadie
        roadieDocsPath

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
