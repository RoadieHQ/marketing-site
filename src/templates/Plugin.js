import React, { useEffect, useState } from 'react';
import usePageLeave from 'react-use/lib/usePageLeave';
import Prism from 'prismjs';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Button, Title, CodeBlock, SEO, SitewideHeader, SitewideFooter, ExitIntentModal } from 'components';
import { EditOnGitHubLink, Header } from 'components/backstage/plugins';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import { PAGE_PATHS } from '../contactFormConstants';

const PluginCTA = ({ plugin }) => (
  <div className="docs-cta my-6 lg:flex justify-between">
    <div>
      <h3 className="docs-cta__title text-center lg:text-left">
        Set up Backstage in minutes with Roadie
      </h3>
      <p className="hidden lg:block">
        Focus on using Backstage, rather than building and maintaining it.
      </p>
    </div>
    <div className="text-center">
      <Button
        link={true}
        color="primary"
        size="large"
        to={`${PAGE_PATHS.requestDemo}?utm_source=roadie-marketplace&utm_campaign=${plugin.frontmatter.humanName}`}
        text="Get a demo"
      />
    </div>
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

const Intro = ({ plugin }) => {
  if (!plugin.frontmatter.intro) return null;
  return (
    <div
      className="mb-4 mt-0 text-lg plugin-intro"
      dangerouslySetInnerHTML={{ __html: plugin.frontmatter.intro }}
    />
  );
};

const CoverImage = ({ plugin, className = 'max-w-full max-h-full shadow-small' }) => {
  if (!plugin.frontmatter.coverImage) return null;
  return (
    <GatsbyImage
      image={plugin.frontmatter.coverImage.childImageSharp.gatsbyImageData}
      alt={plugin.frontmatter.coverImageAlt}
      className={className}
    />
  );
};

const InstallationSteps = ({ plugin }) => {
  if (!plugin.frontmatter.gettingStarted) return null;
  return (
    <>
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
    </>
  );
};

const Notes = ({ plugin }) => {
  if (!plugin.notes || plugin.notes === '') return null;
  return (
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
        className="prose prose-primary max-w-none"
        dangerouslySetInnerHTML={{ __html: plugin.notes }}
      />
    </>
  );
};

const Body = ({ plugin, siteMetadata }) => {
  if (plugin.frontmatter.gettingStarted) {
    return (
      <>
        <Intro plugin={plugin} />

        <PluginCTA plugin={plugin} />
        <CoverImage plugin={plugin} className="max-w-full max-h-full shadow-small mb-12" />

        <InstallationSteps plugin={plugin} />

        <p className="prose prose-primary my-10">
          Found a mistake? <EditOnGitHubLink siteMetadata={siteMetadata} plugin={plugin} />.
        </p>
      </>
    );
  }

  return (
    <>
      <div>
        <p className="prose prose-primary my-10 max-w-none">
          We&apos;re working to build the best catalog of Backstage plugins available. The plan is to have reviews, ratings, installation instructions and usage instructions for every plugin that exists.
        </p>

        <p className="prose prose-primary my-10 max-w-none">
          There&apos;s a lot of plugins and it&apos;s taking some time to get them all cataloged. We haven&apos;t gotten around to fleshing out this page for the Backstage {plugin.frontmatter.humanName} plugin.
        </p>

        <p className="prose prose-primary my-10 max-w-none">
          In the meantime, you can{' '}
          <EditOnGitHubLink
            siteMetadata={siteMetadata}
            plugin={plugin}
            text="help us improve this page"
          />.
        </p>
      </div>
    </>
  );
}

const hasExitIntentModalBeenShownBefore = () => {
  return localStorage.getItem('exitIntentModalHasBeenShown') || false;
};

const recordExitIntentModalHasBeenShown = () => {
  return localStorage.setItem('exitIntentModalHasBeenShown', true);
};


const PluginTemplate = ({ data }) => {
  const {
    plugin,
    site: { siteMetadata },
  } = data;

  const [exitIntentModalOpen, setExitIntentModalOpen] = useState(false);

  const handleOpenExitIntentModal = () => {
    if (!hasExitIntentModalBeenShownBefore()) {
      setExitIntentModalOpen(true);
      recordExitIntentModalHasBeenShown();
    }
  };

  const handleCloseExitIntentModal = () => {
    setExitIntentModalOpen(false);
  };

  useEffect(() => {
    Prism.highlightAll();
  });

  usePageLeave(() => {
    handleOpenExitIntentModal();
  });

  return (
    <>
      <SEO title={plugin.frontmatter.seo.title} description={plugin.frontmatter.seo.description} />

      <ExitIntentModal
        modalOpen={exitIntentModalOpen}
        handleCloseModal={handleCloseExitIntentModal}
      />

      <SitewideHeader />

      <Header plugin={plugin} />

      <main className="pt-4 pb-8 px-4 lg:pb-28">
        <div className="relative max-w-lg mx-auto lg:max-w-4xl">
          <Body plugin={plugin} siteMetadata={siteMetadata} />
          <Notes plugin={plugin} />
          <PluginCTA plugin={plugin} />
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
          linkedin
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
