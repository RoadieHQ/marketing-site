import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter } from 'components';
import FormSubmissionModal from 'components/CallToAction/FormSubmissionModal';
import { RequestTeamsEarlyAccessCallToAction } from 'components/CallToAction';
import FormWithLeftSidebar from 'components/layouts/FormWithLeftSidebar';
import { SidebarLogoContent } from 'components/pricing';
import { isScmToolSupported } from 'components/free-trial/SubmissionSuccessModal';
import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';

const SEO_TITLE = 'Backstage for Teams';

const SubmissionSuccessModal = ({ scmTool, ...rest }) => {
  if (isScmToolSupported(scmTool)) {
    return (
      <FormSubmissionModal
        titleText="We'll be in touch"
        bodyText={
          <p>
            We&apos;re excited to hear you&apos;re interested in Roadie Backstage for teams. We&apos;ll be in touch via email soon.
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
            our teams product will launch with GitHub Cloud support first.
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

const RequestTeamsEarlyAccess = ({ data, location }) => {
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
          title="Backstage for Teams"
          description="Get a developer hub for your team - docs, runbooks, API specs and more."
          sidebarChildren={<SidebarLogoContent />}
        >
          <RequestTeamsEarlyAccessCallToAction
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

