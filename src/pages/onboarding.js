import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { SEO, InterstitialTitle, StickyFooter, ResponsiveSpacer, TextLink } from 'components';

import FormSubmissionModal from 'components/actions/FormSubmissionModal';
import CallToAction from 'components/actions/NetlifyFormCallToAction';
import { FORM_NAMES } from '../contactFormConstants';
import Hero from 'components/home/Hero';
import FeatureBlock from 'components/home/FeatureBlock';
import undrawSearch from '../../content/assets/undraw/undraw_Search_re_x5gq.svg';
import undrawEducation from '../../content/assets/undraw/undraw_education_f8ru.svg';
import undrawPeopleSearch from '../../content/assets/undraw/undraw_people_search_wctu.svg';

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

const OnboardingLandingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const classes = useStyles();

  const handleCloseModal = () => {
    setModalOpen(false);
    setEmail('');
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
        bodyText={
          <>
            <p>Check your email to see how to book a Backstage demo.</p>
            <p>To help us address your questions correctly, please fill out this short survey...</p>
          </>
        }
        titleText="Fantastic!"
        followOn="NEEDS_ANALYSIS_SURVEY"
        email={email}
      />

      <StickyFooter location={location}>
        <ResponsiveSpacer>
          <Hero
            setModalOpen={setModalOpen}
            siteMetadata={data.site.siteMetadata}
            headline="Onboard engineers 55% faster"
            lead={
              <span>
                Cut the time to 10<sup>th</sup> commit by up to 55% with{' '}
                <TextLink to="https://backstage.io" text="Backstage" />, the open source service
                catalog and developer platform from Spotify.
              </span>
            }
            netlifyFormName={FORM_NAMES.getDemoOnboarding}
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
            backgroundImageUrl={`url(${undrawPeopleSearch})`}
            text={
              <div>
                <h2>&quot;Who knows how the CI system works?&quot;</h2>
                <p className={classes.p}>
                  Pull your org chart from your HR system and assign services to teams so you can
                  quickly look up any engineering team and know who&apos;s on it, what they own and
                  what their KPIs are.
                </p>
                <p className={classes.p}>
                  KPIs roll up through the org so it&apos;s easy to get a birds-eye view.
                </p>
              </div>
            }
          />
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock
            imageSide="left"
            backgroundImageUrl={`url(${undrawEducation})`}
            text={
              <div>
                <h2>&quot;Where are the docs for X?&quot;</h2>
                <p className={classes.p}>
                  Easy access to information means fewer repetitive questions and increased
                  velocity.
                </p>
                <p className={classes.p}>
                  Docs live on GitHub as markdown but are searched and read in one location so
                  people can find them. API specs, tutorials, runbooks and more.{' '}
                  <TextLink to="https://changelog.com/podcast/415" text="Learn how" />.
                </p>
              </div>
            }
          />
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock
            imageSide="right"
            backgroundImageUrl={`url(${undrawSearch})`}
            text={
              <div>
                <h2>&quot;Do we have a geocoding API?&quot;</h2>
                <p className={classes.p}>
                  Find APIs you can depend on by making it easy to search the fleet and quickly
                  answer questions like &apos;Is this maintained?&apos;, &apos;Are the builds
                  passing?&apos; and &apos;Is there an SLO defined?&apos;.
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
              netlifyFormName={FORM_NAMES.getDemoOnboarding}
              email={email}
              setEmail={setEmail}
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
        social {
          twitter
        }
      }
    }
  }
`;
