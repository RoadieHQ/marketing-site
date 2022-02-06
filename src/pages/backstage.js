import React from 'react';
import { graphql } from 'gatsby';

import {
  SEO,
  SitewideHeader,
  SitewideFooter,
  Headline,
  TextLink as Link,
} from 'components';
import BackstageB from '../../content/assets/logos/backstage/b-stack.png';

const tableOfContentItems = [{
  to: '#what',
  text: 'What is it?',
}, {
  to: '#who',
  text: 'Who uses it?',
}, {
  to: '#sdfjsdf',
  text: 'The problems it solves',
}, {
  to: '#kjsdfj',
  text: 'The main features',
}, {
  to: '#jdsfj',
  text: 'The use cases',
}, {
  to: '#akjdsf',
  text: 'How to get started',
}];

const TableOfContentItem = ({ to, text }) => (
  <li className="px-2">
    <Link to={to} color="primary">{text}</Link>
  </li>
);

const BackstageUltimateGuide = ({ data: { page, site } }) => {
  const siteTitle = site.siteMetadata.title;

  return (
    <>
      <SEO
        title={`${page.title} | ${siteTitle}`}
        description={page.seoDescription}
      />

      <SitewideHeader />

      <header className="bg-gray-900 py-24 text-white">
        <h2 className="mb-3 mt-0 text-center text-lg sm:text-xl md:text-2xl font-extrabold">
          Backstage by Spotify
        </h2>

        <div className="mb-24">
          <h2 className="mt-0 text-center text-2xl sm:text-4xl md:text-6xl tracking-tight">
            The Ultimate Guide
          </h2>
        </div>

        <div className="relative max-w-lg mx-auto lg:max-w-2xl mb-12">
          <div className="flex">
            <div className="flex-1 text-lg">
              <p className="mb-3">
                This is the complete guide to using Backstage in your organization.
              </p>

              <p className="mb-3">
                If you want to understand what problems Bacsktage can help solve, or use cases it can address, you&apos;re in the right place.
              </p>

              <p className="mb-3">
                Let&apos;s dive right in.
              </p>
            </div>

            <div className="flex-1">
              <img src={BackstageB} alt="Backstage log" className="h-48 m-auto" />
            </div>
          </div>
        </div>
      </header>

      <nav className="text-center pt-24 pb-12">
        <div className="mb-8">
          <Headline el="h2" size="small">
            Contents
          </Headline>
        </div>

        <div className="text-xl">
          <ol>
            {tableOfContentItems.map(({ to, text }) => (
              <TableOfContentItem to={to} text={text} key={to} />
            ))}
          </ol>
        </div>
      </nav>

      <main className="pt-4 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-28">
        <article className="relative max-w-lg mx-auto lg:max-w-2xl mb-24">
          <section
            className="prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }}
          />
        </article>
      </main>

      <SitewideFooter />
    </>
  );
};

export default BackstageUltimateGuide;

export const pageQuery = graphql`
  query BackstageUltimateGuide {
    site {
      siteMetadata {
        title
      }
    }

    page: contentfulMarkdownPage(slug: { eq: "/backstage/ultimate-guide/" }) {
      title
      date
      seoDescription
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
