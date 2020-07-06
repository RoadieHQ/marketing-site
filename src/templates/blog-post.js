import React from "react"
import { Link, graphql } from "gatsby"
import { createUseStyles } from 'react-jss';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const useStyles = createUseStyles({
  h1: {
    marginTop: rhythm(1),
    marginBottom: 0,
  },

  p: {
    ...scale(-1 / 5),
    display: `block`,
    marginBottom: rhythm(1),
  },

  hr: {
    marginBottom: rhythm(1),
  },

  ul: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `space-between`,
    listStyle: `none`,
    padding: 0,
  },
});

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const classes = useStyles();

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1 className={classes.h1}>
            {post.frontmatter.title}
          </h1>
          <p className={classes.p}>
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr className={classes.hr} />
      </article>

      <nav>
        <ul className={classes.ul}>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
