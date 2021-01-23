import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { SEO, InterstitialTitle, StickyFooter, ResponsiveSpacer } from 'components';

import FormSubmissionModal from 'components/actions/FormSubmissionModal';
import CallToAction from 'components/actions/CallToAction';
import { FORM_NAMES } from '../contactFormConstants';
import Hero from 'components/home/Hero';
import FeatureBlock from 'components/home/FeatureBlock';

const useStyles = createUseStyles((theme) => ({
  callToActionWrapper: {
    maxWidth: 600,
    margin: 'auto',
  },

  interstitialTitleH2: {
    fontSize: '1.5em',
  },

  p: {
    fontSize: '2rem',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    interstitialTitleH2: {
      fontSize: '3em',
    },
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
          <Hero
            setModalOpen={setModalOpen}
            siteMetadata={data.site.siteMetadata}
            headline="Supercharge your internal platform"
            lead={`
              Delight your devs with the world-class technology that powers
              the development and operation of Spotify's 2,000 microservices.
            `}
            netlifyFormName={FORM_NAMES.getDemo}
          />
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <InterstitialTitle className={{ h2: classes.interstitialTitleH2 }}>
            Turn tribal knowledge into shared context
          </InterstitialTitle>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock
            imageSide="right"
            backgroundImageUrl="url(/undraw/undraw_the_search_s0xf.svg)"
            text={
              <div>
                <h2>Service catalog for discoverability</h2>
                <p className={classes.p}>Got more repos than you can keep up with?</p>
                <p className={classes.p}>
                  Get control of the sprawl and improve new hire onboarding by making it easy to
                  understand what each service is and who owns it.
                </p>
              </div>
            }
          />
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock
            imageSide="left"
            backgroundImageUrl="url(/undraw/undraw_education_f8ru.svg)"
            text={
              <div>
                <h2>Docs that get read</h2>
                <p className={classes.p}>
                  <span role="img" aria-label="one">
                    1️⃣
                  </span>
                  {'  '}
                  Commit markdown docs and API specs alongside your code.
                </p>
                <p className={classes.p}>
                  <span role="img" aria-label="two">
                    2️⃣
                  </span>
                  {'  '}
                  Beautiful technical documentation appears with the services in your catalog.
                </p>
              </div>
            }
          />
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock
            imageSide="right"
            backgroundImageUrl="url(/undraw/undraw_building_websites_i78t.svg)"
            text={
              <div>
                <h2>Custom plugins</h2>
                <p className={classes.p}>Ready to roll, easy to extend.</p>
                <p className={classes.p}>
                  Common SaaS tools come baked in. When you need to break out you can roll your own
                  and deploy with a simple push.
                </p>
              </div>
            }
          />
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
