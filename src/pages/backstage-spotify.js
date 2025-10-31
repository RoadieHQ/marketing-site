import React from 'react';
import { graphql } from 'gatsby';

import { Seo, SitewideHeader, SitewideFooter, Headline, TextLink as Link } from 'components';
import { getSrc } from 'gatsby-plugin-image';

import BackstageB from '../../content/assets/logos/backstage/b-stack.png';

const tableOfContentItems = [
  {
    to: '/backstage-spotify#what-spotify-backstage-is',
    text: 'What it is',
  },
  {
    to: '/backstage-spotify#adopters',
    text: 'Adopters',
  },
  {
    to: '/backstage-spotify#the-origins-of-spotify-backstage',
    text: 'The origins',
  },
  {
    to: '/backstage-spotify#problems-tackled-by-spotify-backstage',
    text: 'The problems it helps solve',
  },
  {
    to: '/backstage-spotify#the-main-features-of-backstage-by-spotify',
    text: 'The main features',
  },
  {
    to: '/backstage-spotify#the-use-cases-of-spotify-backstage',
    text: 'The use cases',
  },
  {
    to: '/backstage-spotify#how-to-get-started-with-spotify-backstage',
    text: 'How to get started',
  },
  {
    to: '/backstage-spotify#more-learning-resources',
    text: 'More learning resources',
  },
];

const TableOfContentItem = ({ to, text }) => (
  <li className="px-2">
    <Link to={to} color="primary">
      {text}
    </Link>
  </li>
);

const BackstageUltimateGuide = ({ data: { page, site } }) => {
  const siteTitle = site.siteMetadata.title;

  return (
    <>
      <Seo
        title={`${page.title} | ${siteTitle}`}
        description={page.seoDescription}
        headerImage={getSrc(page.cover)}
        ogImageAlt={page.cover.title}
        meta={{
          revised: page.lastValidated,
        }}
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
                If you want to understand the problems it can solve, the features it has, or use
                cases it can address, you&apos;re in the right place.
              </p>

              <p className="mb-3">Let&apos;s dive right in...</p>
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
      lastValidated
      body {
        childMarkdownRemark {
          html
        }
      }
      cover {
        gatsbyImageData(height: 500)
        title
      }
    }
  }
`;
