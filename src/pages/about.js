import React from 'react';
import { graphql } from 'gatsby';
import RecruiteeJobsList from 'components/RecruiteeJobsList';

import {
  SEO,
  SitewideFooter,
  SitewideHeader,
} from 'components';

import {
  CircleThreeColTeam as Team,
  SimpleCenteredHeading,
  ExplainingTheVision,
  CustomerLogoCloud,
  Values,
} from 'components/landing';

const About = ({
  data: {
    team,
  }
}) => (
  <>
    <SEO
      title={`About us | Roadie`}
      description="Who we are and what we care about."
    />

    <SitewideHeader />

    <div className="bg-white">
      <SimpleCenteredHeading
        headline="Our mission is to increase the effectiveness of software development"
        lead="Software is positively impacting many facets of human life. We are still early in the journey towards building software effectively. By increasing the effectiveness of software development, we can have a huge impact on humanity."
      />
    </div>

    <ExplainingTheVision />

    <Values />

    <Team
      headline="Our Team"
      lead="We are a small team from enterprise software backgrounds. We understand the complexity of modern software development."
      people={team.edges.map(({ node }) => node.frontmatter)}
    />

    <RecruiteeJobsList />

    <CustomerLogoCloud />

    <SitewideFooter />
  </>
);

export default About;

export const pageQuery = graphql`
  query {
    team: allMarkdownRemark(
      sort: { frontmatter: { name: ASC } }
      filter: { fileAbsolutePath: { regex: "/.+/content/team/.+/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }

          frontmatter {
            name
            role
            bio
            linkedinUrl
            twitterUrl
            githubUrl

            headshot {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;
