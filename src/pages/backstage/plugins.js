import React from 'react';
import { graphql, Link } from 'gatsby';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import get from 'lodash/get';

import StickyFooter from 'components/layouts/StickyFooter';
import Logo from 'components/backstage/plugins/Logo';
import { SEO } from 'components';

import theme from '../../theme';

const useStyles = createUseStyles(() => ({
  ul: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    paddingLeft: 0,
  },

  li: {
    flexGrow: 1,
    maxWidth: 300,
    display: 'inline-block',
    marginLeft: 24,

    '&:first-child': {
      marginLeft: 0,
    },
  },

  link: {
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'capitalize',
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
      <SEO title={`Hosted, managed, enterprise Backstage | ${title}`} />

      <StickyFooter location={location}>
        <ul className={classes.ul}>
          {plugins.edges.map(({ node: { name, childrenLogoImage, style } }) => {
            const backgroundColor = get(style, 'primaryColor', theme.palette.primary.light);
            const color = get(style, 'contrastingColor', theme.palette.text.primary);

            return (
              <li
                className={classnames('typography-body', classes.li)}
                key={name}
                style={{ backgroundColor }}
              >
                <Link to={`/backstage/plugins/${name}`} className={classes.link} style={{ color }}>
                  <Logo sharpImage={childrenLogoImage[0].childImageSharp} />
                  <h2>{name}</h2>
                </Link>
              </li>
            );
          })}
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
