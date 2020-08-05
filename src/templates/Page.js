import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import { SEO } from 'components';
import StickyFooter from 'components/layouts/StickyFooter';
import PostHeader from 'components/blog/PostHeader';

const useStyles = createUseStyles((theme) => ({
  content: theme.preMadeStyles.content,
}));

const Page = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();
  console.log(data);
  const post = data.markdownRemark;

  return (
    <>
      <SEO title={`${post.title} | ${siteTitle}`} />

      <StickyFooter location={location}>
        <PostHeader post={post} />
        <article
          className={classnames('typography-content', classes.content)}
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
