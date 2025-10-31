import React from 'react';
import { graphql } from 'gatsby';
import { Seo, SitewideFooter, SitewideHeader, Button, Headline, Title } from 'components';
import { AlternatingFeatureBlock, AlternatingFeatureWrapper } from 'components/landing';
import { PAGE_PATHS } from '../../contactFormConstants';

import DocsScreenshotImg from '../../../content/assets/product-pages/docs-hero.svg';
import OrganizedImg from '../../../content/assets/product-pages/docs-organized.svg';
import DocsMarkDown from '../../../content/assets/product-pages/docs-markdown.svg';
import DocsApitypes from '../../../content/assets/product-pages/docs-api-types.svg';
import SnykImg from '../../../content/assets/product-pages/docs-snyk-logo.png';

import NoLockInImg from '../../../content/assets/product-pages/catalog-no-lock-in.png';

const SEO_TITLE = 'Centralized Documentation: everyone’s docs in a single place';
const LEAD = `Roadie’s Backstage-based Documenation lets you put docs where your developers are.`;

const PRODUCT = {
  features: [
    {
      title: 'Keep org-wide documentation organized',
      description: 'Roadie makes your documentation easier to discover',
      illustration: {
        png: OrganizedImg,
        alt: '',
      },
      paragraphs: [
        'Shuffling between Confluence, README files, swagger, and teams’ docusaurus takes a lot of time. Roadie’s TechDocs lets you render all your documentation in one place. Make sure everyone has access to the latest documentation version in a single place: their Internal Developer Portal.',
      ],
    },
    {
      title: 'Centralized yet distributed Docs-as-Code',
      description: 'Roadie lets developers maintain their docs along their codebase',
      illustration: {
        png: DocsMarkDown,
        alt: '',
      },
      paragraphs: [
        'Outdated documentation is often counterproductive. Roadie’s TechDocs are markdown files that to live next to the code they document, so developers have it easier to update it. Roadie will go through your repos looking for documentation entries and bring them all into your Internal Developer Portal.',
      ],
    },
    {
      title: 'A home for all API Specs too',
      description: 'Roadie lets you bring in OpenAPI, AsyncAPI, GraphQL, gRPC and custom API docs',
      illustration: {
        png: DocsApitypes,
        alt: '',
      },
      paragraphs: [
        'Minimize context switching by letting devs discovering an API in the catalog and learning how to use it on the spot. When your teams register API into the Roadie Catalog, they can let it render their endpoints documentation right within the corresponding entity page. Roadie will also have an aggregated view page for developers to have a single reference for all API docs.',
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
        'Spotify open-sourced Backstage because they didn’t want to re-do all their Developer Portal if a popular vendor came around. By using Roadie, you’re adopting Open Source Backstage but without the extensive setup and heavy maintenance.',
      ],
    },
  ],
};

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <Seo title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />

      <SitewideHeader borderBottom={false} />

      <section className="bg-blueroadie mx-auto max-w-7xl xl:rounded-lg lg:flex items-center">
        <div className="lg:w-1/2 p-4 lg:px-10 lg:py-16">
          <strong className="block text-white uppercase mb-8 text-xl font-highlight">
            Roadie’s Documentation
          </strong>
          <Headline size="medium" className="text-white">
            <span className="text-orange-600">Centralized docs:</span> no more shuffling around for
            documentation
          </Headline>

          <h2 className="mt-5 text-white text-lg sm:mt-8 lg:text-xl xl:text-xl xl:mr-6">
            Roadie’s TechDocs lets developers write docs alongside code, but read them in their
            Internal Developer Portal
          </h2>

          <Button
            link={true}
            color="primary"
            size="medium"
            to={PAGE_PATHS.freeTrial}
            className="font-bold bg-orange-600 tracking-wide mt-6"
            text="Try Roadie's Docs"
          />
        </div>
        <div className="lg:w-1/2 py-4 pb-[1px] lg:py-16 lg:px-[2px]">
          <img
            src={DocsScreenshotImg}
            alt="Docs Screenshot"
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

      <section className="text-center bg-white py-20 mt-5">
        <figure className="max-w-2xl px-4 mx-auto mb-5">
          <img src={SnykImg} alt="Snyk logo" className="block mx-auto mb-10" />
          <blockquote className="text-2xl font-bold tracking-wide">
            “We started moving all of our documentation into Backstage through Roadie. I totally
            recommend them. They’re great to work with and super responsive and helpful.”
          </blockquote>
          <figcaption className="text-xl mt-5">
            Crystal Hirshcorn, Director of Engineering, Snyk
          </figcaption>
        </figure>

        <Title el="h2" className="mt-10 xl:text-2xl xl:tracking-tight text-orange-600">
          See Roadie’s Tech Docs in action
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
  query DocumentationLandingQuery {
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
