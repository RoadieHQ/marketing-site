import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter } from 'components';
import FormSubmissionModal from 'components/CallToAction/FormSubmissionModal';
import { RequestEnterprisePricingCallToAction } from 'components/CallToAction';
import FormWithLeftSidebar from 'components/layouts/FormWithLeftSidebar';
import { SidebarLogoContent } from 'components/pricing';
import { isScmToolSupported } from 'components/free-trial/SubmissionSuccessModal';
import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';

const SEO_TITLE = 'Enterprise pricing for Roadie Backstage';

const SubmissionSuccessModal = ({ scmTool, ...rest }) => {
  if (isScmToolSupported(scmTool)) {
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
  }

  return (
    <FormSubmissionModal
      titleText="Oops! We're not ready for you yet."
      titleEmoji={null}
      bodyText={
        <>
          <p>
            While we eventually want to support all source code management tools,
            we&apos;re currently focussed on making our GitHub Cloud experience as good as it can be.
          </p>
          <p>
            You will be among the first to know when we support your toolchain.
          </p>
        </>
      }
      followOn="NEWSLETTER_AND_TWITTER"
      {...rest}
    />
  );
};

const RequestEnterprisePricing = ({ data, location }) => {
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
        description="Request a price based on the number of engineers at your company."
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
          title="Enterprise pricing"
          description="Enter your information below and we will be in touch with a quote."
          sidebarChildren={<SidebarLogoContent />}
        >
          <RequestEnterprisePricingCallToAction
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
