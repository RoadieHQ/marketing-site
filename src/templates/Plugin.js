import React, { useState } from 'react';
import usePageLeave from 'react-use/lib/usePageLeave';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter, ExitIntentModal, Title } from 'components';
import {
  Header,
  Intro,
  PluginCTA,
  CoverImage,
  PlaceholderBody,
  Notes,
  Sidebar,
  HostTabs,
} from 'components/backstage/plugins';

const Body = ({ plugin }) => {
  if (plugin.installationInstructions) {
    return (
      <>
        <div className="mb-10">
          <Intro plugin={plugin} />
        </div>

        <div className="mb-10">
          <CoverImage plugin={plugin} className="max-w-full max-h-full shadow-small mb-12" />
        </div>

        <div className="mb-4">
          <Title>Installation steps</Title>
        </div>

        <HostTabs docsLink={`/docs${plugin.roadieDocsPath}`} />

        {plugin.installationInstructions && (
          <div className="mb-10">
            <div
              className="mb-4 mt-0 prose prose-primary max-w-none"
              dangerouslySetInnerHTML={{
                __html: plugin.installationInstructions.childMarkdownRemark.html,
              }}
            />
          </div>
        )}

        <div className="mb-4">
          <Title>Things to know</Title>
        </div>

        <Notes plugin={plugin} />
      </>
    );
  }

  return <PlaceholderBody plugin={plugin} />;
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
          <div className="grid grid-cols-3 gap-20">
            <article className="col-span-3 lg:col-span-2">
              <Body plugin={plugin} />
              <PluginCTA plugin={plugin} />
            </article>

            <aside className="hidden lg:block lg:col-span-1">
              <Sidebar plugin={plugin} />
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

      coverImage {
        description
        gatsbyImageData(layout: FULL_WIDTH)
      }

      logoImage {
        gatsbyImageData(layout: FIXED, width: 80)
      }
    }
  }
`;
