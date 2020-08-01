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

/* There should be a way to programatically create this page using the BlogPost template. It's
 * basically the same thing as a blog post, I just don't want it to be indexable by Google and
 * the content should not come from the blog posts directory.
 *
 * This page should be Disallowed in the robots.txt.
 *
 * There is a large amount of duplication between this page and the terms page.
 */

const PrivacyPolicy = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();

  const mockPost = {
    frontmatter: {
      title: `${data.site.siteMetadata.title} Privacy Policy`,
      date: 'July 11, 2020',
    },

    html: data.site.siteMetadata.content.privacyPolicyText,
  };

  return (
    <>
      <SEO title={`Privacy Policy | ${siteTitle}`} />

      <StickyFooter location={location}>
        <PostHeader post={mockPost} />
        <article
          className={classnames('typography-content', classes.content)}
          dangerouslySetInnerHTML={{
            __html: mockPost.html,
          }}
        />
      </StickyFooter>
    </>
  );
};

export default PrivacyPolicy;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title

        content {
          privacyPolicyText
        }
      }
    }
  }
`;
