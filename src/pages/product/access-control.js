import React from 'react';
import { graphql } from 'gatsby';
import has from 'lodash/has';
import { SEO, SitewideFooter, SitewideHeader, Button, Headline, Title } from 'components';
import { AlternatingFeatureBlock, AlternatingFeatureWrapper } from 'components/landing';
import { PAGE_PATHS } from '../../contactFormConstants';

import RbacIdpLogos from '../../../content/assets/product-pages/rbac-idp-logos.svg';
import RbacScaffolder from '../../../content/assets/product-pages/rbac-scaffolder.svg';
import RbacDenied from '../../../content/assets/product-pages/rbac-denied.svg';
import RbacRoleManagement from '../../../content/assets/product-pages/rbac-role-management.svg';

const SEO_TITLE = 'Centralized RBAC: fine-grained control of your Backstage software catalog';
const LEAD = `Roadie’s Backstage-based RBAC lets you secure your software catalog and reduce cognitive load for your team.`;

const PRODUCT = {
  features: [
    {
      title: 'Gain fine-grained control of your catalog',
      description: 'Roadie makes it easier to slice and dice your software catalog',
      illustration: {
        png: RbacDenied,
        alt: '',
      },
      paragraphs: [
        'Whether for privacy, compliance or secrecy reason, or simply because not all users need to see everything in your catalog, Role-based Access Control within Roadie provides the control you need to select who can and cannot see items, execute tasks or make changes.'
      ],
    },
    {
        title: 'Customisable roles for easy management',
        description: 'Roadie helps you configure roles that match your organisation',
        illustration: {
          png: RbacRoleManagement,
          alt: '',
        },
        paragraphs: [
          'Roadie’s fine-grained management features allow customisable permissions policies and roles to help you model your own rules around information sharing to the configuration of your catalog. Only show the each type of user information that is pertinent and relevant.',
        ],
      },
    {
      title: 'Integrated with your identity provider',
      description: 'Roadie lets you import roles from whichever Identity Provider you are using',
      illustration: {
        png: RbacIdpLogos,
        alt: '',
      },
      paragraphs: [
        'Pass roles from your Identity Provider (IdP) straight to Roadie to allow seamless role management. Roadie access management and permissions framework integrates into the tools you already use to manage access.',
      ],
    },
    {
        title: 'Avoiding unnecessary distractions',
        description: 'Roadie helps you configure a distraction-free environment for your teams',
        illustration: {
          png: RbacScaffolder,
          alt: '',
        },
        paragraphs: [
          'From gating specific actions in a template to hiding individual items in your Catalog if the user does not have reqiured upstream permissions, RBAC can help reduce lost time when a system outside the Catalog is not accessible.',
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

      <section className="bg-blueroadie mx-auto max-w-7xl xl:rounded-lg lg:flex items-center">
        <div className="lg:w-1/2 p-4 lg:px-10 lg:py-16">
          <strong className="block text-white uppercase mb-8 text-xl font-highlight">
            Roadie’s role-based Access Control
          </strong>
          <Headline size="medium" className="text-white">
            <span className="text-orange-600">Access Control:</span> fine-grained control to reduce cognitive load for teams
          </Headline>

          <h2 className="mt-5 text-white text-lg sm:mt-8 lg:text-xl xl:text-xl xl:mr-6">
            Roadie’s role-based Access Control lets you configure precise subsets of features and information that you want to present to any given team or user.
          </h2>

          <Button
            link={true}
            color="primary"
            size="medium"
            to={PAGE_PATHS.freeTrial}
            className="font-bold bg-orange-600 tracking-wide mt-6"
            text="Try Roadie's RBAC"
          />

        </div>
        <div className="lg:w-1/2 py-4 pb-[1px] lg:py-16 lg:px-[2px]">
          <img
            src={RbacScaffolder}
            alt="RBAC Screenshot"
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
        {/* <figure className="max-w-2xl px-4 mx-auto mb-5">
          <img src={SnykImg} alt="Snyk logo" className="block mx-auto mb-10" />
          <blockquote
            className="text-2xl font-bold tracking-wide"
          >
            “We started using RBAC with Roadie, not because of security concerns, but because we wanted to present only information necessary to our engineering teams and reduce cognitive load.”
          </blockquote>
          <figcaption className="text-xl mt-5">
            --, Director of Engineering, -corp-
          </figcaption>
        </figure> */}

        <Title el="h2" className="mt-10 xl:text-2xl xl:tracking-tight text-orange-600">
          See Roadie’s Role-based access control in action
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
