import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { SEO, InterstitialTitle, StickyFooter, ResponsiveSpacer } from 'components';

import FormSubmissionModal from 'components/actions/FormSubmissionModal';
import CallToAction from 'components/actions/CallToAction';
import { FORM_NAMES } from '../contactFormConstants';
import Hero from 'components/home/Hero';
import {
  FeatureCustomPlugins,
  FeatureServiceCatalog,
  FeatureDocsLikeCode,
} from 'components/home/features';

const useStyles = createUseStyles((theme) => ({
  callToActionWrapper: {
    maxWidth: 600,
    margin: 'auto',
  },

  interstitialTitleH2: {
    fontSize: '1.5em',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    interstitialTitleH2: {
      fontSize: '3em',
    },
  },
}));

const OnboardingLandingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SEO
        title={`Onboard engineers faster with Backstage| ${siteTitle}`}
        description={`
          Reduce your team's time to 10th commit by up to 55% with the
          open source service catalog and developer platform from Spotify.
        `}
      />
      <FormSubmissionModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
        siteMetadata={data.site.siteMetadata}
        bodyText={`We'll be in touch via email to schedule your demo.`}
        titleText="Fantastic!"
      />

      <StickyFooter location={location}>
        <ResponsiveSpacer>
          <Hero
            setModalOpen={setModalOpen}
            siteMetadata={data.site.siteMetadata}
            headline="Onboard engineers faster"
            lead={`
              Cut time to 10th commit by up to 55% with Backstage, the
              open source service catalog and developer platform from Spotify.
            `}
            netlifyFormName={FORM_NAMES.getDemoOnboarding}
          />
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <InterstitialTitle className={{ h2: classes.interstitialTitleH2 }}>
            Turn tribal knowledge into shared context
          </InterstitialTitle>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureServiceCatalog imageSide="right" />
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureDocsLikeCode imageSide="left" />
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureCustomPlugins imageSide="right" />
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <InterstitialTitle text="Get a demo and get control" />
          <div className={classes.callToActionWrapper}>
            <CallToAction
              setModalOpen={setModalOpen}
              buttonText="Get a demo"
              netlifyFormName={FORM_NAMES.getDemoOnboarding}
            />
          </div>
        </ResponsiveSpacer>
      </StickyFooter>
    </>
  );
};

export default OnboardingLandingPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        newsletterUrl
        social {
          twitter
        }
      }
    }
  }
`;
