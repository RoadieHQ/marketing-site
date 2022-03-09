import React, { useState } from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  SitewideHeader,
  SitewideFooter,
  Testimonial,
} from 'components';
import { ExtendedGetInstanceCallToAction } from 'components/CallToAction';
import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';
import SubmissionSuccessModal from 'components/free-trial/SubmissionSuccessModal';
import FormWithLeftSidebar from 'components/layouts/FormWithLeftSidebar';

const SEO_TITLE = 'Try hosted Spotify Backstage for free';

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
        email={email}
        scmTool={scmTool}
        handleCloseModal={handleCloseModal}
        modalOpen={modalOpen}
        siteMetadata={data.site.siteMetadata}
      />

      <div className="min-h-screen bg-white">
        <SitewideHeader />

        <FormWithLeftSidebar
          title="Free trial"
          description="Try Roadie Backstage free for 30 days. No credit card required. Get set up in hours."
          sidebarChildren={<Testimonial />}
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
