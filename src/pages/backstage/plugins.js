import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';

import ListItem from 'components/backstage/plugins/ListItem';
import { SEO, StickyFooter } from 'components';

const useStyles = createUseStyles(() => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '1rem',
  },
}));

const Home = ({ data, location }) => {
  const {
    plugins,
    site: {
      siteMetadata: { title },
    },
  } = data;
  const classes = useStyles();

  return (
    <>
      <SEO
        title={`Backstage Plugin Directory | ${title}`}
        description="A comprehensive list of Backstage plugins, with screenshots, installation instructions and usage guides."
      />

      <StickyFooter location={location} headerBottomBorder={false}>
        <div className={classes.grid}>
          {plugins.edges.map(({ node }) => (
            <ListItem frontmatter={node.frontmatter} key={node.frontmatter.name} />
          ))}
        </div>
      </StickyFooter>
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    plugins: allMarkdownRemark(
      sort: { fields: frontmatter___name, order: ASC }
      filter: { fileAbsolutePath: { regex: "/.+/content/backstage/plugins/.+/" } }
    ) {
      edges {
        node {
          html

          frontmatter {
            name
            humanName

            logoImage {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }

            attribution {
              text
              href
            }
          }
        }
      }
    }
  }
`;
