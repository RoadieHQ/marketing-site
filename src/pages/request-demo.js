import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter, Testimonial } from 'components';
import FormSubmissionModal from 'components/CallToAction/FormSubmissionModal';
import { RequestDemoCallToAction } from 'components/CallToAction';
import FormWithLeftSidebar from 'components/layouts/FormWithLeftSidebar';
import { isScmToolSupported } from 'components/free-trial/SubmissionSuccessModal';
import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';

const SEO_TITLE = 'Request a demo of Roadie Backstage';

const SubmissionSuccessModal = ({ scmTool, ...rest }) => {
  if (isScmToolSupported(scmTool)) {
    return (
      <FormSubmissionModal
        titleText="We'll be in touch"
        bodyText={
          <p>
            Thank you for requesting a Roadie Backstage demo. We will reach out to schedule a call via the email provided.
          </p>
        }
        followOn="NEWSLETTER_AND_TWITTER"
        {...rest}
      />
    );
  }

  return (
    <FormSubmissionModal
      titleText="Oops! We're not ready for you yet."
      titleEmoji={null}
      bodyText={
        <>
          <p>
            Roadie only supports GitHub and Bitbucket for now.
          </p>
          <p>
            We are working to support more tools in the near future.
            You will be among the first to know when we support yours.
          </p>
        </>
      }
      followOn="NEWSLETTER_AND_TWITTER"
      {...rest}
    />
  );
};

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
        handleCloseModal={handleCloseModal}
        modalOpen={modalOpen}
        siteMetadata={data.site.siteMetadata}
        scmTool={scmTool}
      />

      <div className="min-h-screen bg-white">
        <SitewideHeader />

        <FormWithLeftSidebar
          title="Request a demo"
          description="Bring your team to a fully featured demo of Roadie and Backstage."
          sidebarChildren={<Testimonial />}
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
