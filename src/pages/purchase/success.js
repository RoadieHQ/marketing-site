import React from 'react';
import { graphql } from 'gatsby';

import {
  SEO,
  SitewideHeader,
  SitewideFooter,
  Headline,
  Lead,
  TextLink as Link,
} from 'components';

const PurchaseSuccessPage = ({
  data: {
    site: {
      siteMetadata: {
        title,
      },
    },
  },
}) => (
  <>
    <SEO
      title={`Welcome to Roadie | ${title}`}
      description="Success page which is shown to people who become Roadie customers"
    />

    <SitewideHeader />

    <div className="bg-white">
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto py-16 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              Success 🎉
           </p>

            <div className="mt-2">
              <Headline size="medium" el="h2">Welcome to Roadie</Headline>
            </div>
          </div>

          <div className="mt-20">
            <div className="mb-2">
              <Lead>
                We&apos;re so happy you decided to take our relationship to the next level.
              </Lead>
            </div>

            <div className="mb-4">
              <Lead>
                Your Roadie trial will be automatically upgraded to a supported
                production experience. You can keep using it as normal.
              </Lead>
            </div>

            <div className="mb-4">
              <Lead>
                If you need SSO set up, please contact the Roadie team via your Slack connect
                channel, or by using the chat widget in the Roadie Backstage application.
              </Lead>
            </div>

            <div className="mb-4">
              <Lead>Best,</Lead>
              <Lead>The Roadies.</Lead>
            </div>

            <div className="mb-4">
              <Link to="/docs/">Go to the docs<span aria-hidden="true"> &rarr;</span></Link>
            </div>
          </div>
        </div>
      </main>

      <SitewideFooter />
    </div>
  </>
);

export default PurchaseSuccessPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
