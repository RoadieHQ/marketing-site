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
      <SEO title={`Backstage Plugin Directory | ${title}`} />
      <SEO description="A comprehensive list of Backstage plugins, with screenshots, installation instructions and usage guides." />

      <StickyFooter location={location}>
        <div className={classes.grid}>
          {plugins.edges.map(({ node }) => (
            <ListItem {...node} key={node.name} />
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

    plugins: allYaml(
      filter: { name: { ne: "template" } }
      sort: { fields: humanName, order: ASC }
    ) {
      edges {
        node {
          name
          humanName

          style {
            primaryColor
            contrastingColor
          }

          childrenLogoImage {
            childImageSharp {
              fixed(width: 200, grayscale: false) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
