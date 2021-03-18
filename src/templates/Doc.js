import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { SEO, StickyFooter, ContentHeader, TextLink as Link } from 'components';
import { Sidebar } from 'components/doc';

const useStyles = createUseStyles((theme) => ({
  content: theme.preMadeStyles.content,

  article: {},
  main: {},

  articleFooter: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    marginTop: 48,
    paddingTop: 24,
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    article: {
      paddingLeft: 32,
      paddingTop: 32,
    },

    main: {
      display: 'flex',
    },

    articleFooter: {
      marginBottom: 48,
    },
  },
}));

const editOnGitHubUrl = ({ siteMetadata, doc }) => {
  const charStart = doc.fileAbsolutePath.indexOf('/content/docs');
  const projectRootPath = doc.fileAbsolutePath.slice(charStart, doc.fileAbsolutePath.length);
  // This URL will be incorrect until the document has been merged to the 'main' branch on
  // GitHub because `blob/main` is hardcoded into the sourceCodeUrl. We only need this link
  // to work in production though so that's ok.
  return `${siteMetadata.sourceCodeUrl}${projectRootPath}`;
};

const Doc = ({
  data: {
    doc,
    site: { siteMetadata },
  },
  location,
}) => {
  const classes = useStyles();

  return (
    <>
      <SEO
        title={`${doc.frontmatter.title} | ${siteMetadata.title}`}
        description={doc.frontmatter.description}
      />

      <StickyFooter location={location}>
        <main className={classes.main}>
          <Sidebar location={location} />

          <article className={classes.article}>
            <ContentHeader frontmatter={doc.frontmatter} dateKey="lastUpdated" />

            <div className={classes.content}>
              <h2>Table of Contents</h2>
              <section dangerouslySetInnerHTML={{ __html: doc.tableOfContents }} />
            </div>

            <section className={classes.content} dangerouslySetInnerHTML={{ __html: doc.html }} />

            <footer className={classes.articleFooter}>
              <Link to={editOnGitHubUrl({ siteMetadata, doc })}>Edit this page on GitHub</Link>
            </footer>
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
        sourceCodeUrl
        social {
          twitter
        }
      }
    }

    doc: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fileAbsolutePath
      tableOfContents(maxDepth: 2)

      frontmatter {
        description
        title
        lastUpdated
      }
    }
  }
`;
