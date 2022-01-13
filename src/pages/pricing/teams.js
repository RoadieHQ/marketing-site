import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter } from 'components';
import FormSubmissionModal from 'components/CallToAction/FormSubmissionModal';
import { RequestTeamsEarlyAccessCallToAction } from 'components/CallToAction';
import FormWithLeftSidebar from 'components/layouts/FormWithLeftSidebar';

const SEO_TITLE = 'Backstage for Teams';

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

const RequestTeamsEarlyAccess = ({ data, location }) => {
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
          title="Backstage for Teams"
          description="Get a developer hub for your team - docs, runbooks, API specs and more."
        >
          <RequestTeamsEarlyAccessCallToAction
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

export default RequestTeamsEarlyAccess;

export const pageQuery = graphql`
  query PricingTeams {
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

