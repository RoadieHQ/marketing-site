import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import {
  SEO,
  InterstitialTitle,
  StickyFooter,
  ResponsiveSpacer,
} from 'components';
import Hero from 'components/home/Hero';
import { GetInstanceFormCallToAction } from 'components/CallToAction';
import { FeatureBlock, FeatureBlockTitle, FeatureBlockParagraph } from 'components/FeatureBlock';

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
          <FeatureBlock imgSrc={customPluginsIllustration}>
            <div>
              <FeatureBlockTitle>Bring your own plugins</FeatureBlockTitle>
              <FeatureBlockParagraph>Our custom plugins pipeline lets you use your own bespoke and private plugins inside hosted Backstage.</FeatureBlockParagraph>
              <FeatureBlockParagraph>
                Enter some details about your custom plugin into Roadie, copy some credentials, then `npm publish` into our private and secure pipeline. Slack notifications included.
              </FeatureBlockParagraph>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={dragDropIllustration}>
            <div>
              <FeatureBlockTitle>Drag and drop setup</FeatureBlockTitle>
              <FeatureBlockParagraph>Customize Backstage to your needs using our drag-and-drop composer.</FeatureBlockParagraph>
              <FeatureBlockParagraph>
                Adding plugins to Backstage is as simple as picking them from a list and placing then where you want them. All types of frontend plugins are supported - cards, tabs and pages.
              </FeatureBlockParagraph>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={securityMaintenanceIllustration}>
            <div>
              <FeatureBlockTitle>Maintenance and Security built in</FeatureBlockTitle>
              <FeatureBlockParagraph>Backstage moves quickly and it takes effort to stay up to date.</FeatureBlockParagraph>
              <FeatureBlockParagraph>
                Enter some details about your custom plugin into Roadie, copy some credentials, then `npm publish` into our private and secure pipeline. Slack notifications included.
              </FeatureBlockParagraph>
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
              <FeatureBlockTitle>Built on Backstage</FeatureBlockTitle>
              <FeatureBlockParagraph>Grown from 4+ years of experience in production at Spotify.</FeatureBlockParagraph>
              <FeatureBlockParagraph>
                Backstage is a developer portal and service catalog which lorem ipsum. <a href="/case-studies/">Read more case studies</a>
              </FeatureBlockParagraph>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={serviceCatalogIllustration}>
            <div>
              <FeatureBlockTitle>Cut onboarding time with discoverability</FeatureBlockTitle>
              <FeatureBlockParagraph>Talk about how people can search for techdocs and other things.</FeatureBlockParagraph>
              <FeatureBlockParagraph>
                Include that fact about reducing the time to production.
              </FeatureBlockParagraph>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={serviceCatalogIllustration}>
            <div>
              <FeatureBlockTitle>Improve production consistency</FeatureBlockTitle>
              <FeatureBlockParagraph>Here is where we talk about the scaffolder</FeatureBlockParagraph>
              <FeatureBlockParagraph>
                Talk about how service teams can use templates to scaffold their services in ways wihch have the best practices built in.
              </FeatureBlockParagraph>
            </div>
          </FeatureBlock>
        </ResponsiveSpacer>

        <ResponsiveSpacer>
          <FeatureBlock imgSrc={serviceCatalogIllustration}>
            <div>
              <FeatureBlockTitle>Docs that get read</FeatureBlockTitle>
              <FeatureBlockParagraph>This is where we talk about techdocs</FeatureBlockParagraph>
              <FeatureBlockParagraph>
                Talk about why this model works. Markdown files committed with the code, but centralised in Backstage where people can find them.
              </FeatureBlockParagraph>
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
