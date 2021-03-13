import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';

import ListItem from 'components/backstage/plugins/ListItem';
import { SEO, StickyFooter } from 'components';

const useStyles = createUseStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1rem',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '1rem',
  },

  input: {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.secondary.dark,
    border: `1px solid ${theme.palette.grey[300]}`,

    lineHeight: 2,
    padding: '0.1rem 0.5rem',

    '&:focus': {
      outlineWidth: 1,
      outlineStyle: 'solid',
      outlineColor: theme.palette.grey[500],
    },

    '&::placeholder': {
      color: theme.palette.secondary.light,
      opacity: 0.5,
      lineHeight: 2,
    },
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    header: {
      fontSize: 'inherit',
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

  const [query, setQuery] = useState('');

  let filteredPlugins = [];
  if (query === '') {
    filteredPlugins = plugins.edges;
  } else {
    filteredPlugins = plugins.edges.filter(({ node }) => {
      return node.frontmatter.humanName.toLowerCase().includes(query.toLowerCase());
    });
  }

  const onInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <SEO
        title={`Backstage Plugins Directory - All plugins | ${title}`}
        description="A comprehensive list of Backstage plugins. With screenshots, installation instructions and usage guides."
      />

      <StickyFooter location={location} headerBottomBorder={false}>
        <header className={classes.header}>
          <h1>Backstage plugins</h1>

          <form>
            <input
              type="text"
              onChange={onInputChange}
              value={query}
              aria-label="Search"
              className={classes.input}
              placeholder="Search"
            />
          </form>
        </header>

        <div className={classes.grid}>
          {filteredPlugins.map(({ node: { fields, frontmatter } }) => (
            <ListItem frontmatter={frontmatter} fields={fields} key={fields.slug} />
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
      sort: { fields: frontmatter___humanName, order: ASC }
      filter: { fileAbsolutePath: { regex: "/.+/content/backstage/plugins/.+/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }

          frontmatter {
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
