import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import {
  ButtonLinkCallToAction,
  SEO,
  InterstitialTitle,
  StickyFooter,
  ResponsiveSpacer,
} from 'components';
import Hero from 'components/home/Hero';
import FeatureBlock from 'components/home/FeatureBlock';

import undrawEducation from '../../content/assets/undraw/undraw_education_f8ru.svg';
import undrawSearch from '../../content/assets/undraw/undraw_the_search_s0xf.svg';
import undrawBuildingWebsites from '../../content/assets/undraw/undraw_building_websites_i78t.svg';

const useStyles = createUseStyles((theme) => ({
  callToActionWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },

  interstitialTitleH2: {
    fontSize: '1.5em',
  },

  h2: {
    marginBottom: '2rem',
  },

  p: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    interstitialTitleH2: {
      fontSize: '3em',
    },
  },
}));

const SEO_TITLE = 'SaaS Backstage hosting';
const HEADLINE = 'Backstage for growing engineering teams';
const LEAD = `
Roadie's SaaS platform handles hosting and upgrades and ensures
you always have access to the latest Backstage features.
`;

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />
      <StickyFooter location={location}>
        <ResponsiveSpacer>
          <Hero siteMetadata={data.site.siteMetadata} headline={HEADLINE} lead={LEAD} />
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <InterstitialTitle className={{ h2: classes.interstitialTitleH2 }}>
            Turn tribal knowledge into shared context
          </InterstitialTitle>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock
            imageSide="right"
            backgroundImageUrl={`url(${undrawSearch})`}
            text={
              <div>
                <h2 className={classes.h2}>Service catalog for discoverability</h2>
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
            backgroundImageUrl={`url(${undrawEducation})`}
            text={
              <div>
                <h2 className={classes.h2}>Docs that get read</h2>
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
            backgroundImageUrl={`url(${undrawBuildingWebsites})`}
            text={
              <div>
                <h2 className={classes.h2}>Custom plugins</h2>
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
          <div className={classes.callToActionWrapper}>
            <ButtonLinkCallToAction />
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
        social {
          twitter
        }
      }
    }
  }
`;
