import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';

import ListItem from 'components/backstage/plugins/ListItem';
import { SEO, StickyFooter } from 'components';

import theme from '../../theme';

const useStyles = createUseStyles(() => ({
  ul: {
    listStyle: 'none',
    paddingLeft: 0,
  },

  [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
    ul: {
      display: 'flex',
      flexWrap: 'wrap',
    },
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
        <ul className={classes.ul}>
          {plugins.edges.map(({ node }) => (
            <ListItem {...node} key={node.name} />
          ))}
        </ul>
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

    plugins: allYaml(filter: { name: { ne: "template" } }) {
      edges {
        node {
          name

          style {
            primaryColor
            contrastingColor
          }

          childrenLogoImage {
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
