import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { SEO, TextLink as Link } from 'components';
import ContentHeader from 'components/tailwind/ContentHeader';
import { TableOfContentsSidebar } from 'components/Sidebar';
import { Sidebar } from 'components/tailwind/doc';
import editOnGitHubUrl from '../../editOnGitHubUrl';
import Sitewideheader from 'components/tailwind/SitewideHeader';
import HeadContent from 'components/tailwind/HeadContent';

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
      paddingLeft: 32,
      paddingRight: 32,
      flex: 1,
      paddingTop: 32,
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

const Doc = ({
  data: {
    doc,
    site: { siteMetadata },
  },
}) => {
  const classes = useStyles();

  return (
    <>
      <SEO
        title={`${doc.frontmatter.title} | ${siteMetadata.title}`}
        description={doc.frontmatter.description}
      />
      <HeadContent />

      <Sitewideheader maxWidth="full" />

      <main className={classes.main}>
        <Sidebar />

        <article className={classes.article}>
          <ContentHeader frontmatter={doc.frontmatter} dateKey="lastUpdated" />

        {/*
          <div className={classes.content}>
            <div className={classes.tocWrapper}>
              <h2>Table of Contents</h2>
              <section dangerouslySetInnerHTML={{ __html: doc.tableOfContents }} />
            </div>
          </div>
        */}

          <section
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: doc.html }}
          />

        {/*
          <footer className={classes.articleFooter}>
            <Link
              to={editOnGitHubUrl({ siteMetadata, node: doc, contentSourcePath: '/content/docs' })}
            >
              Edit this page on GitHub
            </Link>
          </footer>
        */}
        </article>

        {/*
        <TableOfContentsSidebar headings={doc.headings} className={classes.tocSidebar} />
        */}
      </main>
    </>
  );
};

export default Doc;

export const pageQuery = graphql`
  query TailwindDocBySlug($slug: String!) {
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
