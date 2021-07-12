import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import {
  SEO,
  InterstitialTitle,
  StickyFooter,
  ResponsiveSpacer,
  Link,
} from 'components';
import Hero from 'components/home/Hero';
import { GetInstanceFormCallToAction } from 'components/CallToAction';
import { FeatureBlock } from 'components/FeatureBlock';

import customPluginsIllustration from '../../content/assets/home/custom-plugin-illustration.svg';
import dragDropIllustration from '../../content/assets/home/drag-drop-illustration.svg';
import securityMaintenanceIllustration from '../../content/assets/home/security-maintenance-illustration.svg';
import serviceCatalogIllustration from '../../content/assets/home/service-catalog-illustration.svg';
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
              <h2>Drag and drop setup</h2>
              <p>Customize Backstage to your needs using our drag-and-drop composer.</p>
              <p>
                Adding plugins to Backstage is as simple as picking them from a list. All types of frontend plugins are supported - cards, tabs and pages.
              </p>
              <p>
                <Link
                  to="https://vimeo.com/manage/videos/569887456"
                  target="_blank"
                  rel="noopener noreferrer"
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
              <h2>Custom plugins pipeline</h2>
              <ul>
                <li>Push your own bespoke and private plugins inside hosted Backstage.</li>
                <li>Use the usual NPM package publishing workflow you know and love.</li>
                <li>Flexible & secure options for connecting back to your tools.</li>
              </ul>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={securityMaintenanceIllustration}>
            <div>
              <h2>Maintenance and Security built in</h2>
              <p>Backstage moves quickly and it takes effort to stay up to date.</p>
              <p>
                Enter some details about your custom plugin into Roadie, copy some credentials, then `npm publish` into our private and secure pipeline. Slack notifications included.
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
              <p>Grown from 4+ years of experience in production at Spotify.</p>
              <p>
                Backstage is a developer portal and service catalog which lorem ipsum. <a href="/case-studies/">Read more case studies</a>
              </p>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={serviceCatalogIllustration}>
            <div>
              <h2>Cut onboarding time with discoverability</h2>
              <p>Talk about how people can search for techdocs and other things.</p>
              <p>
                Include that fact about reducing the time to production.
              </p>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={serviceCatalogIllustration}>
            <div>
              <h2>Improve production consistency</h2>
              <p>Here is where we talk about the scaffolder</p>
              <p>
                Talk about how service teams can use templates to scaffold their services in ways wihch have the best practices built in.
              </p>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={serviceCatalogIllustration}>
            <div>
              <h2>Docs that get read</h2>
              <p>This is where we talk about techdocs</p>
              <p>
                Talk about why this model works. Markdown files committed with the code, but centralised in Backstage where people can find them.
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
