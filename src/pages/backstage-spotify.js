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
  to: '#what-spotify-backstage-is',
  text: 'What it is',
}, {
  to: '#who-it-has-been-adopted-by',
  text: 'Adopters',
}, {
  to: '#the-origins-of-spotify-backstage',
  text: 'The origins',
}, {
  to: '#problems-tackled-by-spotify-backstage',
  text: 'The problems it helps solve',
}, {
  to: '#the-main-features-of-backstage-by-spotify',
  text: 'The main features',
}, {
  to: '#the-use-cases-of-spotify-backstage',
  text: 'The use cases',
}, {
  to: '#how-to-get-started-with-spotify-backstage',
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

      <header className="bg-gray-900 pt-24 pb-12 text-white">
        <h2 className="mb-6 mt-0 text-center text-lg sm:text-xl md:text-2xl font-extrabold">
          Backstage by Spotify
        </h2>

        <div className="mb-12 lg:mb-24">
          <h2 className="mt-0 text-center text-4xl sm:text-5xl md:text-6xl tracking-tight font-light">
            The Ultimate Guide
          </h2>
        </div>

        <div className="relative max-w-lg mx-auto lg:max-w-2xl mb-12">
          <div className="lg:flex lg:flex-row-reverse px-4">
            <div className="flex-1 mb-24 lg:mb-12">
              <div className="flex justify-center items-center lg:justify-end">
                <img src={BackstageB} alt="Backstage log" className="h-60" />
              </div>
            </div>

            <div className="flex-1 text-lg">
              <p className="mb-3">
                This is the complete guide to using Backstage in your organization.
              </p>

              <p className="mb-3">
                If you want to understand the problems it can solve, the features it has, or use cases it can address, you&apos;re in the right place.
              </p>

              <p className="mb-3">
                Let&apos;s dive right in...
              </p>
            </div>
          </div>
        </div>
      </header>

      <nav className="text-center py-24">
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
