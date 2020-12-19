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

const useStyles = createUseStyles(() => ({
  callToActionWrapper: {
    maxWidth: 600,
    margin: 'auto',
  },
}));

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SEO
        title={`Hosted, managed Backstage | ${siteTitle}`}
        description={`
          Delight your devs with the world-class technology that powers
          the development and operation of Spotify's 2,000 microservices.
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
          <Hero setModalOpen={setModalOpen} siteMetadata={data.site.siteMetadata} />
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <InterstitialTitle fontSize="3em">
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
              netlifyFormName={FORM_NAMES.getDemo}
            />
          </div>
        </ResponsiveSpacer>
      </StickyFooter>
    </>
  );
};

export default Home;

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
