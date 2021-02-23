import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { SEO, StickyFooter, ContentHeader } from 'components';

import { Sidebar } from 'components/doc';

const useStyles = createUseStyles((theme) => ({
  content: theme.preMadeStyles.content,

  article: {
    paddingLeft: 32,
    paddingTop: 32,
  },

  main: {},

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    main: {
      display: 'flex',
    },
  },
}));

const Doc = ({ data: { doc, site }, location }) => {
  const siteTitle = site.siteMetadata.title;
  const classes = useStyles();

  return (
    <>
      <SEO
        title={`${doc.frontmatter.title} | ${siteTitle}`}
        description={doc.frontmatter.description}
      />

      <StickyFooter location={location}>
        <main className={classes.main}>
          <Sidebar location={location} />

          <article className={classes.article}>
            <ContentHeader frontmatter={doc.frontmatter} dateKey="lastUpdated" />
            <section className={classes.content} dangerouslySetInnerHTML={{ __html: doc.html }} />
          </article>
        </main>
      </StickyFooter>
    </>
  );
};

export default Doc;

export const pageQuery = graphql`
  query DocBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }

    doc: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        description
        title
        lastUpdated
      }
    }
  }
`;
