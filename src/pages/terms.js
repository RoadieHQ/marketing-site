import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import { SEO, StickyFooter } from 'components';
import PostHeader from 'components/blog/PostHeader';

const useStyles = createUseStyles((theme) => ({
  content: theme.preMadeStyles.content,
}));

/* There should be a way to programatically create this page using the BlogPost template. It's
 * basically the same thing as a blog post, I just don't want it to be indexable by Google and
 * the content should not come from the blog posts directory.
 *
 * This page should be Disallowed in the robots.txt.
 */

const TermsAndConditions = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();

  const mockPost = {
    frontmatter: {
      title: 'Roadie Terms of service',
      date: 'July 11, 2020',
    },

    html: data.site.siteMetadata.content.termsAndConditionsText,
  };

  return (
    <>
      <SEO title={`Terms and Conditions | ${siteTitle}`} />

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

export default TermsAndConditions;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title

        content {
          termsAndConditionsText
        }
      }
    }
  }
`;
