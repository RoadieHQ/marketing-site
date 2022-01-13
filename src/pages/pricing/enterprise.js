import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter } from 'components';
import FormSubmissionModal from 'components/CallToAction/FormSubmissionModal';
import { RequestEnterprisePricingCallToAction } from 'components/CallToAction';
import FormWithLeftSidebar from 'components/layouts/FormWithLeftSidebar';

const SEO_TITLE = 'Enterprise pricing for Roadie Backstage';

const SubmissionSuccessModal = ({ ...rest }) => {
  return (
    <FormSubmissionModal
      titleText="We'll be in touch"
      bodyText={
        <p>
          Thank you for requesting Roadie Backstage pricing. We will be in touch via the email provided.
        </p>
      }
      followOn="NEWSLETTER_AND_TWITTER"
      {...rest}
    />
  );
};

const RequestEnterprisePricing = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SEO
        title={`${SEO_TITLE} | ${siteTitle}`}
        description="Request a price based on the number of engineers at your company."
      />

      <SubmissionSuccessModal
        handleCloseModal={handleCloseModal}
        modalOpen={modalOpen}
        siteMetadata={data.site.siteMetadata}
      />

      <div className="min-h-screen bg-white">
        <SitewideHeader />

        <FormWithLeftSidebar
          title="Request enterprise pricing"
          description="Enter your information below and we will be in touch with a quote."
        >
          <RequestEnterprisePricingCallToAction
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

export default RequestEnterprisePricing;

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
