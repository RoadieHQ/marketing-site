import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Headline, SEO, SitewideHeader, SitewideFooter, DotPattern, Button } from 'components';
import {
  CustomerLogoCloud,
  AlternatingFeatureBlock,
  AlternatingFeatureWrapper,
} from 'components/landing';
import { RequestRoadieLocalCallToAction } from 'components/CallToAction';
import { SubmissionSuccessModal } from 'components/FormSubmissionModal';
import { SCM_TOOLS } from '../contactFormConstants';

import ronAvatar from '../../content/assets/home/testimonial/ron-yotpo/avatar.webp';
import ronAvatarPng from '../../content/assets/home/testimonial//ron-yotpo/avatar.jpeg';
import Avatar from '../components/landing/Testimonials/Avatar';

import CatalogImg from '../../content/assets/home/illustrations/home-service-catalog.png';
import TemplatesImg from '../../content/assets/home/illustrations/home-templates.png';
import ExtensibleImg from '../../content/assets/home/illustrations/home-extensible.png';

const SEO_TITLE = 'Request access to Roadie Local: on-prem Roadie';

const PRODUCT = {
  features: [
    {
      title: 'Ready, Out-Of-The-Box',
      description: 'Start quickly. Go further.',
      illustration: {
        png: ExtensibleImg,
        alt: '',
      },
      paragraphs: [
        'Roadie Local gives you a deployable Internal Developer Portal (IDP), built on Backstage, with RBAC, SSO, Scorecards, 70+ plugins, and years of performance improvements built in. It is ready to go on day one.',
      ],
    },
    {
      title: 'Move Fast and (Don’t) Break Things',
      description: 'Deploy quickly, securely, and consistently.',
      illustration: {
        png: TemplatesImg,
        alt: '',
      },
      paragraphs: [
        'We take of the upgrades and security patches so you do not have to worry. All you need to do is pull the latest version of Roadie Local and spin it up.',
      ],
    },
    {
      title: 'Endlessly Extensible',
      description: 'Use 70+ open-source plugins or build your own.',
      illustration: {
        png: CatalogImg,
        alt: '',
      },
      paragraphs: [
        'Bring your own plugins, scaffolder actions, and field extensions. Just register them within the Roadie UI to get access to all the drag-and-drop, no-code functionality that natively-supported Roadie plugins enjoy - all securely hosted on your own infrastructure.',
      ],
    },
  ],
};

const SubmissionSuccessPositiveBody = () => (
  <>
    <p>
      Thank you for requesting access to Roadie Local. We&apos;ll be in touch via the email
      provided.
    </p>
  </>
);

const SubmissionSuccessNegativeBody = () => (
  <p>
    Thank you for requesting access to Roadie Local. We&apos;ll be in touch to learn more about your
    setup.
  </p>
);

const RequestRoadieLocal = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [modalOpen, setModalOpen] = useState(false);
  const [scmTool, setScmTool] = useState([...SCM_TOOLS][0]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SEO
        title={`${SEO_TITLE} | ${siteTitle}`}
        description="Get access to a Roadie-fied version of Backstage, complete with RBAC and Scorecards, deployable on your infrastructure."
      />

      <SubmissionSuccessModal
        scmTool={scmTool}
        handleCloseModal={handleCloseModal}
        modalOpen={modalOpen}
        siteMetadata={data.site.siteMetadata}
        positiveTitle="We'll be in touch!"
        positiveBody={<SubmissionSuccessPositiveBody />}
        negativeTitle="We'll be in touch!"
        negativeBody={<SubmissionSuccessNegativeBody scmTool={scmTool} />}
      />

      <div className="min-h-screen">
        <SitewideHeader />

        <section className="relative max-w-xl mx-auto p-4 mt-5 pt-10 sm:px-10 lg:max-w-7xl">
          <Headline size="medium" className="leading-snug text-orange-600 relative z-10">
            Roadie Local: Run Roadie on your infrastructure.
          </Headline>

          <h2 className="text-lg mt-3 lg:text-xl xl:text-xl font-bold relative z-10">
            Get access to a locally runnable and deployable version of Roadie.
          </h2>

          <p>
            Enquire now for access and to ask us about security, costs, customization, integrations,
            or anything else you want to know.
          </p>

          <div className="relative z-10 lg:grid lg:grid-cols-3 mt-10">
            <div className="bg-white lg:col-span-2 rounded-lg border-2 p-10 border-orange-500">
              <RequestRoadieLocalCallToAction
                location={location}
                scmTool={scmTool}
                setScmTool={setScmTool}
                showProductPrompts={false}
                onSuccess={() => {
                  setModalOpen(true);
                }}
              />
            </div>
            <div className="mt-5 p-5 lg:pl-10 lg:mt-10">
              <figure className="max-w-2xl mx-auto mt-10 mb-5">
                <blockquote className="text-2xl font-bold tracking-wide">
                  “The Roadie team have been incredible to work with. Their platform provides us
                  with a ton of flexibility and integrations. We’ve been able to start using
                  Backstage must faster and we don’t have to worry about the maintenance.”
                </blockquote>
                <figcaption className="flex text-xl mt-10">
                  <Avatar
                    avatar={{
                      webp: ronAvatar,
                      png: ronAvatarPng,
                      alt: 'Black and white headshot of a womain with long straight hair.',
                    }}
                  />
                  <span className="pl-5">
                    <strong>Ron Barabash</strong> <br /> Team Lead
                    <br /> Yotpo
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <AlternatingFeatureWrapper id="product">
            <AlternatingFeatureBlock featureItem={PRODUCT.features[0]} illustrationSide="left" />
            <AlternatingFeatureBlock featureItem={PRODUCT.features[1]} illustrationSide="right" />
            <AlternatingFeatureBlock featureItem={PRODUCT.features[2]} illustrationSide="left" />
          </AlternatingFeatureWrapper>
        </section>
        <CustomerLogoCloud />

        <SitewideFooter />
      </div>
    </>
  );
};

export default RequestRoadieLocal;

export const pageQuery = graphql`
  query {
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
