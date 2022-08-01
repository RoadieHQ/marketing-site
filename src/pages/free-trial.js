import React, { useState } from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  SitewideHeader,
  SitewideFooter,
} from 'components';
import { SidebarTestimonial } from 'components/landing';
import { ExtendedGetInstanceCallToAction } from 'components/CallToAction';
import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';
import { SubmissionSuccessModal } from 'components/FormSubmissionModal';
import FormWithLeftSidebar from 'components/layouts/FormWithLeftSidebar';

import enriqueAvatar from '../../content/assets/home/testimonial/enrique-contentful/enrique-avatar.webp';
import enriqueAvatarPng from '../../content/assets/home/testimonial/enrique-contentful/enrique-avatar.png';
import contentfulLogo from '../../content/assets/home/testimonial/enrique-contentful/contentful-monochrome-white.webp';
import contentfulLogoPng from '../../content/assets/home/testimonial/enrique-contentful/contentful-monochrome-white.png';

const SEO_TITLE = 'Try hosted Spotify Backstage for free';

const SubmissionSuccessPositiveBody = () => (
  <p>
    Thank you for requesting a free trial of Roadie Backstage. We&apos;ll be in touch via the email
    provided.
  </p>
);

const SubmissionSuccessNegativeBody = () => (
  <>
    <p>Roadie only supports GitHub and Bitbucket for now.</p>
    <p>
      Roadie only supports GitHub for now.
    </p>
    <p>
      We are working to support more tools in the near future.
      You will be among the first to know when we support yours.
    </p>
  </>
);

const RequestTrial = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  const params = new URLSearchParams(location.search);

  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState(params.has('email') ? params.get('email') : '');
  const [scmTool, setScmTool] = useState(SCM_TOOLS[0].value);

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
        negativeTitle="Watch this space!"
        negativeBody={<SubmissionSuccessNegativeBody />}
      />

      <div className="min-h-screen bg-white">
        <SitewideHeader ctaText="Get a demo" ctaTo="/request-demo/" />

        <FormWithLeftSidebar
          title="Free trial"
          description="Try Roadie Backstage free for 30 days. No credit card required. Get set up in hours."
          sidebarChildren={
            <SidebarTestimonial
              companyLogo={contentfulLogo}
              companyLogoPng={contentfulLogoPng}
              companyLogoAlt="Contentful logo"
              quote="Roadie helps us get the most out of Backstage, while saving time and money on setup and operation."
              avatar={{
                webp: enriqueAvatar,
                png: enriqueAvatarPng,
                alt: 'The face of a man with a slight beard and glasses. He is looking up and to the right slightly.',
              }}
              quoteeName="Enrique Amodeo Rubio"
              quoteeRole="Staff Software Engineer"
            />
          }
        >
          <ExtendedGetInstanceCallToAction
            email={email}
            onSuccess={() => {
              setModalOpen(true);
            }}
            setEmail={setEmail}
            scmTool={scmTool}
            setScmTool={setScmTool}
          />
        </FormWithLeftSidebar>

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
        }
      }
    }
  }
`;
