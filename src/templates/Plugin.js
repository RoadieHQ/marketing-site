import React, { useState } from 'react';
import usePageLeave from 'react-use/lib/usePageLeave';
import isEmpty from 'lodash/isEmpty';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import {
  SEO,
  SitewideHeader,
  SitewideFooter,
  ExitIntentModal,
  Title,
  TextLink as Link,
} from 'components';
import { Header, PluginCTA, PlaceholderBody, Sidebar } from 'components/backstage/plugins';
import fullRoadieDocsPath from 'components/backstage/plugins/fullRoadieDocsPath';
import PluginFeedbackModal from '../components/PluginFeedbackModal';
import useScrollToElement from '../hooks/useScrollToElement';

const RoadieDocsLink = ({ availableOnRoadie, roadieDocsPath }) => {
  const disclaimer = 'These instructions apply to self-hosted Backsgage only.';

  if (availableOnRoadie && roadieDocsPath) {
    return (
      <p className="prose prose-primary max-w-none">
        {disclaimer} To use this plugin on Roadie,{' '}
        <Link color="primary" to={fullRoadieDocsPath(roadieDocsPath)}>
          visit the docs
        </Link>
        .
      </p>
    );
  }

  return <p className="prose prose-primary max-w-none">{disclaimer}</p>;
};

const Body = ({
  plugin: {
    installationInstructions,
    introduction,
    availableOnRoadie,
    roadieDocsPath,
    coverImage,
    notes,
    humanName,
  },
}) => {
  const introHtml = introduction?.childMarkdownRemark?.html;
  const installHtml = installationInstructions?.childMarkdownRemark?.html;
  const notesHtml = notes?.childMarkdownRemark?.html;
  return (
    <>
      {!isEmpty(introHtml) && (
        <div className="mb-10">
          <div
            className="mb-4 mt-0 prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: introduction.childMarkdownRemark.html }}
          />
        </div>
      )}

      {coverImage && (
        <div className="mb-10">
          <GatsbyImage
            image={coverImage.gatsbyImageData}
            alt={coverImage.description}
            className="max-w-full max-h-full shadow-small"
          />
        </div>
      )}

      {!isEmpty(installHtml) && (
        <>
          <div className="mb-4" id="installation-steps">
            <Title>Installation steps</Title>
          </div>

          <div className="mb-4">
            <RoadieDocsLink availableOnRoadie={availableOnRoadie} roadieDocsPath={roadieDocsPath} />
          </div>

          <div className="mb-10">
            <div
              className="mb-4 mt-0 prose prose-primary max-w-none"
              dangerouslySetInnerHTML={{
                __html: installationInstructions.childMarkdownRemark.html,
              }}
            />
          </div>
        </>
      )}

      {!isEmpty(notesHtml) && (
        <>
          <div className="mb-4">
            <Title>Things to know</Title>
          </div>

          <div
            className="prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: notes.childMarkdownRemark.html }}
          />
        </>
      )}

      {isEmpty(installHtml) && isEmpty(notesHtml) && <PlaceholderBody humanName={humanName} />}
    </>
  );
};

const hasExitIntentModalBeenShownBefore = () => {
  return localStorage.getItem('exitIntentModalHasBeenShown') || false;
};

const recordExitIntentModalHasBeenShown = () => {
  return localStorage.setItem('exitIntentModalHasBeenShown', true);
};

const PluginTemplate = ({ data }) => {
  const { plugin } = data;

  const [exitIntentModalOpen, setExitIntentModalOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackModalDismissed, setFeedbackModalDismissed] = useState(false);

  const handleOpenExitIntentModal = () => {
    if (!hasExitIntentModalBeenShownBefore()) {
      setExitIntentModalOpen(true);
      recordExitIntentModalHasBeenShown();
    }
  };

  const handleCloseExitIntentModal = () => {
    setExitIntentModalOpen(false);
  };

  const handleCloseFeedbackModal = () => {
    setFeedbackModalOpen(false);
    setFeedbackModalDismissed(true);
  };

  usePageLeave(() => {
    handleOpenExitIntentModal();
  });

  // Show feedback modal when user scrolls to installation section
  const { hasScrolledTo } = useScrollToElement('installation-steps', {
    threshold: 0.1,
    once: true,
  });

  // Delay showing the modal by 2 seconds after scrolling to the section
  React.useEffect(() => {
    if (hasScrolledTo && !feedbackModalDismissed) {
      const timer = setTimeout(() => {
        setFeedbackModalOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasScrolledTo, feedbackModalDismissed]);

  return (
    <>
      <SEO title={plugin.seoTitle} description={plugin.seoDescription} />

      <ExitIntentModal
        modalOpen={exitIntentModalOpen}
        handleCloseModal={handleCloseExitIntentModal}
      />

      <PluginFeedbackModal
        isVisible={feedbackModalOpen}
        onClose={handleCloseFeedbackModal}
        pluginSlug={plugin.slug}
        pluginName={plugin.humanName}
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
        gatsbyImageData(layout: FIXED, width: 80, placeholder: DOMINANT_COLOR)
      }
    }
  }
`;
