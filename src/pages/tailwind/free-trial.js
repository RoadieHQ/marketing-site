import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { SEO } from 'components';
import { ExtendedGetInstanceCallToAction } from 'components/tailwind/CallToAction';
import FormSubmissionModal from 'components/actions/FormSubmissionModal';
import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';
import SitewideHeader from 'components/tailwind/SitewideHeader';
import TailwindHeadContent from 'components/tailwind/HeadContent';

const SEO_TITLE = 'Get a SaaS Backstage trial';

const useStyles = createUseStyles((theme) => ({
  content: theme.preMadeStyles.content,
}));

const SubmissionSuccessModal = ({ email, scmTool, ...rest }) => {
  const classes = useStyles();

  if (SCM_TOOLS.filter(({ supported }) => supported).map(({ value }) => value).includes(scmTool)) {
    return (
      <FormSubmissionModal
        titleText="Your Backstage experience is on the way"
        bodyText={
          <div className={classes.content}>
            <p>
              Once it&apos;s ready, you&apos;ll receive an email at {email}. It typically takes a day or two to get everything ready.
            </p>
          </div>
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
        <div className={classes.content}>
          <p>
            Roadie only supports GitHub Cloud for now.
          </p>
          <p>
            We are working to support more tools in the near future,
            and you will be among the first to know when we support yours.
          </p>
        </div>
      }
      followOn="NEWSLETTER_AND_TWITTER"
      {...rest}
    />
  );
};

const Home = ({ data }) => {
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

      <SitewideHeader />

      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Get a free trial</h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
              arcu.
            </p>
          </div>
          <div className="mt-12">
            <ExtendedGetInstanceCallToAction
              email={email}
              onSuccess={setModalOpen}
              setEmail={setEmail}
              scmTool={scmTool}
              setScmTool={setScmTool}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

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
