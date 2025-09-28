import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import has from 'lodash/has';

import { SEO, Page, TextLink as Link } from 'components';
import { Attribution, TitleAndDescription, ListHeader } from 'components/article';

const EmptyLogoImage = (props) => <div {...props} />;

const LogoImage = ({ caseStudy, backgroundColor }) => {
  const images = get(caseStudy, 'logo.gatsbyImageData.images');
  const className = 'h-48 w-full object-contain p-8';
  if (!images) return <EmptyLogoImage className={className} />;
  if (!has(images, 'fallback.src')) return <EmptyLogoImage className={className} />;

  return (
    <img
      className={className}
      style={{ backgroundColor }}
      srcSet={images.sources[0].srcSet}
      sizes={images.sources[0].sizes}
      src={images.fallback.src}
      alt={caseStudy.logo.title}
    />
  );
};

const CaseStudySummary = ({ study }) => {
  const logoBackgroundColor = get(study, 'logoBackgroundColorHex', null);

  // This will be cleaned up once the remaining content pieces (excluding docs) are migrated
  // to Contentful.
  const shimmedCaseStudy = {
    frontmatter: {
      title: study.title,
      description: study.description.childMarkdownRemark.rawMarkdownBody,
      author: study.author,
      date: study.date,
    },

    fields: {
      slug: `/case-studies/${study.slug}/`,
    },

    timeToRead: study.body.childMarkdownRemark.timeToRead,
  };

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <LogoImage caseStudy={study} backgroundColor={logoBackgroundColor} />
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <TitleAndDescription post={shimmedCaseStudy} />
        </div>

        <Attribution post={shimmedCaseStudy} />
      </div>
    </div>
  );
};

const CaseStudiesIndex = ({ data: { caseStudies, site } }) => {
  const siteTitle = site.siteMetadata.title;

  return (
    <>
      <SEO
        title={`Roadie Backstage case studies | ${siteTitle}`}
        description={`
          Learn how engineereing organizations are adopting Spotify Backstage. Through Roadie or natively.
        `}
      />

      <Page>
        <ListHeader
          title="Case studies"
          description={
            <>
              Learn how engineering organizations are adopting and benefiting from Backstage & Roadie. Want a high-level intro to Backstage? Check out our <Link to="/backstage-spotify/" color="primary">Ultimate Guide</Link>.
            </>
          }
        />

        <div className="mt-12 mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
          {caseStudies.edges.map(({ node }) => (
            <CaseStudySummary key={node.slug} study={node} />
          ))}
        </div>
      </Page>
    </>
  );
};

export default CaseStudiesIndex;

export const pageQuery = graphql`
  query CaseStudyIndex {
    caseStudies: allContentfulCaseStudy(
      sort: {date: DESC}
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
          logoBackgroundColorHex

          body {
            childMarkdownRemark {
              timeToRead
            }
          }

          logo {
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
