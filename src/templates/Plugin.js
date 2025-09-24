import React, { useEffect, useState } from 'react';
import usePageLeave from 'react-use/lib/usePageLeave';
import Prism from 'prismjs';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter, ExitIntentModal } from 'components';
import {
  Header,
  Intro,
  PluginCTA,
  CoverImage,
  InstallationSteps,
  PlaceholderBody,
  Notes,
  Sidebar,
} from 'components/backstage/plugins';

// All the languages used in the plugin installation instructions need to be listed here.
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-yaml';

const Body = ({ plugin, siteMetadata }) => {
  if (plugin.frontmatter.gettingStarted) {
    return (
      <>
        <Intro plugin={plugin} />

        <CoverImage plugin={plugin} className="max-w-full max-h-full shadow-small mb-12" />

        <InstallationSteps plugin={plugin} />
      </>
    );
  }

  return <PlaceholderBody plugin={plugin} siteMetadata={siteMetadata} />;
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

      <div className="mt-4">
        <Header plugin={plugin} />
      </div>

      <main className="pb-8 px-4 lg:pb-28">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-20">
            <article className="col-span-3 lg:col-span-2">
              <Body plugin={plugin} siteMetadata={siteMetadata} />
              <Notes plugin={plugin} />
              <PluginCTA plugin={plugin} />
            </article>

            <aside className="hidden lg:block lg:col-span-1">
              <Sidebar plugin={plugin} siteMetadata={siteMetadata} />
            </aside>
          </div>
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
        codeLocation
        npmjsPackage
        availableOnRoadie
        roadieDocsPath
        thingsToKnowTitle

        attribution {
          href
          text
        }

        logoImage {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 80)
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
