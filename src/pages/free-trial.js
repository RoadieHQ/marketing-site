import React, { useState } from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  SitewideHeader,
  TailwindHeadContent,
  SitewideFooter,
} from 'components';
import { ExtendedGetInstanceCallToAction } from 'components/CallToAction';
import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';
import SubmissionSuccessModal from 'components/free-trial/SubmissionSuccessModal';
import FormWithTestimonial from 'components/layouts/FormWithTestimonial';

const SEO_TITLE = 'Get a SaaS Backstage trial';

const RequestTrial = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [scmTool, setScmTool] = useState(SCM_TOOLS[0].value);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SEO
        title={`${SEO_TITLE} | ${siteTitle}`}
        description="Get a SaaS Backstage experience from Roadie. We handle hosting and maintenance and let you get back to your customers."
      />

      <TailwindHeadContent />

      <SubmissionSuccessModal
        email={email}
        scmTool={scmTool}
        handleCloseModal={handleCloseModal}
        modalOpen={modalOpen}
        siteMetadata={data.site.siteMetadata}
      />

      <div className="min-h-screen bg-white">
        <SitewideHeader />

        <FormWithTestimonial
          title="Free trial"
          description="Try Roadie Backstage free for 30 days."
        >
          <ExtendedGetInstanceCallToAction
            email={email}
            onSuccess={setModalOpen}
            setEmail={setEmail}
            scmTool={scmTool}
            setScmTool={setScmTool}
          />
        </FormWithTestimonial>

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
