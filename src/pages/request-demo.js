import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Headline, SEO, SitewideHeader, SitewideFooter, DotPattern } from 'components';
import { FAQs, CustomerLogoCloud } from 'components/landing';
import { RequestDemoCallToAction } from 'components/CallToAction';
import { SubmissionSuccessModal } from 'components/FormSubmissionModal';
import { SCM_TOOLS } from '../contactFormConstants';

import crystalAvatar from '../../content/assets/home/testimonial/crystal-snyk/crystal-avatar.webp';
import crystalAvatarPng from '../../content/assets/home/testimonial/crystal-snyk/crystal-avatar.jpeg';
import snykLogo from '../../content/assets/home/testimonial/crystal-snyk/snyk-monochrome.webp';
import snykLogoPng from '../../content/assets/home/testimonial/crystal-snyk/snyk-monochrome.png';
import Avatar from '../components/landing/Testimonials/Avatar';

const SEO_TITLE = 'Request a demo of Roadie';

const SubmissionSuccessPositiveBody = () => (
  <>
    <p>Thank you for requesting a demo of Roadie. We&apos;ll be in touch via the email provided.</p>
  </>
);

const SubmissionSuccessNegativeBody = () => (
  <p>
    Thank you for requesting a demo of Roadie. We&apos;ll be in touch to learn more about your
    setup.
  </p>
);

const RequestDemo = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [modalOpen, setModalOpen] = useState(false);
  const [scmTool, setScmTool] = useState(SCM_TOOLS[0]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SEO
        title={`${SEO_TITLE} | ${siteTitle}`}
        description="Get a demo of the SaaS Backstage experience from Roadie."
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
            Discover Roadie
          </Headline>

          <h2 className="text-lg mt-3 lg:text-xl xl:text-xl font-bold relative z-10">
            Get a private Roadie demo from a Backstage expert.
          </h2>

          <p>
            Ask us about security, costs, customization, integrations, or anything else you want to
            know.
          </p>

          <div className="relative z-10 lg:grid lg:grid-cols-3 mt-10">
            <div className="bg-white lg:col-span-2 rounded-lg border-2 p-10 border-orange-500">
              <RequestDemoCallToAction
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
              <picture>
                <source srcSet={snykLogo} type="image/webp" />
                <source srcSet={snykLogoPng} type="image/png" />

                <img src={snykLogoPng} alt="Snyk logo" className="h-18" />
              </picture>
              <figure className="max-w-2xl mx-auto mt-10 mb-5">
                <blockquote className="text-2xl font-bold tracking-wide">
                  “Roadie are amazing. I totally recommend them. They’re great to work with and
                  super responsive and helpful.”
                </blockquote>
                <figcaption className="flex text-xl mt-10">
                  <Avatar
                    avatar={{
                      webp: crystalAvatar,
                      png: crystalAvatarPng,
                      alt: 'Black and white headshot of a womain with long straight hair.',
                    }}
                  />
                  <span className="pl-5">
                    <strong>Crystal Hirschorn</strong> <br /> Director of Engineering <br /> Snyk
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

export default RequestDemo;

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
