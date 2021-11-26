import React from 'react';
import { graphql } from 'gatsby';
import { SEO, Page, TextLink as Link } from 'components';
import { SimpleCenteredHeading } from 'components/landing';
import format from 'date-fns/format';

const ChangeSet = ({
  releasedAt,
  description,
  title,
}) => {
  console.log('releasedAt', releasedAt);
  return (
    <>
      <hr className="w-full bg-gray-100 my-12" style={{ height: 1 }} />
      <li className="mt-10 list-reset lg:flex items-start">
        <time className="lg:mt-1 uppercase text-xs lg:text-sm lg:leading-9 text-gray-500 font-bold w-48 flex-shrink-0">
          {format(new Date(releasedAt), 'MMM d, yyyy')}
        </time>

        <div>
          <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 md:text-3xl">
            {title}
          </h2>

          <div className="mt-6 prose max-w-none" dangerouslySetInnerHTML={{ __html: description.html }} />
        </div>
      </li>
    </>
  );
};

const Changelog = ({
  data: {
    site: {
      siteMetadata: {
        title: siteTitle,
      },
    },

    changeSets: {
      edges: changeSets,
    },
  },
}) => (
  <>
    <SEO
      title={`All blog posts | ${siteTitle}`}
      description={`
        Backstage content. Everything from technical how-tos to recaps of community sessions and 
        general engineering effectiveness content.
      `}
    />

    <Page>
      <SimpleCenteredHeading
        headline="What's new in Roadie"
        lead={
          <span>This is the changelog for Roadie. It lists new and updated features so you can get a quick overview of what&apos;s new. You can follow us on <Link color="primary" to="https://twitter.com/roadiehq">Twitter</Link> for more updates.</span>
        }
        headlineSize="small"
      />

      <ul className="container mt-12">
        {changeSets.map(({ node: { title, releasedAt, description } }) => (
          <ChangeSet
            key={`${title} ${releasedAt}`}
            title={title}
            releasedAt={releasedAt}
            description={description.childMarkdownRemark}
          />
        ))}
      </ul>
    </Page>
  </>
);

export default Changelog;

export const pageQuery = graphql`
  query Changelog {
    changeSets: allContentfulChangeSet(
      sort: {fields: releasedAt, order: DESC}
      limit: 20
    ) {
      edges {
        node {
          title
          releasedAt
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`;
