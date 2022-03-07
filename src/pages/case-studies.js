import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import get from 'lodash/get';

import { SEO, Page, TextLink as Link } from 'components';
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

      <Page>
        <ListHeader
          title="Case studies"
          description={
            <>
              Learn how organizations around the world are adopting and benefiting from Backstage. Want a high-level intro to Backstage? Check out our <Link to="/backstage-spotify/" color="primary">Ultimate Guide</Link>.
            </>
          }
        />

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map(({ node }) => (
            <CaseStudySummary key={node.fields.slug} study={node} />
          ))}
        </div>
      </Page>
    </>
  );
};

export default CaseStudiesIndex;

export const pageQuery = graphql`
  query {
    allContentfulCaseStudy(
      sort: {fields: date, order: DESC}
      filter: {tags: {eq: "case-study"}}
    ) {
      edges {
        node {
          description {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          date
          author {
            name
            avatar {
              gatsbyImageData(layout: FIXED, width: 40)
            }
          }
          slug
          title

          coverImage {
            gatsbyImageData(height: 192)
            title
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
