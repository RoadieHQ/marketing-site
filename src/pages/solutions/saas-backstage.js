import React from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter, SitewideHeader, Button, Headline } from 'components';
import { AlternatingFeatureBlock, AlternatingFeatureWrapper } from 'components/landing';
import Title from '../../components/Title';

import ScaffolderHeroImg from '../../../content/assets/product-pages/scaffolder-hero.svg';
import CatalogIntegrationsImg from '../../../content/assets/product-pages/catalog-integrations.png';
import NoLockInImg from '../../../content/assets/product-pages/catalog-no-lock-in.png';
import CatalogSearchImg from '../../../content/assets/product-pages/catalog-search.svg';

import { PAGE_PATHS } from '../../contactFormConstants';

const SEO_TITLE = 'SaaS Backstage: Enterprise-ready Internal Developer Portal';
const LEAD = `Get Backstage as a fully managed SaaS platform with seamless monthly upgrades, quick time to value, and pricing that scales with your usage.`;

const PRODUCT = {
  features: [
    {
      title: 'Seamless monthly upgrades — zero maintenance overhead',
      description: 'Stay current with the latest Backstage features without lifting a finger',
      illustration: {
        png: ScaffolderHeroImg,
        alt: 'Backstage platform managed and upgraded automatically',
      },
      paragraphs: [
        'Running Backstage yourself means constant dependency updates, security patches, and migration work. With Roadie, you get automatic monthly upgrades to the latest Backstage version, including all plugins and integrations. Our team handles breaking changes, testing, and deployment so your platform team can focus on building value for developers.',
        'Every upgrade is carefully tested across our infrastructure before rolling out to customers, ensuring stability and reliability.',
      ],
    },
    {
      title: 'Go from zero to production in days, not months',
      description: 'Skip the 6-12 month setup and start delivering value immediately',
      illustration: {
        png: CatalogIntegrationsImg,
        alt: 'Quick onboarding with pre-built integrations',
      },
      paragraphs: [
        'Self-hosting Backstage requires significant upfront investment: infrastructure setup, authentication configuration, plugin installation, and custom development. Teams typically spend 6-12 months before their developers see value.',
        'Roadie eliminates this friction with a production-ready Backstage instance in hours. Connect your GitHub/GitLab repos, configure SSO, and start cataloging services on day one. Our customers typically reach full adoption in weeks, not quarters.',
      ],
      ctaPrompt: {
        to: PAGE_PATHS.freeTrial,
        text: 'Start your free trial today',
      },
    },
    {
      title: 'Pricing that scales as you grow',
      description: 'Pay for what you use without upfront infrastructure costs',
      illustration: {
        png: CatalogSearchImg,
        alt: 'Flexible pricing model',
      },
      paragraphs: [
        'Self-hosting Backstage means fixed infrastructure costs whether you have 50 or 500 developers. You pay for servers, databases, monitoring, and the engineering team to run it all — often hundreds of thousands of dollars annually.',
        'Roadie offers transparent, usage-based pricing that scales with your organization. Start small with a free trial, then grow as your adoption increases. No hidden infrastructure costs, no dedicated ops team required. Our customers save 60-80% compared to self-hosting when factoring in total cost of ownership.',
      ],
      ctaPrompt: {
        to: '/pricing/',
        text: 'View pricing details',
      },
    },
    {
      title: 'Enterprise security and reliability built-in',
      description: 'SOC 2 compliant with 99.9% uptime SLA',
      illustration: {
        png: NoLockInImg,
        alt: 'Enterprise security and compliance',
      },
      paragraphs: [
        'Running a production-grade Internal Developer Portal requires robust security, monitoring, backup, and disaster recovery. Roadie is SOC 2 Type II certified and provides enterprise security features out of the box: SSO integration, audit logging, role-based access control, and encrypted data at rest and in transit.',
        'Our SRE team monitors your instance 24/7, ensuring 99.9% uptime. We handle backups, disaster recovery, and incident response so you can sleep soundly knowing your developer portal is in expert hands.',
      ],
    },
  ],
};

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />

      <SitewideHeader borderBottom={false} />

      <section className="bg-white mx-auto max-w-7xl xl:rounded-lg lg:flex items-center mt-8">
        <div className="lg:w-1/2 p-4 lg:px-10 lg:py-16">
          <strong className="block uppercase mb-8 text-xl font-highlight">
            Backstage as a Service
          </strong>
          <Headline size="medium">
            <span className="text-orange-600">SaaS Backstage:</span> all the power, none of the
            operational burden
          </Headline>

          <h2 className="mt-5 text-lg sm:mt-8 lg:text-xl xl:text-xl xl:mr-6">
            Get Backstage as a fully managed SaaS platform. Have your Internal
            Developer Portal running in hours with automatic upgrades, enterprise security, and
            pricing that scales with your usage.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              link={true}
              color="primary"
              size="medium"
              to={PAGE_PATHS.freeTrial}
              className="font-bold tracking-wide"
              text="Start Free Trial"
            />
            <Button
              link={true}
              color="secondary"
              size="medium"
              to={PAGE_PATHS.requestDemo}
              className="font-bold tracking-wide"
              text="Request a Demo"
            />
          </div>
        </div>
        <div className="lg:w-1/2 py-4 pb-[1px] lg:py-16 lg:px-[2px]">
          <img
            src={ScaffolderHeroImg}
            alt="Backstage platform interface"
            className="webkit-optimize-image-rendering"
          />
        </div>
      </section>

      <AlternatingFeatureWrapper id="product">
        <AlternatingFeatureBlock featureItem={PRODUCT.features[0]} illustrationSide="left" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[1]} illustrationSide="right" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[2]} illustrationSide="left" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[3]} illustrationSide="right" />
      </AlternatingFeatureWrapper>

      <section className="text-center bg-white py-20 mt-10 xl:mt-16">
        <div className="max-w-4xl px-4 mx-auto">
          <Title el="h2" className="text-3xl font-bold mb-6">
            Why teams choose Roadie for SaaS Backstage
          </Title>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">3 days</div>
              <div className="text-lg">Average time to first value vs. 6-12 months self-hosted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">70%+</div>
              <div className="text-lg">Cost savings vs. self-hosting Backstage</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-lg">Uptime SLA with 24/7 monitoring and support</div>
            </div>
          </div>
        </div>

        <Title el="h2" className="mt-16 xl:text-2xl xl:tracking-tight text-orange-600">
          See Roadie in action
        </Title>
        <Button
          link={true}
          color="primary"
          size="medium"
          to={PAGE_PATHS.requestDemo}
          className="font-bold tracking-wide mt-6"
          text="Schedule a Demo"
        />
      </section>

      <SitewideFooter />
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query SaaSBackstageQuery {
    site {
      siteMetadata {
        title
        social {
          twitter
          linkedin
        }
      }
    }
  }
`;
