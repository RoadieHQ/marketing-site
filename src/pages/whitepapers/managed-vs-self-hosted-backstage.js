import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Headline, Seo, SitewideHeader, SitewideFooter, DotPattern } from '../../components';
import { RequestDemoCallToAction } from '../../components/CallToAction';
import { SCM_TOOLS } from '../../contactFormConstants';
import { ArrowCircleDownIcon } from '@heroicons/react/outline';

const SEO_TITLE = '[Whitepaper] Self-hosted Backstage vs Managed Backstage';

const RequestTrial = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const whitePaper = data.contentfulAsset;
  const whitePaperUrl = `https://${whitePaper.file.url}`;

  const [formSent, setFormSent] = useState(false);
  const [scmTool, setScmTool] = useState(SCM_TOOLS[0]);

  return (
    <>
      <Seo
        title={`${SEO_TITLE} | ${siteTitle}`}
        description="Get a better understanding of the advantages and disadvantages of self-hosting a Backstage instance vs hosting it through Roadie"
      />

      <div className="min-h-screen bg-white">
        <SitewideHeader ctaText="Request a Demo" />

        <section className="relative max-w-xl mx-auto p-4 mt-5 pt-10 sm:px-10 lg:max-w-7xl">
          <span className="border-2 px-4 py-2 uppercase mb-8 inline-block border-blueroadie font-bold tracking-wider">
            Whitepaper
          </span>
          <Headline size="medium" className="leading-snug text-orange-700 relative z-10">
            Self-hosted Backstage vs Managed Backstage
          </Headline>
          <h2 className="text-lg mt-3 lg:text-xl xl:text-xl font-bold relative z-10">
            A guide for making the best choice for your team
          </h2>
          <div className="relative z-10 lg:grid lg:grid-cols-4 mt-10 mb-20">
            <div className="mt-5 text-lg lg:col-span-2 lg:pr-10">
              <p className="text-lg mb-4">
                Backstage is the most flexible and powerful option for setting up an Internal
                Developer Portal, thanks to its OSS nature and plugin-based architecture.
              </p>
              <p className="text-lg mb-4">
                You can either set up and maintain Backstage on your own and then build an IDP on
                top of your self-hosted instance. Or, defer ownership of the instance to Roadie and
                only focus on building your IDP.
              </p>
              <p className="text-lg mb-4">
                Each option has advantages and disadvantages. The best option for you depends on
                your priorities and resources. In this whitepaper, we’ll overview considerations to
                help you understand if self-hosting Backstage is your best option or if managed
                Backstage can free your time for other tasks. We’ll cover aspects regarding:
              </p>
              <ol className="list-decimal list-inside text-lg mb-4">
                <li>Initial setup and deployment</li>
                <li>Authentication and Security</li>
                <li>Upgrades and maintenance</li>
                <li>Availability and support</li>
                <li>Customizability</li>
                <li>Working with Plugins</li>
              </ol>
              <p className="text-lg mb-4">
                We’ve put together these insights based on our extensive experience with
                Backstage—Roadie is the second largest contributor to the project—and the dozens of
                conversations we&apos;ve had with Backstage adopters.
              </p>
            </div>
            <div className="bg-white lg:col-span-2 rounded-lg border-2 p-10 border-orange-500">
              {!formSent ? (
                <>
                  <h3 className="leading-snug text-orange-600 relative z-10 text-center font-bold uppercase text-xl">
                    Access the whitepaper
                  </h3>
                  <RequestDemoCallToAction
                    location={location}
                    scmTool={scmTool}
                    setScmTool={setScmTool}
                    buttonText="Get Whitepaper"
                    onSuccess={() => {
                      setFormSent(true);
                    }}
                  />
                </>
              ) : (
                <div className="flex text-center flex-col justify-center align-center h-full">
                  <a href={whitePaperUrl} target="_blank" rel="noopener noreferrer">
                    <Headline
                      el="h3"
                      size="small"
                      className="leading-snug text-orange-600 relative z-10"
                    >
                      Download the whitepaper <br />
                      <ArrowCircleDownIcon className="mx-auto mt-6 mb-12 h-16 w-16 text-primary-600" />
                    </Headline>
                    <p className="text-lg">
                      We&apos;ve also emailed you the PDF <br /> so you can read it at a later time.
                    </p>
                  </a>
                </div>
              )}
            </div>
          </div>
          <DotPattern
            className="hidden absolute lg:block z-0 -top-12 right-12 transform translate-y-16 md:translate-y-24 lg:translate-y-10"
            width={454}
            height={274}
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
          />
        </section>

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
          linkedin
        }
      }
    }
    contentfulAsset(contentful_id: { eq: "w15agbTcw3VAAuatR2WaS" }) {
      title
      file {
        url
      }
    }
  }
`;
