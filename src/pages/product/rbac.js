import React from 'react';
import { graphql } from 'gatsby';
import has from 'lodash/has';
import { SEO, SitewideFooter, SitewideHeader, Button, Headline } from 'components';
import { AlternatingFeatureBlock, AlternatingFeatureWrapper } from 'components/landing';
import Title from '../../components/Title';

import DocsScreenshotImg from '../../../content/assets/product-pages/docs-hero.svg';
import OrganizedImg from '../../../content/assets/product-pages/docs-organized.svg';
import DocsMarkDown from '../../../content/assets/product-pages/docs-markdown.svg';
import DocsApitypes from '../../../content/assets/product-pages/docs-api-types.svg';
import SnykImg from '../../../content/assets/product-pages/docs-snyk-logo.png';

import NoLockInImg from '../../../content/assets/product-pages/catalog-no-lock-in.png';

import { LOGOS } from '../../components/landing/CustomerLogoCloud';

const SEO_TITLE = 'Centralized RBAC: fine-grain control of your Backstage software catalog';
const LEAD = `Roadie’s Backstage-based RBAC lets you secure your software catalog and reduce cognitive load for your team.`;

const PRODUCT = {
  features: [
    {
      title: 'Gain control of your catalog',
      description: 'Roadie makes it easier to hide elements of your catalog',
      illustration: {
        png: OrganizedImg,
        alt: '',
      },
      paragraphs: [
        'Whether for privacy, compliance or secrecy concerns or simply because not all users need to see everything in your Backstage instance, sometimes you need a control plane to manage access. Role-based Access Control within Roadie provides just that.'
      ],
    },
    {
        title: 'Avoid unnecessary distractions',
        description: 'Roadie helps you align your Catalog with other systems',
        illustration: {
          png: NoLockInImg,
          alt: '',
        },
        paragraphs: [
          'From gating specific actions in a template to hiding individual items in your Catalog, you can configure a distraction-free environment for your teams. Whether that is for security concerns or simply because the user does not have reqiured upstream permissions, RBAC can help reduce frustration when a system outside the Catlaog is not accessible.',
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
        title: 'Centralized management',
        description: 'Roadie lets developers maintain their docs along their codebase',
        illustration: {
          png: DocsMarkDown,
          alt: '',
        },
        paragraphs: [
          'Outdated documentation is often counterproductive. Roadie’s Tech Docs are markdown files that to live next to the code they document, so developers have it easier to update it. Roadie will go through your repos looking for documentation entries and bring them all into your Internal Developer Portal.',
        ],
      },
  ],
};

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const darkLogos = [...LOGOS].filter(({ src }) => has(src, 'dark')).slice(0, 5);

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />

      <SitewideHeader borderBottom={false} />

      <section className="bg-blueroadie mx-auto max-w-7xl xl:rounded-lg lg:flex items-center">
        <div className="lg:w-1/2 p-4 lg:px-10 lg:py-16">
          <strong className="block text-white uppercase mb-8 text-xl font-highlight">
            Roadie’s Role-based Access Control
          </strong>
          <Headline size="medium" className="text-white">
            <span className="text-orange-600">No-code access management:</span> fine-grain control and reduced cognitive load for teams
          </Headline>

          <h2 className="mt-5 text-white text-lg sm:mt-8 lg:text-xl xl:text-xl xl:mr-6">
            Roadie’s Role-based Access Control lets you configure the subset of features and information that you want to present to any given team or user.
          </h2>

          <Button
            link={true}
            color="primary"
            size="medium"
            to="/free-trial/"
            className="font-bold bg-orange-600 tracking-wide mt-6"
            text="Try Roadie's RBAC"
          />

          <div className="mt-5 md:mt-8 xl:mt-16">
            <span className="text-sm uppercase font-bold tracking-wider text-white">
              Trusted by dozens of scale-ups
            </span>
            <div className="flex flex-wrap">
              {darkLogos.map((logo) => (
                <img
                  className="h-8 my-3 mx-3 lg:h-10 lg:ml-0 lg:mr-11 xl:h-11 xl:mr-13"
                  key={`hero-logo-${logo.alt}`}
                  src={logo.src.white}
                  alt={logo.alt}
                />
              ))}
            </div>
          </div>
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
          <blockquote
            className="text-2xl font-bold tracking-wide"
          >
            “We started using RBAC with Roadie, not because of security concerns, but because we wanted to present only information necessary to our engineering teams and reduce cognitive load.”
          </blockquote>
          <figcaption className="text-xl mt-5">
            Crystal Hirshcorn, Director of Engineering, Snyk
          </figcaption>
        </figure>

        <Title el="h2" className="mt-10 xl:text-2xl xl:tracking-tight text-orange-600">
          See Roadie’s RBAC in action
        </Title>
        <Button
          link={true}
          color="primary"
          size="medium"
          to="/request-demo/"
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
        }
      }
    }
  }
`;
