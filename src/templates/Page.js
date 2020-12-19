import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';

import { SEO } from 'components';
import StickyFooter from 'components/layouts/StickyFooter';
import PostHeader from 'components/blog/PostHeader';

const useStyles = createUseStyles((theme) => ({
  content: theme.preMadeStyles.content,
}));

const Page = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();
  const post = data.markdownRemark;
  const {
    frontmatter: { title, description },
  } = post;

  return (
    <>
      <SEO title={`${title} | ${siteTitle}`} description={description} />

      <StickyFooter location={location}>
        <PostHeader post={post} />
        <article
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
      </StickyFooter>
    </>
  );
};

export default Page;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
      }
    }
  }
`;
