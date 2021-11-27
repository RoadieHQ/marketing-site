import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, TextLink as Link, SitewideHeader, SitewideFooter } from 'components';
import { SimpleCenteredHeading } from 'components/landing';
import format from 'date-fns/format';
import classnames from 'classnames';

const ReleasedAt = ({ releasedAt }) => (
  <time className="uppercase text-xs lg:text-sm leading-7 lg:pt-1 text-gray-500 font-bold md:w-32 lg:w-48 flex-shrink-0">
    {format(new Date(releasedAt), 'MMM d, yyyy')}
  </time>
);

const ChangeSet = ({
  releasedAt,
  description,
  title,
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);

  return (
    <>
      <hr className="w-full bg-gray-100 my-8" style={{ height: 1 }} />
      <li className="mt-6 list-reset lg:flex items-start">
        <div className="md:flex">
          <ReleasedAt releasedAt={releasedAt} />
          <div>
            <button onClick={toggleOpen} className="text-left">
              <h3
                className="tracking-tight text-gray-900 text-base sm:text-xl hover:underline"
              >
                {title}
              </h3>
            </button>

            <div
              className={classnames('mt-6 prose max-w-none', {
                'h-0 hidden': !isOpen,
              })}
              dangerouslySetInnerHTML={{ __html: description.html }}
            />
          </div>
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
      title={`Changelog | ${siteTitle}`}
      description={`
        A list of all new and updated features so you can get a quick overview of what has changed in the product.
      `}
    />

    <SitewideHeader />

    <main className="max-w-5xl sm:max-w-4xl mx-auto px-8 pb-20 lg:pt-8 lg:pb-28">
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
    </main>

    <SitewideFooter />
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
