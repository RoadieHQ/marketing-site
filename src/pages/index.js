import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import {
  SEO,
  InterstitialTitle,
  StickyFooter,
  ResponsiveSpacer,
  TextLink as Link,
} from 'components';
import Hero from 'components/home/Hero';
import { GetInstanceFormCallToAction } from 'components/CallToAction';
import { FeatureBlock } from 'components/FeatureBlock';

import customPluginsIllustration from '../../content/assets/home/custom-plugin-illustration.svg';
import dragDropIllustration from '../../content/assets/home/drag-drop-illustration.svg';
import securityMaintenanceIllustration from '../../content/assets/home/security-maintenance-illustration.svg';
import serviceCatalogIllustration from '../../content/assets/home/service-catalog-illustration.svg';
import productionConsistencyIllustration from '../../content/assets/home/production-consistency-illustration.svg';
import mikeExpediaGroupQuote from '../../content/assets/home/mike-expedia-quote.svg';

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
            The benefits of Backstage, plus...
          </InterstitialTitle>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={dragDropIllustration}>
            <div>
              <h2>Quick and easy setup</h2>
              <p>Customize Backstage to your needs using our drag-and-drop composer.</p>
              <p>
                Adding plugins to Backstage is as simple as picking them from a list. All types of frontend plugins are supported - cards, tabs and pages.
              </p>
              <p>
                <Link
                  to="https://vimeo.com/manage/videos/569887456"
                  color="primary"
                >
                  Watch our 3 minute setup video
                </Link>
              </p>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={customPluginsIllustration}>
            <div>
              <h2>Bring your own plugins</h2>
              <ul>
                <li>Push bespoke and private plugins into our hosted Backstage service.</li>
                <li>Use the familiar NPM publishing workflow you know and love.</li>
                <li>Flexible and secure options for connecting back to your tools.</li>
              </ul>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={securityMaintenanceIllustration}>
            <div>
              <h2>Maintenance and security as standard</h2>
              <p>Backstage moves quickly and requires effort to stay up to date.</p>
              <p>
                Let Roadie do the upgrades so you can stay focussed on the work you do best.
              </p>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <InterstitialTitle className={{ h2: classes.interstitialTitleH2 }}>
            Turn tribal knowledge into shared context
          </InterstitialTitle>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={mikeExpediaGroupQuote}>
            <div>
              <h2>Built on Backstage</h2>
              <p>Backstage has been in production for 4+ years at Spotify.</p>
              <p>
                Backstage is a developer portal and service catalog which can improve developer productivity and enable your teams to ship high-quality code quickly.
              </p>

              <p>
                <Link to="/case-studies/" color="primary">Read more case studies</Link>
              </p>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={serviceCatalogIllustration}>
            <div>
              <h2>Cut onboarding time with discoverability</h2>
              <p>Backstage is a hub for everything developers need to do their work. Docs, runbooks, API specs and more. All just a quick search away.</p>
              <p>
                Spotify saw engineering onboarding time drop by 55% in the two years after deploying Backstage internally. All while onboarding hundreds of engineers each year.
              </p>

              <p>
                <Link
                  to="https://changelog.com/podcast/415"
                  color="primary"
                >
                  Hear how Spotify document thousands of services
                </Link>
              </p>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={productionConsistencyIllustration}>
            <div>
              <h2>Improve production consistency</h2>
              <p>Roll out the golden path to simultaneously speed up development while baking best practices into your production services.</p>
              <p>
                Use the built in scaffolder to create new services from templates which have your best practices built in.
              </p>
            </div>
          </FeatureBlock>
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
