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

const PluginCTA = ({ plugin, overrideTitle }) => (
  <div className="docs-cta my-6">
    <h3 className="docs-cta__title">
      {overrideTitle
        ? overrideTitle
        : plugin.frontmatter.availableOnRoadie
        ? `See the ${plugin.frontmatter.humanName} Backstage plugin in action`
        : `Skip the manual plugin installation with no-code Backstage`}
    </h3>
    <Button
      link={true}
      color="primary"
      size="small"
      to={`/request-demo/?utm_source=roadie-marketplace&utm_campaign=${plugin.frontmatter.humanName}`}
      text={'Request a Roadie demo'}
    />
  </div>
);

const HostTabs = ({ docsLink }) => (
  <nav className="invisible lg:visible mb-8 mx-[-1rem] px-[1rem] flex flex-wrap items-center text-center border-b-2 border-gray-200">
    <span className="inline-block p-4 text-blueroadie font-bold bg-gray-elusivegray border-2 border-gray-200 border-b-elusivegray rounded-t-lg mb-[-2px]">
      Self-hosted Backstage
    </span>
    {docsLink && !docsLink.includes('null') && (
      <a
        href={docsLink}
        target="_blank"
        rel="noreferrer"
        className="inline-block p-2 px-4 ml-4 bg-gray-100 text-blueroadie font-bold rounded-lg hover:bg-gray-100 hover:text-orange-600 flex align-center"
      >
        No-code via Roadie <ExternalLinkIcon className="inline-block w-4 ml-2" />
      </a>
    )}
  </nav>
);

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
          {plugin.frontmatter.intro ? (
            <>
              <div
                className="mb-4 mt-0 text-lg plugin-intro"
                dangerouslySetInnerHTML={{ __html: plugin.frontmatter.intro }}
              />
              <PluginCTA plugin={plugin} />

              {plugin.frontmatter.coverImage && (
                <GatsbyImage
                  image={plugin.frontmatter.coverImage.childImageSharp.gatsbyImageData}
                  alt={plugin.frontmatter.coverImageAlt}
                  className="max-w-full max-h-full shadow-small mb-12"
                />
              )}
            </>
          ) : (
            <>
              {plugin.frontmatter.coverImage && (
                <GatsbyImage
                  image={plugin.frontmatter.coverImage.childImageSharp.gatsbyImageData}
                  alt={plugin.frontmatter.coverImageAlt}
                  className="max-w-full max-h-full shadow-small"
                />
              )}
              <PluginCTA plugin={plugin} />
            </>
          )}
          <Title el="h2" className="xl:text-2xl xl:tracking-tight mb-6" id="installation-steps">
            Installation steps
          </Title>

          <HostTabs docsLink={`/docs/integrations${plugin.frontmatter.roadieDocsPath}`} />

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
                    sectionId={section.sectionId}
                    key={key}
                  />
                );
              })}
            </>
          )}

          <p className="prose prose-primary my-10">
            Found a mistake? <EditOnGitHubLink siteMetadata={siteMetadata} plugin={plugin} />.
          </p>

          {plugin.notes && plugin.notes !== '' && (
            <>
              <Title el="h2" className="xl:text-2xl xl:tracking-tight mb-6" id="things-to-know">
                {plugin.frontmatter.thingsToKnowTitle
                  ? `${plugin.frontmatter.thingsToKnowTitle}`
                  : 'Things to know'}
              </Title>

              {plugin.frontmatter.thingsToKnowHostDependant && (
                <HostTabs docsLink={`${plugin.frontmatter.thingsToKnowOnRoadie}`} />
              )}

              <div
                className="prose-xl prose-primary max-w-none"
                dangerouslySetInnerHTML={{ __html: plugin.notes }}
              />
            </>
          )}
          <PluginCTA plugin={plugin} overrideTitle="Prefer a no-code Backstage setup?" />
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
        thingsToKnowTitle
        thingsToKnowHostDependant
        thingsToKnowOnRoadie

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
          sectionId
        }
      }
    }
  }
`;
