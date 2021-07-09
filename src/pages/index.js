import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import {
  TwoColumnLayout,
  SEO,
  InterstitialTitle,
  StickyFooter,
  ResponsiveSpacer,
} from 'components';
import Hero from 'components/home/Hero';
import { GetInstanceFormCallToAction } from 'components/CallToAction';

import customPluginsIllustration from '../../content/assets/home/custom-plugin-illustration.svg';
import dragDropIllustration from '../../content/assets/home/drag-drop-illustration.svg';
import securityMaintenanceIllustration from '../../content/assets/home/security-maintenance-illustration.svg';
import serviceCatalogIllustration from '../../content/assets/home/service-catalog-illustration.svg';

const useStyles = createUseStyles((theme) => ({
  callToActionWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },

  callToActionWrapperInner: {
    maxWidth: 700,
    width: '100%',
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

  featureBlockRoot: {},

  twoColumnLayoutRoot: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },

  rightSideFeatureBlockImgWrapper: {},
  leftSideFeatureBlockImgWrapper: {},

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    interstitialTitleH2: {
      fontSize: '3em',
    },

    featureBlockRoot: {
      paddingLeft: 100,
      paddingRight: 100,
    },

    twoColumnLayoutRoot: {
      flexDirection: 'row',
    },

    rightSideFeatureBlockImgWrapper: {
      float: 'right',
    },

    leftSideFeatureBlockImgWrapper: {
      float: 'left',
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
            The power of Backstage, plus...
          </InterstitialTitle>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <div className={classes.featureBlockRoot}>
            <TwoColumnLayout
              className={{
                root: classes.twoColumnLayoutRoot,
              }}
              rightContent={
                <div className={classes.rightSideFeatureBlockImgWrapper}>
                  <img src={customPluginsIllustration} alt="" />
                </div>
              }
              leftContent={
                <div>
                  <h2 className={classes.h2}>Bring your own plugins</h2>
                  <p className={classes.p}>Our custom plugins pipeline lets you use your own bespoke and private plugins inside hosted Backstage.</p>
                  <p className={classes.p}>
                    Enter some details about your custom plugin into Roadie, copy some credentials, then `npm publish` into our private and secure pipeline. Slack notifications included.
                  </p>
                </div>
              }
            />
          </div>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <div className={classes.featureBlockRoot}>
            <TwoColumnLayout
              rightContent={
                <div>
                  <h2 className={classes.h2}>Drag and drop setup</h2>
                  <p className={classes.p}>Customize Backstage to your needs using our drag-and-drop composer.</p>
                  <p className={classes.p}>
                    Adding plugins to Backstage is as simple as picking them from a list and placing then where you want them. All types of frontend plugins are supported - cards, tabs and pages.
                  </p>
                </div>
              }
              leftContent={
                <div className={classes.leftSideFeatureBlockImgWrapper}>
                  <img src={dragDropIllustration} alt="" />
                </div>
              }
            />
          </div>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <div className={classes.featureBlockRoot}>
            <TwoColumnLayout
              className={{
                root: classes.twoColumnLayoutRoot,
              }}
              rightContent={
                <div className={classes.rightSideFeatureBlockImgWrapper}>
                  <img src={securityMaintenanceIllustration} alt="" />
                </div>
              }
              leftContent={
                <div>
                  <h2 className={classes.h2}>Maintenance and Security built in</h2>
                  <p className={classes.p}>Backstage moves quickly and it takes effort to stay up to date.</p>
                  <p className={classes.p}>
                    Enter some details about your custom plugin into Roadie, copy some credentials, then `npm publish` into our private and secure pipeline. Slack notifications included.
                  </p>
                </div>
              }
            />
          </div>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <InterstitialTitle className={{ h2: classes.interstitialTitleH2 }}>
            Turn tribal knowledge into shared context
          </InterstitialTitle>
        </ResponsiveSpacer>


        <ResponsiveSpacer>
          <div className={classes.featureBlockRoot}>
            <TwoColumnLayout
              rightContent={
                <div>
                  <h2 className={classes.h2}>Service catalog for discoverability</h2>
                  <p className={classes.p}>Customize Backstage to your needs using our drag-and-drop composer.</p>
                  <p className={classes.p}>
                    Adding plugins to Backstage is as simple as picking them from a list and placing then where you want them. All types of frontend plugins are supported - cards, tabs and pages.
                  </p>
                </div>
              }
              leftContent={
                <div className={classes.leftSideFeatureBlockImgWrapper}>
                  <img src={serviceCatalogIllustration} alt="" />
                </div>
              }
            />
          </div>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <div className={classes.callToActionWrapper}>
            <div className={classes.callToActionWrapperInner}>
              <GetInstanceFormCallToAction />
            </div>
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
