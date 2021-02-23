import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { TextLink as Link, SEO, StickyFooter } from 'components';
import format from 'date-fns/format';

const FORMAT_TOKEN = 'MMMM do, yyyy';

const useStyles = createUseStyles((theme) => ({
  content: theme.preMadeStyles.content,

  main: {},
  aside: {
    paddingTop: 16,
  },

  articleHeader: {
    marginBottom: 40,
  },

  h1: {
    fontWeight: theme.typography.bold.fontWeight,
    fontSize: '2.75rem',
    color: theme.palette.grey[900],
  },

  ul: {
    listStyle: 'none',
    padding: 0,
  },

  spacer: {
    marginBottom: '1em',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    main: {
      display: 'flex',
    },

    aside: {
      minWidth: 250,
    },
  },
}));

const LegalNotice = ({ data: { notice, site }, location }) => {
  const siteTitle = site.siteMetadata.title;
  const classes = useStyles();
  const dateTimestamp = Date.parse(notice.frontmatter.lastUpdated);
  const formattedDate = format(dateTimestamp, FORMAT_TOKEN);

  return (
    <>
      <SEO
        title={`${notice.frontmatter.title} | ${siteTitle}`}
        description={notice.frontmatter.description}
      />

      <StickyFooter location={location}>
        <main className={classes.main}>
          <aside className={classes.aside}>
            <ul className={classes.ul}>
              <li>
                <div className={classes.spacer}>
                  <Link to="/legal-notices/website-terms/">Website Terms of Use</Link>
                </div>
              </li>

              <li>
                <div className={classes.spacer}>
                  <Link to="/legal-notices/sub-processors/">List of Sub-Processors</Link>
                </div>
              </li>

              <li>
                <div className={classes.spacer}>
                  <Link to="/legal-notices/privacy-policy/">Privacy Policy</Link>
                </div>
              </li>

              <li>
                <div className={classes.spacer}>
                  <Link to="/legal-notices/cookies-policy/">Cookies Policy</Link>
                </div>
              </li>

              <li>
                <div className={classes.spacer}>
                  <Link to="/legal-notices/acceptable-use-policy/">Acceptable Use Policy</Link>
                </div>
              </li>
            </ul>
          </aside>

          <article>
            <header className={classes.articleHeader}>
              <h1 className={classes.h1}>{notice.frontmatter.title}</h1>
              <span>Last updated: {formattedDate}</span>
            </header>

            <section
              className={classes.content}
              dangerouslySetInnerHTML={{ __html: notice.html }}
            />
          </article>
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
      frontmatter {
        description
        title
        lastUpdated
      }
    }
  }
`;
