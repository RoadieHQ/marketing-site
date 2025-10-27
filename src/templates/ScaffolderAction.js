import React from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  SitewideHeader,
  SitewideFooter,
} from 'components';
import { Header, Body, Sidebar } from 'components/backstage/scaffolder-actions';

const ScaffolderActionTemplate = ({ data }) => {
  const { action } = data;

  return (
    <>
      <SEO
        title={`${action.humanName || action.actionId} - Backstage Scaffolder Action`}
        description={action.description?.childMarkdownRemark?.excerpt || `Documentation for the ${action.humanName || action.actionId} Backstage scaffolder action.`}
      />

      <SitewideHeader />

      <div className="mt-4">
        <Header action={action} />
      </div>

      <main className="pb-8 px-4 lg:pb-28">
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-3 md:gap-12 lg:gap-20">
            <article className="col-span-3 md:col-span-2">
              <Body action={action} />
            </article>

            <aside className="hidden md:block md:col-span-1">
              <Sidebar action={action} />
            </aside>
          </div>
        </div>
      </main>

      <SitewideFooter />
    </>
  );
};

export default ScaffolderActionTemplate;

export const pageQuery = graphql`
  query ScaffolderActionBySlug($slug: String!) {
    action: contentfulBackstageScaffolderAction(slug: { eq: $slug }) {
      slug
      actionId
      humanName
      description {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      usageExamples {
        childMarkdownRemark {
          html
        }
      }
      inputSchema {
        internal {
          content
        }
      }
      outputSchema {
        internal {
          content
        }
      }
      codeLocation
      availableOnRoadie
      supportsDryRun
      containedInPackage {
        npmPackageName
      }
    }
  }
`;
