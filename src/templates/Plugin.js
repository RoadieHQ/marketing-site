import React, { useState } from 'react';
import usePageLeave from 'react-use/lib/usePageLeave';
import { graphql } from 'gatsby';
import {
  SEO,
  SitewideHeader,
  SitewideFooter,
  ExitIntentModal,
} from 'components';
import { Header, PluginCTA, Sidebar, PAGE_SECTIONS, Body } from 'components/backstage/plugins';


const hasExitIntentModalBeenShownBefore = () => {
  return localStorage.getItem('exitIntentModalHasBeenShown') || false;
};

const recordExitIntentModalHasBeenShown = () => {
  return localStorage.setItem('exitIntentModalHasBeenShown', true);
};

const PluginTemplate = ({ data }) => {
  const { plugin } = data;
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

  usePageLeave(() => {
    handleOpenExitIntentModal();
  });

  return (
    <>
      <SEO title={plugin.seoTitle} description={plugin.seoDescription} />

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
          <div className="grid grid-cols-3 md:gap-12 lg:gap-20">
            <article className="col-span-3 md:col-span-2">
              <Body plugin={plugin} />
              <PluginCTA plugin={plugin} />
            </article>

            <aside className="hidden md:block md:col-span-1">
              <Sidebar plugin={plugin} pageSections={PAGE_SECTIONS} />
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
        social {
          twitter
          linkedin
        }
      }
    }

    plugin: contentfulBackstagePlugin(slug: { eq: $slug }) {
      humanName
      slug
      npmPackageName
      roadieDocsPath
      seoDescription
      seoTitle
      heading
      codeLocation
      attributionText
      attributionUrl
      availableOnRoadie
      lead

      packages {
        codeLocation
        npmPackageName
        type
      }

      category {
        name
        description
        searchParam
      }

      notes {
        childMarkdownRemark {
          html
        }
      }

      introduction {
        childMarkdownRemark {
          html
        }
      }

      installationInstructions {
        childMarkdownRemark {
          html
        }
      }

      changelog {
        childMarkdownRemark {
          html
        }
      }
      changelogSince(fromNow: true)

      coverImage {
        description
        gatsbyImageData(layout: FULL_WIDTH)
      }

      logoImage {
        gatsbyImageData(layout: FIXED, width: 80, placeholder: DOMINANT_COLOR)
      }
    }
  }
`;
