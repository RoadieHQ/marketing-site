import React from 'react';
import { graphql } from 'gatsby';

import {
  SEO,
  SitewideHeader,
  SitewideFooter,
  TextLink as Link,
  Headline,
  SensibleNavList,
} from 'components';

const NotFoundPage = ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <>
    <SEO title={`404: Not Found | ${title}`} />

    <SitewideHeader />

    <div className="bg-white">
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto py-16 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              404 error
            </p>

            <div className="mt-2">
              <Headline size="medium" el="h2">
                This page does not exist
              </Headline>
            </div>
          </div>

          <div className="mt-12">
            <SensibleNavList />

            <div className="mt-8">
              <Link to="/" color="primary">
                Or go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SitewideFooter />
    </div>
  </>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
