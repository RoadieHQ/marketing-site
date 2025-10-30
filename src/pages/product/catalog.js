import React from 'react';
import { graphql } from 'gatsby';
import { Seo, SitewideFooter, SitewideHeader, Button, Headline } from 'components';
import { AlternatingFeatureBlock, AlternatingFeatureWrapper } from 'components/landing';
import Title from '../../components/Title';

import SearchImg from '../../../content/assets/product-pages/catalog-search.svg';
import NoLockInImg from '../../../content/assets/product-pages/catalog-no-lock-in.png';
import IntegrationsImg from '../../../content/assets/product-pages/catalog-integrations.png';
import ContentfulCaseImg from '../../../content/assets/product-pages/catalog-structure.svg';
import YotpoImg from '../../../content/assets/product-pages/catalog-yotpo-logo.svg';

import { PAGE_PATHS } from '../../contactFormConstants';

const Seo_TITLE = 'Catalog: discoverability for your services, resources, and teams';
const LEAD = `Roadie’s Catalog lets you organize all your software assets, track ownership, and foster an Inner Source culture.`;

const PRODUCT = {
  features: [
    {
      title: 'Find everything under the same roof',
      description: 'Roadie helps you foster Inner Sourcing and collective ownership',
      illustration: {
        png: ContentfulCaseImg,
        alt: 'Read how Contentful is using Roadie to make Inner Source easy',
        to: '/case-studies/maintaining-velocity-through-hypergrowth-contentful/',
      },
      paragraphs: [
        'Cloud native teams struggle with disparate stacks and workflows. With Roadie, you can map your organization’s software assets in a structured Catalog that keeps track of ownership in the ecosystem. New and veteran contributors can discover the affordances at their disposal and who to contact if they want to collaborate.',
      ],
    },
    {
      title: 'Dozens of integrations, one click away',
      description: 'Roadie gives you a single pane of glass',
      illustration: {
        png: IntegrationsImg,
        alt: 'Check out the 46 integrations and plugins available',
        to: '/docs/integrations/',
      },
      paragraphs: [
        'Context switching takes a toll on Developers. Roadie integrates with popular vendors so your developers can find everything related to their service in a single place. Now developers can find everything related to their services under the same context, vendors included.',
      ],
      ctaPrompt: {
        to: '/docs/integrations/',
        text: 'Check out the Integrations available out-of-the-box',
      },
    },
    {
      title: 'Search across systems',
      description: 'Roadie improves your org’s discoverability',
      illustration: {
        png: SearchImg,
        alt: '',
      },
      paragraphs: [
        'With so many systems available, engineers struggle to find what they need. Make it easier them to navigate your organization through a centralized search for finding references in your software assets, documentation, Confluence, and Stackoverflow.',
      ],
    },
    {
      title: 'Avoid proprietary lock-ins',
      description: 'Roadie gives you the freedom of Open Source',
      illustration: {
        png: NoLockInImg,
        alt: '',
      },
      paragraphs: [
        'Spotify open sourced Backstage because they didn’t want to re-do their Internal Developer Portal if a popular vendor came around. Nowadays, Backstage is the market leader for Internal Developer Portals used by 600+ companies and endorsed by industry leaders. By using Roadie, you’re adopting Open Source Backstage, which means you can switch to a self-hosted Backstage instance if you outgrow our solution.',
      ],
    },
  ],
};

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <Seo title={`${Seo_TITLE} | ${siteTitle}`} description={LEAD} />

      <SitewideHeader borderBottom={false} />

      <div className="catalog-hero-background">
        <section className="bg-white rounded-md text-center mx-auto max-w-4xl mt-5 xl:rounded-lg lg:flex items-center justify-center catalog-pattern">
          <div className="p-4 lg:px-10 lg:py-16">
            <strong className="block uppercase mb-8 text-xl font-highlight">
              Roadie’s Catalog
            </strong>
            <Headline size="medium" className="leading-loose">
              <span className="text-orange-500">Automated discoverability:</span> cut the{' '}
              <nobr>wild-goose</nobr> chase for your engineers
            </Headline>

            <h2 className="mt-5 text-lg sm:mt-8 lg:text-xl xl:text-xl xl:mr-6">
              Put all services, APIs, resources, teams, and documentation under Roadie’s Catalog to
              eliminate the guessing game when gathering requirements for a new app or feature.
            </h2>

            <Button
              link={true}
              color="primary"
              size="medium"
              to={PAGE_PATHS.freeTrial}
              className="font-bold tracking-wide mt-10"
              text="Try Roadie’s Catalog"
            />
          </div>
        </section>
      </div>

      <AlternatingFeatureWrapper id="product">
        <AlternatingFeatureBlock featureItem={PRODUCT.features[0]} illustrationSide="left" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[1]} illustrationSide="right" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[2]} illustrationSide="left" />
        <AlternatingFeatureBlock featureItem={PRODUCT.features[3]} illustrationSide="right" />
      </AlternatingFeatureWrapper>

      <section className="text-center bg-white py-20 mt-10 xl:mt-16">
        <figure className="max-w-2xl px-4 mx-auto mb-5">
          <img src={YotpoImg} alt="Yotpo logo" className="block mx-auto mb-10" />
          <blockquote className="text-2xl font-bold tracking-wide">
            “The Roadie team have been incredible to work with. Their platform provides us with a
            ton of flexibility and integrations. We’ve been able to start using Backstage must
            faster and we don’t have to worry about the maintenance.”
          </blockquote>
          <figcaption className="text-xl mt-5">Ron Barabash, Team Lead, Yotpo</figcaption>
        </figure>

        <Title el="h2" className="mt-10 xl:text-2xl xl:tracking-tight text-orange-600">
          See the Roadie Catalog in action
        </Title>
        <Button
          link={true}
          color="primary"
          size="medium"
          to={PAGE_PATHS.requestDemo}
          className="font-bold tracking-wide mt-6"
          text="Request a Demo"
        />
      </section>

      <SitewideFooter />
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query CatalogQuery {
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
