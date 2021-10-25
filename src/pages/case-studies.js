import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import get from 'lodash/get';

import { SEO, SitewideHeader, SitewideFooter, TailwindHeadContent } from 'components';
import { Attribution, TitleAndDescription, ListHeader } from 'components/article';

const CaseStudySummary = ({ study }) => {
  const logoBackgroundColor = get(study, 'frontmatter.logo.backgroundColor', null);

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <GatsbyImage
          className="h-48 w-full"
          image={study.frontmatter.logo.image.childImageSharp.gatsbyImageData}
          backgroundColor={logoBackgroundColor}
          alt={study.frontmatter.logo.alt}
          objectFit="contain"
        />
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <TitleAndDescription post={study} />
        </div>

        <Attribution post={study} />
      </div>
    </div>
  );
};

const CaseStudiesIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO
        title={`Backstage case studies | ${siteTitle}`}
        description={`
          Learn how organizations around the world are adopting and benefiting from Backstage.
        `}
      />

      <TailwindHeadContent />
      <SitewideHeader />

      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <ListHeader
            title="Case studies"
            description="Learn how organizations around the world are adopting and benefiting from Backstage."
          />

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map(({ node }) => (
              <CaseStudySummary key={node.fields.slug} study={node} />
            ))}
          </div>
        </div>
      </div>

      <SitewideFooter />
    </>
  );
};

export default CaseStudiesIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/.+/case-studies/.+/" } }
    ) {
      edges {
        node {
          timeToRead
          fields {
            slug
          }

          frontmatter {
            date
            title
            description
            author {
              name
              avatar {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, width: 40)
                }
              }
            }

            logo {
              alt
              backgroundColor
              image {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
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
