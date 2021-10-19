import React, { useState } from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  SitewideHeader,
  TailwindHeadContent,
  SitewideFooter,
  DotPattern,
  LowSideAnglePattern,
  HighSideAnglePattern,
  SplitDiagonalPattern,
  Testimonial,
} from 'components/tailwind';
import { ExtendedGetInstanceCallToAction } from 'components/tailwind/CallToAction';
import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';
import SubmissionSuccessModal from 'components/tailwind/free-trial/SubmissionSuccessModal';

const SEO_TITLE = 'Get a SaaS Backstage trial';

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

      <div className="min-h-screen bg-white">
        <SitewideHeader />

        <main className="overflow-hidden pb-24 mb-24">
          {/* Header */}
          <div className="bg-warm-gray-50">
            <div className="py-24 lg:py-32">
              <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
                  Free trial
                </h1>

                <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">
                  Try Roadie Backstage free for 30 days.
                </p>
              </div>
            </div>
          </div>

          <section className="relative bg-white" aria-labelledby="free-trial-heading">
            <div className="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <DotPattern
                className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
                width={404}
                height={384}
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative bg-white shadow-xl">
                <h2 id="free-trial-heading" className="sr-only">
                  Request a free trial form
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-indigo-500 to-indigo-600 sm:px-10 xl:p-12">
                    <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                      <SplitDiagonalPattern />
                    </div>

                    <div
                      className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                      aria-hidden="true"
                    >
                      <HighSideAnglePattern />
                    </div>

                    <div
                      className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                      aria-hidden="true"
                    >
                      <LowSideAnglePattern />
                    </div>

                    <Testimonial />
                  </div>

                  <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      Request a trial
                    </h3>

                    <div className="mt-6">
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
              </div>
            </div>
          </section>

          {/* BOTTOM PANEL */}
        </main>

        <SitewideFooter />
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

//                 <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
//           <div className="relative max-w-xl mx-auto">
//             <Pattern />
//             <OtherPattern />
// 
//             <div className="text-center">
//               <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Get a free trial</h2>
//               <p className="mt-4 text-lg leading-6 text-gray-500">
//                 Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
//                 arcu.
//               </p>
//             </div>
// 
//             <div className="mt-12">
//               <ExtendedGetInstanceCallToAction
//                 email={email}
//                 onSuccess={setModalOpen}
//                 setEmail={setEmail}
//                 scmTool={scmTool}
//                 setScmTool={setScmTool}
//               />
//             </div>
//           </div>
//         </div>

