import React, { useEffect, useState } from 'react';
import { retrieveBackstagePluginNpmPackage } from '../pageCreation/storeBackstagePluginNpmPackageNames';
import usePageLeave from 'react-use/lib/usePageLeave';
import Prism from 'prismjs';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter, ExitIntentModal } from 'components';
import {
  EditOnGitHubLink,
  Header,
  Intro,
  PluginCTA,
  CoverImage,
  InstallationSteps,
  PlaceholderBody,
  Notes,
  Sidebar,
} from 'components/backstage/plugins';

const Body = ({ plugin, siteMetadata }) => {
  if (plugin.frontmatter.gettingStarted) {
    return (
      <>
        <Intro plugin={plugin} />

        <CoverImage plugin={plugin} className="max-w-full max-h-full shadow-small mb-12" />

        <InstallationSteps plugin={plugin} />

        <p className="prose prose-primary my-10">
          Found a mistake? <EditOnGitHubLink siteMetadata={siteMetadata} plugin={plugin} />.
        </p>
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


const PluginTemplate = ({ data, serverData }) => {
  const {
    plugin,
    site: { siteMetadata },
  } = data;

  console.log('serverData', serverData);

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

      <main className="pb-8 px-4 lg:pb-28">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-3">
            <article>
              <Body plugin={plugin} siteMetadata={siteMetadata} />
              <Notes plugin={plugin} />
              <PluginCTA plugin={plugin} />
            </article>

            <aside className="col-span-1">
              <Sidebar npmData={serverData} />
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

export async function getServerData({ pageContext }) {
  console.log('getServerData', pageContext);
  const data = await retrieveBackstagePluginNpmPackage({
    packageName: pageContext.npmjsPackage,
    authStrategy: 'token',
  });

  console.log('data', data);

  return {
    props: data,
  };

  // try {

  // } catch (error) {
  //   console.error(error);
  //   return {
  //     status: 500,
  //     headers: {},
  //     props: {}
  //   }
  // }
}
