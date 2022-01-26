import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter, Testimonial } from 'components';
import FormSubmissionModal from 'components/CallToAction/FormSubmissionModal';
import { RequestDemoCallToAction } from 'components/CallToAction';
import FormWithLeftSidebar from 'components/layouts/FormWithLeftSidebar';

const SEO_TITLE = 'Request a demo of Roadie Backstage';

const SubmissionSuccessModal = ({ ...rest }) => {
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
};

const RequestDemo = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [modalOpen, setModalOpen] = useState(false);

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
