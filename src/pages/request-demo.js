import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter } from 'components';
import { SidebarTestimonial } from 'components/landing';
import { RequestDemoCallToAction } from 'components/CallToAction';
import FormWithLeftSidebar from 'components/layouts/FormWithLeftSidebar';
import { SubmissionSuccessModal } from 'components/FormSubmissionModal';
import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';

import crystalAvatar from '../../content/assets/home/testimonial/crystal-snyk/crystal-avatar.webp';
import crystalAvatarPng from '../../content/assets/home/testimonial/crystal-snyk/crystal-avatar.jpeg';
import snykLogo from '../../content/assets/home/testimonial/crystal-snyk/snyk-monochrome.webp';
import snykLogoPng from '../../content/assets/home/testimonial/crystal-snyk/snyk-monochrome.png';

const SEO_TITLE = 'Request a demo of Roadie Backstage';

const SubmissionSuccessPositiveBody = () => (
  <p>
    Thank you for requesting a demo of Roadie Backstage. We&apos;ll be in touch via
    the email provided.
  </p>
);

const SubmissionSuccessNegativeBody = () => (
  <>
    <p>
      Roadie only supports GitHub and Bitbucket for now.
    </p>
    <p>
      We are working to support more tools in the near future.
      You will be among the first to know when we support yours.
    </p>
  </>
);

const RequestDemo = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [modalOpen, setModalOpen] = useState(false);
  const [scmTool, setScmTool] = useState(SCM_TOOLS[0].value);

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
        negativeTitle="Oops! We're not ready for you yet."
        negativeBody={<SubmissionSuccessNegativeBody />}
      />

      <div className="min-h-screen bg-white">
        <SitewideHeader />

        <FormWithLeftSidebar
          title="Request a demo"
          description="Bring your team to a fully featured demo of Roadie and Backstage."
          sidebarChildren={
            <SidebarTestimonial
              companyLogo={snykLogo}
              companyLogoPng={snykLogoPng}
              companyLogoAlt="Snyk logo"
              quote="Roadie are amazing. I totally recommend them. They’re great to work with and super responsive and helpful."
              avatar={{
                webp: crystalAvatar,
                png: crystalAvatarPng,
                alt: 'Black and white headshot of a womain with long straight hair.',
              }}
              quoteeName="Crystal Hirschorn"
              quoteeRole="Director of Engineering"
            />
          }
        >
          <RequestDemoCallToAction
            location={location}
            scmTool={scmTool}
            setScmTool={setScmTool}
            onSuccess={() => {
              setModalOpen(true);
            }}
          />
        </FormWithLeftSidebar>

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
        }
      }
    }
  }
`;
