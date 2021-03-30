import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { SEO, StickyFooter, ContentHeader } from 'components';
import { TableOfContentsSidebar } from 'components/Sidebar';
import { Sidebar } from 'components/legal-notice';

const useStyles = createUseStyles((theme) => ({
  content: theme.preMadeStyles.content,

  main: {},
  article: {},
  sidebar: {},
  tocSidebar: {},

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

    sidebar: {
      minWidth: 250,
    },

    tocSidebar: {
      minWidth: '25%',
      // The table of contents can get very long on the Terms of Service page.
      overflowY: 'auto',
      maxWidth: '25%',
    },
  },
}));

const LegalNotice = ({ data: { notice, site }, location }) => {
  const siteTitle = site.siteMetadata.title;
  const classes = useStyles();

  return (
    <>
      <SEO
        title={`${notice.frontmatter.title} | ${siteTitle}`}
        description={notice.frontmatter.description}
      />

      <StickyFooter location={location} maxWidthBreakpoint="none">
        <main className={classes.main}>
          <Sidebar className={classes.sidebar} />

          <article className={classes.article}>
            <ContentHeader frontmatter={notice.frontmatter} dateKey="lastUpdated" />

            <section
              className={classes.content}
              dangerouslySetInnerHTML={{ __html: notice.html }}
            />
          </article>

          <TableOfContentsSidebar headings={notice.headings} className={classes.tocSidebar} />
        </main>
      </StickyFooter>
    </>
  );
};

export default LegalNotice;

export const pageQuery = graphql`
  query LegalNoticeBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }

    notice: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      headings(depth: h3) {
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
