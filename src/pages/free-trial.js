import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Headline, SEO, SitewideHeader, SitewideFooter, DotPattern } from 'components';
import { ExtendedGetInstanceCallToAction } from 'components/CallToAction';
import { SCM_TOOLS } from '../contactFormConstants';
import { SubmissionSuccessModal } from 'components/FormSubmissionModal';
import { FAQs, CustomerLogoCloud } from 'components/landing';
import Avatar from '../components/landing/Testimonials/Avatar';

import enriqueAvatar from '../../content/assets/home/testimonial/enrique-contentful/enrique-avatar.webp';
import enriqueAvatarPng from '../../content/assets/home/testimonial/enrique-contentful/enrique-avatar.png';
import contentfulLogo from '../../content/assets/home/testimonial/enrique-contentful/contentful-monochrome.webp';
import contentfulLogoPng from '../../content/assets/home/testimonial/enrique-contentful/contentful-monochrome.png';

const SEO_TITLE = 'Try Roadie for free';

const SubmissionSuccessPositiveBody = () => (
  <p>
    Thank you for requesting a free trial of Roadie. We&apos;ll be in touch via the email provided.
  </p>
);

const SubmissionSuccessNegativeBody = () => (
  <p>
    Thank you for requesting a demo of Roadie. We&apos;ll be in touch to learn more about your
    setup.
  </p>
);

const RequestTrial = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  const params = new URLSearchParams(location.search);

  const [modalOpen, setModalOpen] = useState(false);
  const [emailValues, setEmailValues] = useState({
    email: params.has('email') ? params.get('email') : '',
  });
  const [scmTool, setScmTool] = useState(SCM_TOOLS[0]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SEO
        title={`${SEO_TITLE} | ${siteTitle}`}
        description="We handle hosting and maintenance and let you get back to your customers. No credit card required."
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

      <div className="min-h-screen bg-white">
        <SitewideHeader ctaText="Request a Demo" />

        <section className="relative max-w-xl mx-auto p-4 mt-5 pt-10 sm:px-10 lg:max-w-7xl">
          <Headline size="medium" className="leading-snug text-orange-600 relative z-10">
            Try out Roadie Backstage
          </Headline>

          <h2 className="text-lg mt-3 lg:text-xl xl:text-xl font-bold relative z-10">
            Get a first-hand experience of Roadie Backstage.
          </h2>

          <p>See how Roadie can improve engineering discoverability and standardization.</p>

          <div className="relative z-10 lg:grid lg:grid-cols-3 mt-10">
            <div className="bg-white lg:col-span-2 rounded-lg border-2 p-10 border-orange-500">
              <ExtendedGetInstanceCallToAction
                emailValues={emailValues}
                onSuccess={() => {
                  setModalOpen(true);
                }}
                setEmailValues={setEmailValues}
                scmTool={scmTool}
                setScmTool={setScmTool}
                location={location}
                showProductPrompts={false}
              />
            </div>
            <div className="mt-5 p-5 lg:pl-10 lg:mt-16">
              <picture>
                <source srcSet={contentfulLogo} type="image/webp" />
                <source srcSet={contentfulLogoPng} type="image/png" />

                <img src={contentfulLogoPng} alt="Contentful logo" className="h-16" />
              </picture>
              <figure className="max-w-2xl mx-auto mt-10 mb-5">
                <blockquote className="text-2xl font-bold tracking-wide">
                  “Roadie helps us get the most out of Backstage, while saving time and money on
                  setup and operation.”
                </blockquote>
                <figcaption className="flex text-xl mt-10">
                  <Avatar
                    avatar={{
                      webp: enriqueAvatar,
                      png: enriqueAvatarPng,
                      alt: 'The face of a man with a slight beard and glasses. He is looking up and to the right slightly.',
                    }}
                  />
                  <span className="pl-5">
                    <strong>Enrique Amodeo Rubio</strong> <br /> Staff Software Engineer <br />{' '}
                    Contentful
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <DotPattern
            className="hidden absolute lg:block z-0 -top-12 right-12 transform translate-y-16 md:translate-y-24 lg:translate-y-10"
            width={454}
            height={274}
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
          />
        </section>

        <CustomerLogoCloud />
        <FAQs />
        <SitewideFooter />
      </div>
    </>
  );
};

export default RequestTrial;

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
