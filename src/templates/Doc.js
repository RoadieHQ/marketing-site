import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { SEO, StickyFooter, ContentHeader, TextLink as Link } from 'components';
import { TableOfContentsSidebar } from 'components/Sidebar';
import { Sidebar } from 'components/doc';

const useStyles = createUseStyles((theme) => ({
  content: theme.preMadeStyles.content,

  article: {},
  tocWrapper: {},
  main: {},
  tocSidebar: {},

  articleFooter: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    marginTop: 48,
    paddingTop: 24,
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    article: {
      paddingTop: 32,
      paddingLeft: 32,
      paddingRight: 32,
      flex: 1,
    },

    main: {
      display: 'flex',
    },

    articleFooter: {
      marginBottom: 48,
    },

    tocSidebar: {
      minWidth: '20%',
      maxWidth: '20%',
    },
  },

  [`@media (min-width: ${theme.breakpoints.values.xl}px)`]: {
    tocWrapper: {
      display: 'none',
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

      <StickyFooter location={location} maxWidthBreakpoint="none">
        <main className={classes.main}>
          <Sidebar />

          <article className={classes.article}>
            <ContentHeader frontmatter={doc.frontmatter} dateKey="lastUpdated" />

            <div className={classes.content}>
              <div className={classes.tocWrapper}>
                <h2>Table of Contents</h2>
                <section dangerouslySetInnerHTML={{ __html: doc.tableOfContents }} />
              </div>
            </div>

            <section className={classes.content} dangerouslySetInnerHTML={{ __html: doc.html }} />

            <footer className={classes.articleFooter}>
              <Link to={editOnGitHubUrl({ siteMetadata, doc })}>Edit this page on GitHub</Link>
            </footer>
          </article>

          <TableOfContentsSidebar headings={doc.headings} className={classes.tocSidebar} />
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
      headings(depth: h2) {
        id
        value
      }

      frontmatter {
        description
        title
        lastUpdated
      }
    }
  }
`;
