import React from 'react';
import { ResponsiveSpacer, TextLink as Link, } from 'components';
import { FeatureBlock } from 'components/FeatureBlock';
import { FaHeadphones, FaVideo } from 'react-icons/fa';

import customPluginsIllustration from '../../../content/assets/home/custom-plugin-illustration.svg';
import dragDropIllustration from '../../../content/assets/home/drag-drop-illustration.svg';
import securityMaintenanceIllustration from '../../../content/assets/home/security-maintenance-illustration.svg';
import serviceCatalogIllustration from '../../../content/assets/home/service-catalog-illustration.svg';
import productionConsistencyIllustration from '../../../content/assets/home/production-consistency-illustration.svg';
import mikeExpediaGroupQuote from '../../../content/assets/home/mike-expedia-quote.svg';

const linkIconWrapperStyle = {
  marginLeft: '1rem',
  verticalAlign: 'middle',
};

export const quickEasySetup = (
  <ResponsiveSpacer>
    <FeatureBlock imgSrc={dragDropIllustration}>
      <div>
        <h2>Quick and easy setup</h2>
        <p>Customize Backstage using our drag-and-drop composer.</p>
        <p>
          All major plugin formats are supported - cards, tabs sidebar, and pages.
        </p>
        <p>
          Mould Backstage to your organizations needs, and change it easily as you grow.
        </p>
        <p>
          <Link
            to="https://vimeo.com/manage/videos/569887456"
            color="primary"
          >
            <span>3 minute setup demo</span>
            <span style={linkIconWrapperStyle}>
              <FaVideo />
            </span>
          </Link>
        </p>
      </div>
    </FeatureBlock>
  </ResponsiveSpacer>
);

export const customPlugins = (
  <ResponsiveSpacer>
    <FeatureBlock imgSrc={customPluginsIllustration}>
      <div>
        <h2>Bring your own plugins</h2>
        <p>Push bespoke plugins into the private plugin repository.</p>
        <p>Use the NPM publishing workflow you already know.</p>
        <p>Connect bespoke plugins back to your internal tooling with flexible and secure technology.</p>
      </div>
    </FeatureBlock>
  </ResponsiveSpacer>
);

export const securityMaintenance = (
  <ResponsiveSpacer>
    <FeatureBlock imgSrc={securityMaintenanceIllustration}>
      <div>
        <h2>Get back to working better</h2>
        <p>Roadie handles upgrades and security so you can stay focussed on the work you do best.</p>
        <p>
          Open-source community power means that Backstage moves quickly. It&apos;s easy to fall behind if you don&apos;t put the work in.
        </p>
        <p>
          Let us ensure you always have the latest features.
        </p>
      </div>
    </FeatureBlock>
  </ResponsiveSpacer>
);

export const builtOnBackstage = (
  <ResponsiveSpacer>
    <FeatureBlock imgSrc={mikeExpediaGroupQuote}>
      <div>
        <h2>Built on Backstage</h2>
        <p>
          Backstage is the developer portal and service catalog which has enabled engineering hypergrowth at Spotify since 2016.
        </p>
        <p>
          It can improve developer productivity, reduce downtime, and enable your teams to ship high-quality code quickly.
        </p>

        <p>
          <Link to="/case-studies/" color="primary">Case studies</Link>
        </p>
      </div>
    </FeatureBlock>
  </ResponsiveSpacer>
);

export const discoverabilityAndOnboarding = (
  <ResponsiveSpacer>
    <FeatureBlock imgSrc={serviceCatalogIllustration}>
      <div>
        <h2>Cut onboarding time with discoverability</h2>
        <p>Backstage is a hub for everything developers need to do their work. Docs, runbooks, API specs and more. Everything new engineers need to get up to speed quickly.</p>
        <p>
          Spotify saw engineering onboarding time drop by 55% in the two years after deploying Backstage internally. All while onboarding hundreds of engineers each year.
        </p>

        <p>
          <Link
            to="https://changelog.com/podcast/415"
            color="primary"
          >
            <span>How Spotify documented thousands of services</span>
            <span style={linkIconWrapperStyle}>
              <FaHeadphones />
            </span>
          </Link>
        </p>
      </div>
    </FeatureBlock>
  </ResponsiveSpacer>
);

export const productionConsistency = (
  <ResponsiveSpacer>
    <FeatureBlock imgSrc={productionConsistencyIllustration}>
      <div>
        <h2>Improve production consistency</h2>
        <p>
          Use the built in scaffolder to create new services from templates which have your best practices built in.
        </p>
        <p>Roll out the golden path to simultaneously speed up development while baking best practices into your production services.</p>
      </div>
    </FeatureBlock>
  </ResponsiveSpacer>
);
